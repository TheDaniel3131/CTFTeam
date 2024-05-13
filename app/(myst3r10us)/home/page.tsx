import React from 'react'
import { Navigationbar } from "@/components/(navbar)/Navigationbar";
import { FooterPage } from "@/components/(footer)/Footer";
import { HeroSection } from "@/components/(herosection)/Hero";

const Home = () => {
  return (
    <div className='h-screen'>
      <Navigationbar />
      <HeroSection/>
      <FooterPage />
    </div>
  )
}

export default Home
