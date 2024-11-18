// react/nextjs components
import Image from "next/image";

// Aceternity UI components
import { FloatingDock } from "@/components/ui/FloatingDock";

// custom components
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import RecentProject from "@/components/RecentProject";

// react icons
import { FaHome } from "react-icons/fa";
import { ImUserTie } from "react-icons/im";
import { IoTerminal } from "react-icons/io5";
import { BsBuildingsFill } from "react-icons/bs";
import { MdContactPhone } from "react-icons/md";

export const navItems = [
  { name: "Home", link: "#home", icon: <FaHome /> },
  { name: "About", link: "#about", icon: <ImUserTie /> },
  { name: "Projects", link: "#projects", icon: <IoTerminal /> },
  { name: "Work Experience", link: "#experience", icon: <BsBuildingsFill /> },
  { name: "Contact", link: "#contact", icon: <MdContactPhone /> },
];

export default function Home() {
  return (
    <main className="relative flex items-center justify-center overflow-hidden">
      <FloatingDock navItems={navItems} />
      <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none" />
      </div>
      <div className="w-11/12 lg:w-[75%] my-20 sm:my-40 xl:my-20">
        <Hero />
        <Grid />
        <RecentProject />
      </div>
    </main>
  );
}
