import React from 'react';
import { Navigationbar } from '@/components/(navbar)/Navigationbar';
import { FooterPage } from "@/components/(footer)/Footer";
import { AboutPage } from '@/components/(about)/About';

const About = () => {
  return (
    <div className=" bg-slate-950 min-h-screen">
      <Navigationbar />
        <AboutPage />
      <FooterPage />
    </div>
  );
};

export default About;
