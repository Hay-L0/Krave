"use client";

import FaqSection from "./FaqSection";
import AppPromoSection from "./AppPromoSection";
import FooterNav from "./FooterNav";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white relative mt-70  pt-0 pb-9 sm:pb-16 md:pb-20">
      <FaqSection />
      <AppPromoSection />
      <FooterNav />
    </footer>
  );
}
