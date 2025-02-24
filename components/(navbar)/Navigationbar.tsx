"use client"; // top to the file

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { CatIcon, BookCheck, UserRoundSearch, SquarePen } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "What is myst3r10us?",
    href: "",
    description: "A Malaysian-based CTF team that starts in November 2023.",
  },
  {
    title: "Why myst3r10us?",
    href: "",
    description:
      "It started from 'Mysterious Three Flaggers' and it shorten to myst3r10us.",
  },
  {
    title: "Our CTFTime Team Profile",
    href: "https://ctftime.org/team/277613",
    description: "Check out how many CTFs we have participated in!",
  },
  {
    title: "Join myst3r10us",
    href: "",
    description: "Want to join the team? Contact us for further information!",
  },
];

export const Navigationbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  {
    /* Mobile View */
  }
  if (isMobile) {
    return (
      <div className="flex flex-wrap items-center justify-between p-5 dark:bg-slate-900 mx-auto">
        {/* Brand Logo */}
        <div className="flex items-center flex-shrink-0 text-white cursor-pointer">
          <Link href="/" legacyBehavior passHref>
            <span className="text-xl font-semibold tracking-tight md:px-10 gap-5 cursor-pointer">
              myst3r10us
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="flex items-center px-3 py-2 text-white border border-white rounded hover:text-white hover:border-white"
          >
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 0h20v20H0z" fill="none" />
              <path d="M0 4h20v1.5H0zM0 9.5h20V11H0zM0 15h20v1.5H0z" />
            </svg>
          </button>
        </div>

        {/* Mobile View */}
        {/* Navigation Links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full lg:flex lg:items-center lg:w-auto mt-4 lg:mt-0`}
        >
          <div className="text-sm flex flex-col lg:flex-row gap-4 lg:gap-8 lg:ml-auto">
            {/* About Link */}
            <Link
              href="/about"
              className="flex items-center text-white hover:text-gray-300 mt-2 lg:mt-0"
            >
              <CatIcon className="mr-2" />
              <span className="text-sm">About</span>
            </Link>

            {/* Writeups Link */}
            <Link
              href="/writeups"
              className="flex items-center text-white hover:text-gray-300 mt-2 lg:mt-0"
            >
              <BookCheck className="mr-2" />
              <span className="text-sm">Writeups</span>
            </Link>

            {/* Contact Us Link */}
            <Link
              href="/contact"
              className="flex items-center text-white hover:text-gray-300 mt-2 lg:mt-0"
            >
              <UserRoundSearch className="mr-2" />
              <span className="text-sm">Contact Us</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center justify-between p-5 dark:bg-slate-900 mx-auto">
      {/* Brand Logo */}
      <div className="flex items-center flex-shrink-0 text-white cursor-pointer">
        <Link href="/" legacyBehavior passHref>
          <span className="text-xl font-semibold tracking-tight px-10 gap-5 cursor-pointer">
            myst3r10us
          </span>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="block lg:hidden">
        <button
          onClick={toggleMenu}
          className="flex items-center px-3 py-2 text-white border border-white rounded hover:text-white hover:border-white"
        >
          <svg
            className="w-5 h-5 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 0h20v20H0z" fill="none" />
            <path d="M0 4h20v1.5H0zM0 9.5h20V11H0zM0 15h20v1.5H0z" />
          </svg>
        </button>
      </div>

      {/* Desktop View */}
      {/* Navigation Links */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } w-full lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-sm flex flex-col lg:flex-row gap-4 lg:gap-8 lg:ml-auto">
          {/* About Section */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-lg font-DMS">
                  <span className="mr-3">
                    <CatIcon />
                  </span>
                  About
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="flex w-[250px] gap-3 p-4 md:w-[350px] lg:w-[450px] flex-col">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        <div className="flex items-center space-y-2">
                          <CatIcon className="mr-2 " />
                          <span>{component.description}</span>
                        </div>
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Writeups Section */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <BookCheck className="mr-5" />
                  <span className="text-lg font-DMS">Writeups</span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-x-3 p-4 md:w-[395px] md:h-[175px] lg:w-[395px] lg:grid-cols-[.5fr_1fr] justify-between">
                    <li className="row-auto">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-wrap justify-between rounded-md bg-gradient-to-b from-muted/50 to-muted py-2 px-10 no-underline outline-none focus:shadow-md"
                          href="/writeups"
                        >
                          <div className="gap-y-3 text-left mb-2 mt-4 mr-6 text-lg font-medium w-[255px] lg:w-[255px]">
                            <SquarePen className="mr-2" />
                            <span className="mb-4 mt-4">
                              myst3r10us&apos;&nbsp;Writeups
                            </span>
                            <p className="items-justify h-full w-full text-sm leading-tight text-left text-muted-foreground">
                              Here, we showcase our Writeups from myst3r10us.
                            </p>
                          </div>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Contact Section */}
          <NavigationMenu>
            <NavigationMenuList>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <UserRoundSearch className="mr-3" />
                  <span className="text-lg font-DMS">Contact Us</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </div>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navigationbar;
