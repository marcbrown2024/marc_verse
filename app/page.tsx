"use client";

// react/nextjs components
import React, { useEffect, useState } from "react";

// Aceternity UI components
import { FloatingDock } from "@/components/ui/FloatingNavbar";

// custom components
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import Mentors from "@/components/Mentors";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";

// react icons
import { FaHome } from "react-icons/fa";
import { ImUserTie } from "react-icons/im";
import { IoTerminal } from "react-icons/io5";
import { BsBuildingsFill } from "react-icons/bs";
import { MdContactPhone } from "react-icons/md";

// navbar items
const navItems: NavItem[] = [
  { name: "Home", link: "#home", icon: <FaHome /> },
  { name: "About", link: "#about", icon: <ImUserTie /> },
  { name: "Projects", link: "#projects", icon: <IoTerminal /> },
  { name: "Experience", link: "#experience", icon: <BsBuildingsFill /> },
  { name: "Contact", link: "#contact", icon: <MdContactPhone /> },
];

const Home = () => {
  return (
    <main className="relative flex items-center justify-center mx-auto overflow-clip">
      <FloatingDock navItems={navItems} />
      <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center bg-black-100/40 bg-grid-white/[0.03]">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute inset-0 flex items-center justify-center bg-black-100/40 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none -z-50" />
      </div>
      <div className="w-full lg:w-10/12 flex flex-col gap-20 px-8 mb-10 z-0">
        <Hero />
        <Grid />
        <RecentProjects />
        <Mentors />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
