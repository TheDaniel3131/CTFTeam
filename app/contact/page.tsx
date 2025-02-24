import React from "react";
import { Navigationbar } from "@/components/(navbar)/Navigationbar";
import { ContactPage } from "@/components/(contact)/Contact";
import { FooterPage } from "@/components/(footer)/Footer";

const Contact = () => {
  return (
    <div>
      <Navigationbar />
      <ContactPage />
      <FooterPage />
    </div>
  );
};

export default Contact;
