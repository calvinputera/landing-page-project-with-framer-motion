import Image from "next/image";
import cogeImage from "../../public/assets/cog.png"
import cylinder from "../../public/assets/cylinder.png"
import noodleImage from "../../public/assets/noodle.png"

const Hero = () => {
  return (
    <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip">
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">Version 2.0 is here</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">Pathway to productivity</h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum quaerat iusto quo cumque unde magnam nihil aut sequi eligendi fugiat, pariatur laudantium, voluptate voluptas necessitatibus optio porro. Laudantium, vel tempore?</p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">Get for free</button>
              <button className="btn btn-text flex gap-1 items-center">
                <span>
                  Learn more
                </span>
                <Image src="/assets/arrow-right.svg" alt="arrow-right" width={20} height={20} className="text-white bg-white" />
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <Image src={cogeImage} alt="cog" className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0" />
            <Image src={cylinder} alt="cylinder" width={220} height={220} className="hidden md:block -top-8 -left-32 md:absolute" />
            <Image src={noodleImage} alt="noodle" width={220} className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]" />
          </div>
        </div>
      </div>
    </section>
  )
};

export default Hero;
