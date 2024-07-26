import acmeLogo from "@/assets/logo-acme.png";
import quantumLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import celestialLogo from "@/assets/logo-celestial.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";
import Image from "next/image";

export const LogoTicker = () => {
  return (
    <section className="bg-white py-8 md:py-12">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <div className="flex gap-14 flex-none *:logo-ticker-image">
            <Image src={acmeLogo} alt="Acme logo" />
            <Image src={quantumLogo} alt="Quantum logo" />
            <Image src={echoLogo} alt="Echo logo" />
            <Image src={celestialLogo} alt="Celestial logo" />
            <Image src={pulseLogo} alt="Pulse logo" />
            <Image src={apexLogo} alt="Apex logo" />
          </div>
        </div>
      </div>
    </section>
  );
};
