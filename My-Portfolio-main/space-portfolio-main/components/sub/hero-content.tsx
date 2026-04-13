"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-6 md:px-20 mt-20 md:mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">

        {/* Badge */}
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box flex items-center py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Full Stack Developer • AI/ML • DevOps Enthusiast
          </h1>
        </motion.div>

        {/* Heading */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-4xl md:text-6xl font-bold text-white max-w-[600px]"
        >
          <span>
            Building{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              modern AI-powered
            </span>{" "}
            web applications.
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base md:text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m Omm Prakash, a developer skilled in Java, Python, and modern web technologies.
          I create full stack applications, AI-based systems, and interactive 3D websites.
          Currently exploring DevOps and cloud to build scalable real-world projects.
        </motion.p>

        {/* Button */}
       <motion.a href="#projects" variants={slideInFromLeft(1)} className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]" > View My Work </motion.a> </div>

      {/* Image */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          priority
          draggable={false}
          className="select-none"
        />
      </motion.div>
    </motion.div>
  );
};