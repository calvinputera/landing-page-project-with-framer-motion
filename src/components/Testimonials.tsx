'use client'

import { testimonials, ITestimonial } from "@/data";
import CardTestimonialColumn from "./CardTestimonialColumn";
import { motion } from "framer-motion";

const Testimonials = () => {
  const firstColumn = testimonials.slice(0, 3);
  const secondColumn = testimonials.slice(3, 6);
  const thirdColumn = testimonials.slice(6, 9);

  return (
    <section className="bg-white">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Testimonials</div>
          </div>
          <h2 className="section-title mt-5">What our users say</h2>
          <p className="section-description mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aliquid illo nisi odio ipsam soluta non deleniti, consequuntur magni animi.</p>
        </div>
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
          <CardTestimonialColumn testimonials={firstColumn} duration={15} />
          <CardTestimonialColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <CardTestimonialColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  )
};

export default Testimonials;
