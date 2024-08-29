'use client'

import { navigation } from "@/data";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, delay, motion } from "framer-motion"

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const menuVariant = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0]
      }
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  const navigationVariant = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1]
      }
    },
    open: {
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.37, 0, 0.63, 1]
      }
    }
  }

  const containerVariant = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      }
    },
    open: {
      transition: {
        delayChildren: 0.09,
        staggerChildren: 0.09,
        staggerDirection: 1,
      }
    }
  }

  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">Stream your workflow and boost your productivity</p>
        <div className="inline-flex gap-2 items-center">
          <p>Get Started For Free</p>
          <Image src="/assets/arrow-right.svg" alt="arrow-right" width={20} height={20} className="text-white bg-white rounded-md" />
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image
              src="/assets/logosaas.png"
              alt="logo"
              width={40}
              height={40}
            />
            <Image src="/assets/menu.svg" alt="menu" width={20} height={20} className="md:hidden" onClick={toggleMenu} />
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              {navigation.map((item, index) =>
                <a key={index} href={item.href}>{item.name}</a>
              )}
              <button className="btn">Get for free</button>
            </nav>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariant}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-screen p-10 bg-black text-white origin-top"
          >
            <div className="flex items-center justify-end">
              {/* <Image
                src="/assets/logosaas.png"
                alt="logo"
                width={40}
                height={40}
              /> */}
              <p className="cursor-pointer" onClick={toggleMenu}>Close</p>
            </div>
            <motion.div
              variants={containerVariant}
              initial="initial"
              animate="open"
              exit="initial"
              className="flex flex-col justify-center gap-4 items-center h-full py-5"
            >
              {navigation.map((item, index) => (
                <div className="overflow-hidden">
                  <motion.div
                    variants={navigationVariant}
                  >
                    <a className="text-4xl overflow-hidden" key={index} href={item.href}>{item.name}</a>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
};

export default Header;
