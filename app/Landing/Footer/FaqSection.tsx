"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { faqs } from "./faqData";

export default function FaqSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section>
      {/* Top Doodle Illustration Banner */}
      <div className="relative w-full h-28 sm:h-36 md:h-44 overflow-hidden">
        {/* Subtle bottom edge gradient to ensure clean transition */}
        <div className="absolute inset-x-0 bottom-0 h-4 bg-linear-to-b from-transparent to-black/30 pointer-events-none" />
      </div>

      {/* FAQ White Card overlapping the doodle header */}
      <div className="relative -top-56 max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto px-4 -mt-16 sm:-mt-20 md:-mt-24 z-10 mb-14 sm:mb-20">
        <div className="bg-white rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-8 md:p-10 shadow-2xl border-5 border-black">
          
          {/* FAQ Title */}
          <h2 className="text-3xl sm:text-4xl font-black text-black text-center tracking-tight mb-6 sm:mb-8 select-none">
            FAQ
          </h2>

          {/* FAQ List of Pills */}
          <div className="flex flex-col gap-3 sm:gap-3.5">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-xl sm:rounded-2xl bg-[#D8D8D8] hover:bg-[#D0D0D0] transition-colors duration-150 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full text-left px-4 sm:px-5 py-3 sm:py-3.5 flex items-center justify-between gap-3 cursor-pointer group"
                  >
                    <span className="text-xs sm:text-sm md:text-[15px] font-semibold text-neutral-900 tracking-tight">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 sm:w-5 sm:h-5 text-neutral-600 transition-transform duration-200 shrink-0 ${
                        isOpen ? "rotate-180 text-black" : "group-hover:text-black"
                      }`}
                    />
                  </button>

                  {/* Expandable answer */}
                  <div
                    className={`grid transition-all duration-200 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-4 sm:px-5 pb-3.5 pt-1 text-xs sm:text-sm text-neutral-700 font-normal leading-relaxed border-t border-neutral-300/60">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
