import React from 'react'
import { Navigationbar } from "@/components/(navbar)/Navigationbar";
import { ContactPage } from "@/components/(contact)/Contact";
import { FooterPage } from "@/components/(footer)/Footer";

const Contact = () => {
  return (
    <div>
      <Navigationbar />
      <h1 style={{ textAlign: 'center', fontSize: '36px', fontWeight: 'bold', marginTop: '1.5em' }}>Contact Us</h1>
      <ContactPage />
      <FooterPage />  
    </div>
  )
}

export default Contact;
