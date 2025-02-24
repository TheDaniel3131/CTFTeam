import React from "react";
import { Navigationbar } from "@/components/(navbar)/Navigationbar";
import { FooterPage } from "@/components/(footer)/Footer";
import { HeroSection } from "@/components/(herosection)/Hero";

const Home = () => {
  return (
    <div className="h-screen">
      <div className="flex items-center md:w-auto left-0 w-full min-h-[100px] ">
        <Navigationbar />
      </div>
      <HeroSection />
      <FooterPage />
    </div>
  );
};

export default Home;
