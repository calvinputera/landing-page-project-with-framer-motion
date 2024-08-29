import Image from "next/image";
import starImage from "../../public/assets/star.png";
import springImage from "../../public/assets/spring.png";

const CallToAction = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title">Sign up for free today</h2>
          <p className="section-description mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, totam explicabo culpa natus est earum! Doloremque itaque eligendi nemo nulla!</p>
          <Image src={starImage} alt="star" width={360} className="absolute -left-[350px] -top-[137px]" />
          <Image src={springImage} alt="spring" width={360} className="absolute -right-[331px] -top-[19px]" />
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text flex gap-2 items-center">
            <span>
              Learn more
            </span>
            <Image src="/assets/arrow-right.svg" alt="arrow-right" width={20} height={20} className="text-white bg-white rounded-md" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
