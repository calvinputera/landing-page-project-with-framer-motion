'use client'

import React from "react";
import { ITestimonial, testimonials } from "@/data";
import Image from "next/image";
import { motion } from "framer-motion";

const CardTestimonialColumn = (props: { className?: string; testimonials: typeof testimonials; duration?: number }) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%"
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop"
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2).fill(0).map((_, index) => (
          <React.Fragment key={index}>
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
          </React.Fragment>
        ))]}
      </motion.div>
    </div>
  )
};

export default CardTestimonialColumn;
