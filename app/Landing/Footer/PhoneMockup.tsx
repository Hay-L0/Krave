"use client";

import Image from "next/image";
import { Eye } from "lucide-react";

export default function PhoneMockup() {
  return (
    <div className="relative w-full max-w-67.5 sm:max-w-72.9 md:max-w-77.5 mx-auto select-none">
      {/* Phone Outer Chassis / Bezel */}
      <div className="relative rounded-[2.8rem] sm:rounded-[3.2rem] bg-neutral-900 p-2.5 sm:p-3 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] border-[5px] border-neutral-800 ring-1 ring-white/20">
        
        {/* Screen Bezel & Container */}
        <div className="relative w-full aspect-9/18.5 bg-white rounded-[2.2rem] sm:rounded-[2.5rem] overflow-hidden flex flex-col items-center pt-3 px-4 pb-4 shadow-inner">
          
          {/* Dynamic Island / Notch */}
          <div className="w-20 sm:w-24 h-5 bg-black rounded-full mb-5 flex items-center justify-between px-2.5 shrink-0">
            <div className="w-2 h-2 rounded-full bg-neutral-950 ring-1 ring-neutral-800" />
            <div className="w-2.5 h-2.5 rounded-full bg-neutral-900 ring-1 ring-neutral-700/80" />
          </div>

          
          <div className="relative w-28 sm:w-32 h-7 mb-4 flex items-center justify-center shrink-0">
            <Image
              src="/Kravelogo.svg"
              alt="KRAVE"
              width={130}
              height={30}
              className="w-full h-auto object-contain"
              priority
            />
          </div>

          
          <div className="text-center mb-3 w-full">
            <h3 className="text-sm sm:text-base font-bold text-neutral-900 tracking-tight leading-tight">
              Welcome back
            </h3>
            <p className="text-[9px] sm:text-[10px] text-neutral-500 mt-0.5 leading-snug">
              Sign in to order from campus restaurants.
            </p>
          </div>

          {/* Login / Sign Up Tabs */}
          <div className="w-full grid grid-cols-2 p-0.5 bg-neutral-100 rounded-lg mb-3">
            <button
              type="button"
              className="py-1 rounded-md text-[10px] sm:text-[11px] font-semibold bg-[#1A3C6E] text-white shadow-sm transition-colors text-center"
            >
              Log in
            </button>
            <button
              type="button"
              className="py-1 rounded-md text-[10px] sm:text-[11px] font-medium text-neutral-500 hover:text-neutral-800 transition-colors text-center"
            >
              Sign Up
            </button>
          </div>

          {/* Form Fields */}
          <div className="w-full space-y-2.5 text-left">
            {/* Email Address */}
            <div>
              <label className="block text-[9px] sm:text-[10px] font-semibold text-neutral-600 mb-1">
                Email address
              </label>
              <div className="w-full h-7 sm:h-8 px-2.5 rounded-md border border-neutral-200 bg-neutral-50/70 flex items-center text-[10px] sm:text-[11px] text-neutral-400 font-normal">
                you@bells.edu.ng
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-[9px] sm:text-[10px] font-semibold text-neutral-600">
                  Password
                </label>
                <span className="text-[8px] sm:text-[9px] text-neutral-400 hover:text-neutral-600 cursor-pointer">
                  Forgot password?
                </span>
              </div>
              <div className="w-full h-7 sm:h-8 px-2.5 rounded-md border border-neutral-200 bg-neutral-50/70 flex items-center justify-between text-[10px] sm:text-[11px] text-neutral-400 font-normal">
                <span>Your password</span>
                <Eye className="w-3 h-3 text-neutral-400" />
              </div>
            </div>
          </div>

          {/* Subtle Home Indicator at bottom */}
          <div className="mt-auto pt-2">
            <div className="w-20 h-1 bg-neutral-300 rounded-full mx-auto" />
          </div>

        </div>
      </div>
    </div>
  );
}
