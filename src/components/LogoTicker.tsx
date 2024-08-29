import acmeLogo from "../../public/assets/logo-acme.png";
import quantumLogo from "../../public/assets/logo-quantum.png";
import echoLogo from "../../public/assets/logo-echo.png";
import celestialLogo from "../../public/assets/logo-celestial.png";
import pulseLogo from "../../public/assets/logo-pulse.png";
import apexLogo from "../../public/assets/logo-apex.png";
import Image from "next/image";

const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <div className="flex gap-14 flex-none">
            <Image src={acmeLogo} alt="acme" className="logo-ticker-image" />
            <Image src={quantumLogo} alt="quantum" className="logo-ticker-image" />
            <Image src={echoLogo} alt="echo" className="logo-ticker-image" />
            <Image src={celestialLogo} alt="celestial" className="logo-ticker-image" />
            <Image src={pulseLogo} alt="pulse" className="logo-ticker-image" />
            <Image src={apexLogo} alt="apex" className="logo-ticker-image" />
          </div>
        </div>
      </div>
    </div>
  )
};

export default LogoTicker;
