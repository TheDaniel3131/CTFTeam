import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import React from "react";

export const FooterPage = () => {
  return (
    <Footer container className="dark:bg-slate-900 py-8 px-4 sm:px-20">
      <div className="w-full">
        <div className="flex flex-col sm:flex-row justify-between items-start">
          {/* Brand Section (Left Side) */}
          <div className="mb-4 sm:mb-0">
            <Footer.Brand
              href="/"
              src="https://i.imgur.com/F1VLIwj.jpeg"
              alt="myst3r10us hackers"
              name="./myst3r10us"
              className="w-24 h-24 mt-4"
            />
          </div>

          {/* Grid Section (Right Side) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-4">
            <div>
              <Footer.Title title="Sections" />
              <Footer.LinkGroup col className="mt-4">
                <Footer.Link href="/about">About</Footer.Link>
                <Footer.Link href="/writeups">Writeups</Footer.Link>
                <Footer.Link href="/contact">Contact Us</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow Our Socials" />
              <Footer.LinkGroup col className="mt-4">
                <Footer.Link href="https://github.com/myst3r10us">
                  Github
                </Footer.Link>
                <Footer.Link href="https://ctftime.org/team/277613">
                  CTFTime
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>

        {/* Divider and Copyright Section */}
        <Footer.Divider className="my-8" />
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <Footer.Copyright href="#" by="myst3r10us" year={2025} />
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Footer.Icon href="#" target="_blank" icon={BsTwitter} />
            <Footer.Icon
              href="https://github.com/myst3r10us"
              target="_blank"
              icon={BsGithub}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterPage;
