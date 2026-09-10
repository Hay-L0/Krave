import Image from "next/image";
import HeroImg from "../../public/HeroBack-1.svg";
import PhoneImg from "../../public/Iphone 14.svg";
import GooeySearch from "@/components/ui/gooey-search";
import { Card } from "@/components/ui/card";

export default function Heroblock() {
  return (
    <div className="w-full overflow-hidden">
      {/* Hero Background + Title + Search */}
      <div className="relative w-full h-[70vh] min-h-240 md:h-[80vh]">
        <Image
          src={HeroImg}
          alt="Hero Image"
          fill
          priority
          className="h-700 w-screen object-cover object-center"
        />

        <div className="absolute -top-65 inset-0 flex flex-col items-center justify-center gap-6 px-4">
          <h1 className="text-center font-bold text-[#1A3C6E] text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[100px] leading-tight">
            You Hungry?
          </h1>

          <div className="w-full max-w-3xl flex justify-center">
            <GooeySearch />
          </div>
        </div>
      </div>

      {/* ===== RIDERS SECTION ===== */}
      <section
        id="riders"
        className="w-full bg-[#01264D] py-16 md:py-24 lg:py-28"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <h2 className="text-center font-bold text-white text-3xl leading-15 sm:text-4xl md:text-5xl mb-14 md:mb-20">
            Krave It.
            <br />
            Tap It. Eat It.
          </h2>

          {/* Phone + Cards Layout */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">

            {/* Phone */}
            <div className="relative w-full max-w-70 sm:max-w-[320px] md:max-w-90 lg:max-w-100 shrink-0">
              <Image
                src={PhoneImg}
                alt="Krave App on iPhone"
                width={400}
                height={800}
                className="w-full h-auto object-contain drop-shadow-2xl"
                priority
              />
            </div>

            {/* Steps Cards */}
            <div className="flex flex-col gap-5 w-full max-w-sm sm:max-w-md">
              {/* Card 1 - Orange */}
              <Card className="w-full px-5 sm:px-7 py-6 sm:py-8 bg-[#E8792F] text-white rounded-2xl shadow-xl border-0">
                <div className="flex items-start justify-between gap-3 sm:gap-4">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                    1.
                    <br />
                    Download
                    <br />
                    The App
                  </h3>

                  <div className="flex gap-2 mt-1 shrink-0">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 16.76 2.93 11.82 4.7 8.55C5.57 6.99 7.13 6.02 8.82 6C10.1 5.98 11.32 6.86 12.11 6.86C12.89 6.86 14.37 5.73 15.92 5.89C16.57 5.93 18.39 6.16 19.56 7.93C19.47 7.99 17.39 9.25 17.41 11.91C17.44 15.11 20.06 16.18 20.09 16.2C20.06 16.28 19.67 17.7 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
                    </svg>
                    <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3.18 23.7c-.12 0-.24-.03-.34-.09-.23-.14-.36-.39-.34-.66L3.6 2.15c.02-.28.18-.52.43-.63.25-.11.54-.08.76.08l16.5 10.5c.22.14.35.38.35.64s-.13.5-.35.64L4.03 23.55c-.12.08-.25.12-.4.15-.05.01-.1.02-.15.02-.1 0-.2-.02-.3-.05z" />
                    </svg>
                  </div>
                </div>
              </Card>

              {/* Card 2 - Dark Blue */}
              <Card className="w-full px-5 sm:px-7 py-6 sm:py-8 bg-[#1A3C6E] text-white rounded-2xl shadow-xl border-0">
                <div className="flex items-start justify-between gap-3 sm:gap-4">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                    2.
                    <br />
                    Place An
                    <br />
                    Order.
                  </h3>

                  <svg className="w-7 h-7 sm:w-8 sm:h-8 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
              </Card>

              {/* Card 3 - Black */}
              <Card className="w-full px-5 sm:px-7 py-6 sm:py-8 bg-black text-white rounded-2xl shadow-xl border-0">
                <div className="flex items-start justify-between gap-3 sm:gap-4">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                    3.
                    <br />
                    Unpack
                    <br />
                    And Enjoy.
                  </h3>

                  <svg className="w-7 h-7 sm:w-8 sm:h-8 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Download Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-5 md:mt-7">
        {/* Android Button */}
        <a
          href="#"
          className="flex items-center gap-2.5 bg-black text-white px-5 py-3 rounded-full text-sm font-medium hover:bg-neutral-900 transition-colors"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3.18 23.7c-.12 0-.24-.03-.34-.09-.23-.14-.36-.39-.34-.66L3.6 2.15c.02-.28.18-.52.43-.63.25-.11.54-.08.76.08l16.5 10.5c.22.14.35.38.35.64s-.13.5-.35.64L4.03 23.55c-.12.08-.25.12-.4.15-.05.01-.1.02-.15.02-.1 0-.2-.02-.3-.05z" />
          </svg>
          Download On Android
        </a>

        {/* iOS Button */}
        <a
          href="#"
          className="flex items-center gap-2.5 bg-black text-white px-5 py-3 rounded-full text-sm font-medium hover:bg-neutral-900 transition-colors"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 16.76 2.93 11.82 4.7 8.55C5.57 6.99 7.13 6.02 8.82 6C10.1 5.98 11.32 6.86 12.11 6.86C12.89 6.86 14.37 5.73 15.92 5.89C16.57 5.93 18.39 6.16 19.56 7.93C19.47 7.99 17.39 9.25 17.41 11.91C17.44 15.11 20.06 16.18 20.09 16.2C20.06 16.28 19.67 17.7 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
          </svg>
          Download On IOS
        </a>
      </div>
    </div>
  );
}