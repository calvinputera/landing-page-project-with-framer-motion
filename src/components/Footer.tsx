import { navigation } from "@/data";
import Image from "next/image";
import socialX from "../../public/assets/social-x.svg"
import socialInsta from "../../public/assets/social-insta.svg"
import socialLinkedIn from "../../public/assets/social-linkedin.svg"
import socialPin from "../../public/assets/social-pin.svg"
import socialYoutube from "../../public/assets/social-youtube.svg"

const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:w-full before:top-2 before:bottom-0 before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD98,#C2F0B1,#2FD8FE)] before:absolute">
          <Image
            src="/assets/logosaas.png"
            alt="logo"
            width={40}
            height={40}
            className="relative"
          />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          {navigation.map((item, index) =>
            <a key={index} href={item.href} target="_blank" rel="noopener noreferrer">{item.name}</a>
          )}
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <Image src={socialX} alt="social-x" width={40} height={40} className="bg-white rounded-md" />
          <Image src={socialInsta} alt="social-insta" width={40} height={40} className="bg-white rounded-md" />
          <Image src={socialLinkedIn} alt="social-linkedin" width={40} height={40} className="bg-white rounded-md" />
          <Image src={socialPin} alt="social-pin" width={40} height={40} className="bg-white rounded-md" />
          <Image src={socialYoutube} alt="social-youtube" width={40} height={40} className="bg-white rounded-md" />
        </div>
        <p className="mt-6">&copy; 2024 Name Company, Inc. All rights reserved.</p>
      </div>
    </footer>
  )
};

export default Footer;
