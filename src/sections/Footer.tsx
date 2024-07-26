import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logosaas.png";
import SocialX from "@/assets/social-x.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialYouTube from "@/assets/social-youtube.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#bcbcbc] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:h-full before:top-1 before:bottom-0 before:blur before:w-full before:bg-[linear-gradient(to_right,#f87bff,#fb92cf,#ffdd9b,#c2f0b1,#2fd8fe)] before:absolute">
          <Image src={logo} height={40} width={40} alt="Saas Logo" className="relative" />
        </div>
        <nav className="flex flex-col md:flex-row justify-center gap-6 mt-6">
          <Link href="#">About</Link>
          <Link href="#">Features</Link>
          <Link href="#">Customers</Link>
          <Link href="#">Pricing</Link>
          <Link href="#">Help</Link>
          <Link href="#">Careers</Link>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <SocialX />
          <SocialPin />
          <SocialInsta />
          <SocialYouTube />
          <SocialLinkedIn />
        </div>
        <p className="mt-6">&copy; 2024 Acme Company, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};
