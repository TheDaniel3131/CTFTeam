"use client";

import React from "react";
import Image from "next/image";
import { User } from "lucide-react";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "What is myst3r10us?",
    href: "",
    description:
      "A Malaysian-based CTF team that started in November 2023. We are a group of cybersecurity enthusiasts who are passionate about solving challenges and learning new things. And here we are.",
  },
  {
    title: "Why myst3r10us?",
    href: "",
    description:
      "It started from 'Mysterious Three Flaggers' and over time, it shortened to myst3r10us. We are also known as M3Flaggers, my$t3r10u$, my5t3r10u5..",
  },
  {
    title: "Our CTFTime Team Profile",
    href: "https://ctftime.org/team/277613",
    description:
      "Check out how many CTFs we have participated in! Do not expect good things lol.",
  },
  {
    title: "Join myst3r10us?!?",
    href: "",
    description:
      "Unfortunately, we do not plan to invite more people to join the team, but keep in mind that we will recruit new team members in the near future. For now, we are open to collaboration and partnership. Feel free to reach out to us if you have any interesting ideas or projects to work together.",
  },
];

export const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center bg-slate-900 rounded-lg p-6 mb-12">
        {/* Title and Icon */}
        <div className="flex items-center justify-center mb-6 lg:mb-0 lg:mr-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center lg:text-left">
            <User size={90} className="inline-block mr-4 text-slate-100" />
            <span className="text-slate-100">
              About
              <span className="text-slate-400">&nbsp;myst3r10us</span>
            </span>
          </h1>
        </div>

        {/* Image */}
        <div className="flex items-center justify-center">
          <Image
            src="https://i.imgur.com/jtcMGsC.jpg"
            unoptimized
            alt="myst3r10us"
            width={300}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="space-y-12">
        {components.map((component, index) => (
          <div key={index} className="p-6 rounded-lg shadow-md">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-4">
              {component.title}
            </h2>
            <p className="text-lg text-cyan-400 mb-4">
              {component.description}
            </p>
            {component.href && (
              <a
                href={component.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 hover:underline transition-colors"
              >
                View CTF Team Profile on CTFTime
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
