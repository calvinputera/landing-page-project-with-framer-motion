import { ITestimonial, testimonials } from "@/data";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

const CardTestimonialColumn = (props: { className?: string; testimonials: typeof testimonials }) => {
  return (
    <div className={twMerge("flex flex-col gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]", props.className)}>
      {props.testimonials.map((testimonial: ITestimonial, index) => (
        <div key={index} className="card">
          <div>{testimonial.text}</div>
          <div className="flex items-center gap-2 mt-5">
            <Image src={testimonial.imageSrc} alt={`avatar-${index}`} width={40} height={40} className="w-10 h-10 rounded-full" />
            <div className="flex flex-col">
              <div className="font-medium tracking-tight leading-5">{testimonial.name}</div>
              <div className="leading-5 tracking-tight">{testimonial.username}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
};

export default CardTestimonialColumn;
