"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGit, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section
      ref={ref}
      id="home"
      className=" mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[200rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1696253930712-f17f6b3d7095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
              alt="Portrait"
              width={192}
              height={192}
              quality={95}
              priority={true}
              className="h-24 w-24 object-cover rounded-full border-[0.35rem] border-white border-opacity-40 shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 0.2,
            }}
          >
            ✌
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
      >
        <span className="font-bold">Hello, I'm Ricardo.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">8 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row justify-center items-center gap-4 px-4 text-lg font-medium"
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className=" group flex items-center gap-2 rounded-full bg-gray-900 text-white px-7 py-3 shadow-lg shadow-black/[0.03] backdrop-blur[0.5rem] outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition-all"
        >
          Contact Me
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          className="flex items-center gap-2 rounded-full bg-white text-gray-900 px-7 py-3 shadow-lg shadow-black/[0.03] backdrop-blur[0.5rem] outline-none focus:scale-110 hover:scale-110 hover:bg-gray-50 active:scale-105 transition-all cursor-pointer"
          href="/CV.pdf"
          download
        >
          Download CV <HiDownload />
        </a>
        <a
          className="flex items-center gap-2 rounded-full bg-white text-gray-900 px-5 py-5 shadow-lg shadow-black/[0.03] backdrop-blur[0.5rem] outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 hover:text-white active:scale-105 transition-all"
          href="https://linkedin.com"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="flex items-center rounded-full bg-white text-gray-900 px-5 py-5 shadow-lg shadow-black/[0.03] backdrop-blur[0.5rem] outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 hover:text-white active:scale-105 transition-all"
          href="https://github.com"
          target="_blank"
        >
          <BsGithub />
        </a>
      </motion.div>
    </section>
  );
}
