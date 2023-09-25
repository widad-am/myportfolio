"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";


export default function Intro() {

  return (
    <section

      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=368&h=368&q=100"
              alt="Widad Amrani"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Widad.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">1 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>
      <motion.div initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }} className="flex  flex-col sm:flex-row items-center justify-center gap-2 font-medium px-4  text-lg">
        <Link href="#contact" className="group bg-gray-900  text-white px-7 py-3 flex items-center gap-2 rounded-full  outline-none hover:scale-110 hover:bg-gray-950 active:scale-105 transition cursor-pointer " >Contact me here  <BsArrowRight className="group-hover:translate-x-1 transition opacity-70" />
        </Link>
        <a className=" group bg-slate-50 text-black px-7 py-3 flex items-center gap-2 rounded-full  outline-none hover:scale-110 hover:bg-slate-55   active:scale-105 transition cursor-pointer border border-black/10 " href="/Cv.pdf" download={true}>Download CV <HiDownload className=" transition group-hover:translate-y-1 opacity-60" /></a>
        <a href="https://www.linkedin.com/in/widad-amrani-23266022b/"  target="_blank"className=" text-black px-7 py-3 flex items-center gap-2 rounded-full border outline-none hover:scale-110 hover:bg-slate-55   active:scale-105 transition cursor-pointer border-black/10 "><BsLinkedin /></a>
        <a  href="https://github.com/widad-am"  target="_blank " className=" text-black px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-110 hover:bg-slate-55   active:scale-105 transition cursor-pointer border border-black/10"><FaGithubSquare /></a>
      </motion.div>
    </section>
  );
}
