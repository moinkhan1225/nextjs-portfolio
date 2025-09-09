"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Logo from 'next/image';
import { ArrowRight } from "lucide-react";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Let's Connect",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
        <Logo
         src="/images/logo.png"
         alt="Logo"
         width={140}
         height={120}
        />
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
               <NavLink
                    href={link.path}
                    title={
              <span className="inline-flex items-center gap-0 transition-all duration-300">
                    {link.title}
                    {link.title === "Let's Connect" && (
                <span className="opacity-0 group-hover:opacity-100 ml-0 group-hover:ml-2 transition-all duration-300">
                    <ArrowRight className="w-4 h-4" />
                </span>
           )}
              </span>
                          }
                    className={`
                     group
                     ${link.title === "Let's Connect" 
                       ? "bg-gradient-to-br from-primary-500 to-secondary-500 text-white" 
                       : "text-white"}
                     px-4 py-2 rounded-full 
                     transition-all duration-500 ease-in-out 
                     hover:brightness-110 hover:-translate-y-1 hover:shadow-md
                    `}
                />


              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
