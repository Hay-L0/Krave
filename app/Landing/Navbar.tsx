import { SpotlightNavbar } from "@/components/ui/spotlight-navbar";
import NavLogo from "../../public/Kravelogo.svg";
import AnimatedButton from "@/components/ui/animated-button";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-5 left-0 right-0 z-50 px-4">
      <div className="mx-auto flex items-center justify-between w-full max-w-5xl">
        
        <div className="flex items-center shrink-0">
          <Image
            src={NavLogo}
            alt="Krave Logo"
            className="w-24 sm:w-28 md:w-32 h-auto"
          />
        </div>

        <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2">
          <SpotlightNavbar />
        </div>

        <div className="shrink-0">
          <AnimatedButton className="bg-[#01264D] rounded-full text-white scale-90 sm:scale-95" />
        </div>
      </div>

      <div className="sm:hidden flex justify-center mt-2.5">
        <SpotlightNavbar />
      </div>
    </nav>
  );
}