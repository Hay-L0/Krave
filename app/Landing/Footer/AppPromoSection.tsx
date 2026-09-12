"use client";

import Image from "next/image";
import Phone from "../../../public/Iphone 14.svg";

export default function AppPromoSection() {
  return (
    <section className="w-full relative -top-40 max-w-4xl lg:max-w-5xl mx-auto px-4 sm:px-6 mb-14 sm:mb-20">
      <div className="relative bg-white rounded-3xl h-140 sm:rounded-[2.5rem] p-7 sm:p-10 md:p-12 lg:p-14 shadow-2xl border border-neutral-100 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-6 overflow-hidden">

        <div className="flex-1 text-center lg:text-left z-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-8">
            <span className="text-[#1A3C6E]">Krave it.</span>
            <br />
            <span className="text-[#E8792F]">Get it.</span>
            <br />
            <span className="text-black">Done.</span>
          </h2>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
            <a
              href="#download-android"
              className="inline-flex items-center gap-2.5 bg-black text-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold hover:bg-neutral-800 transition-all shadow-md active:scale-95"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
                <path d="M3.18 23.7c-.12 0-.24-.03-.34-.09-.23-.14-.36-.39-.34-.66L3.6 2.15c.02-.28.18-.52.43-.63.25-.11.54-.08.76.08l16.5 10.5c.22.14.35.38.35.64s-.13.5-.35.64L4.03 23.55c-.12.08-.25.12-.4.15-.05.01-.1.02-.15.02-.1 0-.2-.02-.3-.05z" />
              </svg>
              <span>Download On Android</span>
            </a>

            <a
              href="#download-ios"
              className="inline-flex items-center gap-2.5 bg-black text-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold hover:bg-neutral-800 transition-all shadow-md active:scale-95"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
                <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 16.76 2.93 11.82 4.7 8.55C5.57 6.99 7.13 6.02 8.82 6C10.1 5.98 11.32 6.86 12.11 6.86C12.89 6.86 14.37 5.73 15.92 5.89C16.57 5.93 18.39 6.16 19.56 7.93C19.47 7.99 17.39 9.25 17.41 11.91C17.44 15.11 20.06 16.18 20.09 16.2C20.06 16.28 19.67 17.7 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
              </svg>
              <span>Download On IOS</span>
            </a>
          </div>
        </div>

        <div className="relative w-full max-w-70 lg:max-w-[320px] lg:translate-y-40">
          <Image
            src={Phone}
            alt="Krave App"
            width={320}
            height={650}
            className="w-full h-auto object-contain drop-shadow-2xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
