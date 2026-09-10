"use client";

import Link from "next/link";
import Image from "next/image";

export default function FooterNav() {
  return (
    <section className="w-full relative -top-20 max-w-4xl lg:max-w-5xl mx-auto px-4 sm:px-6">
      <div className="bg-[#E8792F] rounded-3xl sm:rounded-[2.5rem] pt-9 sm:pt-12 md:pt-14 px-6 sm:px-10 md:px-14 pb-0 overflow-hidden shadow-2xl relative">
        
        {/* Navigation Links Columns */}
        <div className="grid grid-cols-3 gap-3 sm:gap-8 md:gap-12 mb-8 sm:mb-12">
          
          {/* Column 1: Order */}
          <div>
            <h3 className="font-bold text-black text-xs sm:text-sm md:text-base mb-2.5 sm:mb-3">
              Order
            </h3>
            <ul className="space-y-1.5 sm:space-y-2 text-[11px] sm:text-xs md:text-sm text-black/80 font-medium">
              <li>
                <Link href="#order" className="hover:text-black transition-colors block">
                  Order Now
                </Link>
              </li>
              <li>
                <Link href="#where-we-deliver" className="hover:text-black transition-colors block">
                  Where We Deliver
                </Link>
              </li>
              <li>
                <Link href="#help" className="hover:text-black transition-colors block">
                  Help
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Company */}
          <div>
            <h3 className="font-bold text-black text-xs sm:text-sm md:text-base mb-2.5 sm:mb-3">
              Company
            </h3>
            <ul className="space-y-1.5 sm:space-y-2 text-[11px] sm:text-xs md:text-sm text-black/80 font-medium">
              <li>
                <Link href="#about" className="hover:text-black transition-colors block">
                  About Krave
                </Link>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black transition-colors block"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black transition-colors block"
                >
                  X
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Join */}
          <div>
            <h3 className="font-bold text-black text-xs sm:text-sm md:text-base mb-2.5 sm:mb-3">
              Join
            </h3>
            <ul className="space-y-1.5 sm:space-y-2 text-[11px] sm:text-xs md:text-sm text-black/80 font-medium">
              <li>
                <Link href="#riders" className="hover:text-black transition-colors block">
                  Apply For a Ride
                </Link>
              </li>
              <li>
                <Link href="#refer" className="hover:text-black transition-colors block">
                  Refer A Friend
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Big Stylized Black KRAVE Logo spanning across bottom width */}
        <div className="w-full select-none pointer-events-none mt-4 sm:mt-8 md:mt-10">
          <Image
            src="/Footerlogo.png"
            alt="KRAVE"
            width={1200}
            height={260}
            className="w-full h-auto object-contain block -mb-0.5"
            priority
          />
        </div>

      </div>
    </section>
  );
}
