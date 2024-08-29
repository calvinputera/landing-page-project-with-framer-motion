'use client'

import Image from "next/image";
import checkIcon from "../../public/assets/check.svg";
import { twMerge } from "tailwind-merge";
import { pricingTiers, IPricingTier } from "@/data/index"
import { motion } from "framer-motion";

const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">Pricing</h2>
          <p className="section-description mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi totam dicta voluptates eius reiciendis fugit consequatur odio qui delectus rem?</p>
        </div>
        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-start lg:justify-center">
          {pricingTiers.map((tier: IPricingTier, index) => (
            <div key={index} className={twMerge("card", tier.inverse && "border-black bg-black text-white")}>
              <div className="flex justify-between">
                <h3 className={twMerge("text-lg font-bold text-black/50", tier.inverse && "text-white/60")}>{tier.title}</h3>
                {tier.popular && (
                  <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                    <motion.span
                      animate={{
                        backgroundPositionX: '100%'
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: 'linear',
                        repeatType: 'loop',
                      }}
                      className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text font-semibold"
                    >
                      Popular
                    </motion.span>
                  </div>
                )}
              </div>
              <div className="flex items-baseline gap-1 mt-[30px]">
                <span className="text-4xl font-bold tracking-tighter leading-none">$ {tier.monthlyPrice}</span>
                <span className="tracking-tight font-bold text-black/50">/month</span>
              </div>
              <button className={twMerge("btn btn-primary w-full mt-[30px]", tier.inverse && "bg-white text-black")}>{tier.buttonText}</button>
              <ul className="flex flex-col gap-5 mt-8">
                {tier.features.map((feature, index) => (
                  <li key={index} className="text-xm flex items-center gap-4">
                    <Image src={checkIcon} alt="check" width={24} height={24} className={twMerge("border border-black/60 rounded-md", tier.inverse && "bg-white")} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
};

export default Pricing;
