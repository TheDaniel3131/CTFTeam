"use client";
import React from "react";
import Image from "next/image";
import avatar from "../assets/avatar.jpg";
import bg from "../assets/background.png";
import { motion } from "framer-motion";

export const HeroSection: React.FC = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center w-full md:min-h-screen md:justify-between bg-gray-900">
      {/* Background image div - hidden on mobile */}
      <div
        className="hidden md:block absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Main Content Container */}
      <div className="w-full flex flex-col items-center md:items-start md:ml-12 p-6 md:p-0 relative z-1">
        {/* Text Content */}
        <div className="font-DMS text-center md:text-left space-y-4 md:space-y-6">
          <h1 className="text-5xl md:text-8xl lg:text-[10em] mb-4 md:ml-12">
            Hello,
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
              &nbsp;Hackers
            </span>
          </h1>

          <h3 className="text-2xl md:text-3xl tracking-widest leading-loose bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-indigo-500 mb-4 md:ml-12">
            Welcome to myst3r10us
          </h3>

          <p className="text-lg md:text-xl italic tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600 mb-8 md:ml-12">
            We like to solve CTF Challenges
          </p>

          {/* Image for mobile view */}
          <div className="block md:hidden w-full">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-full h-48 relative"
            >
              <Image
                src={avatar}
                alt="Side Image"
                fill
                className="object-contain"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
