"use client";

import React from "react";
import { motion, MotionProps } from "framer-motion";
import Pasta from "../../public/pastaWhite.svg";
import { cn } from "@/lib/utils";
import Image from "next/image";

type AnimatedButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  MotionProps & {
    children?: React.ReactNode;
    as?: any;
  };

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children = "Order Now",
  className = "",
  as = "button",
  ...rest
}) => {
  const Component = (motion as any)[as] || motion.button;

  return (
    <Component
      {...rest}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.97 }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30,
        mass: 0.5,
      }}
      className={cn(
        "group inline-flex items-center justify-center gap-5 px-5 py-2.5 rounded-full relative overflow-hidden",
        "bg-[#1a1a2e] border border-[#1a1a2e] text-white font-medium",
        "transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950",
        "disabled:pointer-events-none disabled:opacity-50",
        "[--shine:rgba(255,255,255,.5)]",
        className,
      )}
    >


      <motion.span
        className="tracking-wide font-medium relative z-10 align-center flex flex-row gap-4"
        style={{
          WebkitMaskImage:
            "linear-gradient(-75deg, white calc(var(--mask-x) + 20%), transparent calc(var(--mask-x) + 30%), white calc(var(--mask-x) + 100%))",
          maskImage:
            "linear-gradient(-75deg, white calc(var(--mask-x) + 20%), transparent calc(var(--mask-x) + 30%), white calc(var(--mask-x) + 100%))",
        }}
        initial={{ ["--mask-x" as any]: "100%" } as any}
        animate={{ ["--mask-x" as any]: "-100%" } as any}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear",
          repeatDelay: 1,
        }}
      >
        <Image
          src={Pasta}
          alt=""
          width={18}
          height={18}
          className="relative z-10 shrink-0"
        />
        {children}
      </motion.span>

      <motion.span
        className="block absolute inset-0 rounded-full p-px"
        style={{
          background:
            "linear-gradient(-75deg, transparent 30%, var(--shine) 50%, transparent 70%)",
          backgroundSize: "200% 100%",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
        }}
        initial={{ backgroundPosition: "100% 0", opacity: 0 }}
        animate={{ backgroundPosition: ["100% 0", "0% 0"], opacity: [0, 1, 0] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 1,
        }}
      />
    </Component>
  );
};

export default AnimatedButton;
