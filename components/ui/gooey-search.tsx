"use client";

import { useState, useRef, useEffect, useMemo, useId } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Pasta from "../../public/pastaOrg.svg";

// ── Utilities ────────────────────────────────────────────────────────────────

function detectUnsupportedBrowser(): boolean {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent.toLowerCase();
  const isSafari =
    ua.includes("safari") &&
    !ua.includes("chrome") &&
    !ua.includes("chromium") &&
    !ua.includes("android") &&
    !ua.includes("firefox");
  return isSafari || ua.includes("crios");
}

function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debouncedValue;
}

// ── Animation variants ───────────────────────────────────────────────────────

const buttonMotionVariants = {
  step1: { width: "min(400px, 92vw)" },
  step2: { width: "min(720px, 94vw)" },
};

const orderButtonVariants = {
  collapsed: {
    width: 48,
    paddingLeft: 0,
    paddingRight: 0,
  },
  expanded: {
    width: 160,
    paddingLeft: 16,
    paddingRight: 16,
  },
};

const getResultVariants = (index: number, unsupported: boolean) => ({
  initial: {
    y: 0,
    scale: 0.3,
    filter: unsupported ? "none" : "blur(10px)",
  },
  animate: {
    y: (index + 1) * 56,
    scale: 1,
    filter: "blur(0px)",
  },
  exit: {
    y: unsupported ? 0 : -4,
    scale: 0.8,
  },
});

const getResultTransition = (index: number) => ({
  duration: 0.75,
  delay: index * 0.12,
  type: "spring" as const,
  bounce: 0.35,
  filter: { ease: "easeInOut" },
});

// ── Icons ────────────────────────────────────────────────────────────────────

function LoadingSvgIcon() {
  const lines: [number, number, number, number][] = [
    [128, 32, 128, 64],
    [195.88, 60.12, 173.25, 82.75],
    [224, 128, 192, 128],
    [195.88, 195.88, 173.25, 173.25],
    [128, 224, 128, 192],
    [60.12, 195.88, 82.75, 173.25],
    [32, 128, 64, 128],
    [60.12, 60.12, 82.75, 82.75],
  ];
  return (
    <svg width="22" height="22" viewBox="0 0 256 256" fill="none">
      {lines.map(([x1, y1, x2, y2], index) => (
        <line
          key={index}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="currentColor"
          strokeWidth="24"
          strokeLinecap="round"
          opacity={1 - index * 0.1}
        />
      ))}
    </svg>
  );
}

// ── Types ────────────────────────────────────────────────────────────────────

export interface GooeySearchProps {
  items?: string[];
  onSearch?: (query: string) => Promise<string[]> | string[];
  placeholder?: string;
  buttonLabel?: string;
  onSelect?: (item: string) => void;
  className?: string;
  debounceMs?: number;
  maxResults?: number;
}

// ── Component ────────────────────────────────────────────────────────────────

export function GooeySearch({
  items = [],
  onSearch,
  placeholder = "Bronze One Hostel",
  buttonLabel = "Bronze One Hostel",
  onSelect,
  className,
  debounceMs = 500,
  maxResults = 5,
}: GooeySearchProps) {
  const uid = useId().replace(/:/g, "_");
  const filterId = `gooey-search-${uid}`;

  const inputRef = useRef<HTMLInputElement>(null);
  const [step, setStep] = useState<1 | 2>(1);
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const isUnsupported = useMemo(() => detectUnsupportedBrowser(), []);
  const debouncedQuery = useDebounce(searchText, debounceMs);

  useEffect(() => {
    if (step === 2) inputRef.current?.focus();
  }, [step]);

  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      if (!debouncedQuery) {
        setResults((prev) => (prev.length === 0 ? prev : []));
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      try {
        let data: string[];
        if (onSearch) {
          data = await onSearch(debouncedQuery);
        } else {
          await new Promise((r) => setTimeout(r, 300));
          data = items.filter((item) =>
            item.toLowerCase().includes(debouncedQuery.trim().toLowerCase())
          );
        }
        if (!cancelled) {
          setResults(data.slice(0, maxResults));
        }
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    };

    run();
    return () => {
      cancelled = true;
    };
  }, [debouncedQuery, items, onSearch, maxResults]);

  return (
    <div className={cn("relative w-full flex justify-center", className)}>
      {/* SVG gooey filter */}
      <svg className="absolute w-0 h-0">
        <defs>
          <filter id={filterId}>
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="
                1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 20 -10
              "
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
        </defs>
      </svg>

      {/* Gooey container */}
      <div
        className="relative"
        style={{
          filter: isUnsupported ? "none" : `url(#${filterId})`,
        }}
      >
        {/* Results */}
        <AnimatePresence>
          {results.map((item, index) => (
            <motion.div
              key={item}
              onClick={() => onSelect?.(item)}
              onKeyDown={(e) => e.key === "Enter" && onSelect?.(item)}
              whileHover={{ scale: 1.02 }}
              variants={getResultVariants(index, isUnsupported)}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={getResultTransition(index)}
              className="absolute left-0 right-0 mx-auto bg-[#1e3a5f] text-white rounded-full px-5 py-3 text-sm cursor-pointer shadow-lg"
              style={{ width: "100%" }}
              role="button"
              tabIndex={0}
            >
              {item}
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Main bar */}
        <motion.div
          variants={buttonMotionVariants}
          initial="step1"
          animate={step === 1 ? "step1" : "step2"}
          transition={{ duration: 0.7, type: "spring", bounce: 0.18 }}
          onClick={() => step === 1 && setStep(2)}
          whileHover={{ scale: step === 2 ? 1 : 1.015 }}
          whileTap={{ scale: 0.985 }}
          role={step === 1 ? "button" : undefined}
          aria-label={step === 1 ? "Open search" : undefined}
          className="bg-[#1e3a5f] text-white rounded-full flex items-center justify-between gap-4 min-h-[70px] px-5 shadow-[0_4px_24px_rgba(30,58,95,0.35)] cursor-pointer"
        >
          {/* Left side – label or input */}
          <div className="flex-1 min-w-0 flex items-center">
            {step === 1 ? (
              <span className="text-[15px] sm:text-base font-medium truncate pl-1">
                {buttonLabel}
              </span>
            ) : (
              <input
                ref={inputRef}
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder={placeholder}
                className="w-full bg-transparent outline-none border-none text-white text-[15px] sm:text-base font-medium placeholder:text-white/55"
              />
            )}
          </div>

          {/* Right button – starts as circle, expands to pill */}
          <motion.div
            variants={orderButtonVariants}
            initial="collapsed"
            animate={step === 2 ? "expanded" : "collapsed"}
            transition={{ duration: 0.55, type: "spring", bounce: 0.22 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="bg-white text-[#1e3a5f] rounded-full h-[50px] flex items-center justify-center gap-2.5 flex-shrink-0 overflow-hidden shadow-sm"
          >
            {isLoading ? (
              <LoadingSvgIcon />
            ) : (
              <>
                <Image
                  src={Pasta}
                  alt="Pasta"
                  width={26}
                  height={26}
                  className="shrink-0"
                />
                <AnimatePresence>
                  {step === 2 && (
                    <motion.span
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.25 }}
                      className="font-semibold text-sm whitespace-nowrap overflow-hidden"
                    >
                      Order Now
                    </motion.span>
                  )}
                </AnimatePresence>
              </>
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default GooeySearch;