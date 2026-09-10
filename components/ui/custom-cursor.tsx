"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 22, stiffness: 380, mass: 0.4 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleLinkEnter = () => setIsHovering(true);
    const handleLinkLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", moveCursor);
    document.body.addEventListener("mouseenter", handleMouseEnter);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    const interactiveSelectors = [
      "a",
      "button",
      "[role='button']",
      "input",
      "textarea",
      "select",
      ".cursor-pointer",
      "[data-cursor='hover']",
    ].join(",");

    const interactiveElements = document.querySelectorAll(interactiveSelectors);

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleLinkEnter);
      el.addEventListener("mouseleave", handleLinkLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      document.body.removeEventListener("mouseleave", handleMouseLeave);

      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleLinkEnter);
        el.removeEventListener("mouseleave", handleLinkLeave);
      });
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <style>{`
        body,
        a,
        button,
        [role="button"],
        input,
        textarea,
        select,
        .cursor-pointer,
        [data-cursor="hover"] {
          cursor: none !important;
        }
      `}</style>

      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
      >
        {/* Solid circle that inverts whatever is behind it */}
        <motion.div
          className="rounded-full bg-[#01264D]"
          animate={{
            width: isHovering ? 52 : 26,
            height: isHovering ? 52 : 26,
          }}
          transition={{
            type: "spring",
            stiffness: 350,
            damping: 22,
          }}
        />
      </motion.div>
    </>
  );
}