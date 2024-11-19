"use client";

/**
 * Note: Use position fixed according to your needs
 * Desktop navbar is better positioned at the bottom
 * Mobile navbar is better positioned at bottom right.
 **/
// library and utilities

// react/nextjs components
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

// framer-motion animations
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

// libraries and utilities
import { cn } from "@/lib/utils";

export const FloatingDock = ({ navItems }: { navItems: NavItem[] }) => {
  const [visible, setVisible] = useState(true);
  const [ishovered, setIsHovered] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      if (window.scrollY === 0) {
        setVisible(true); // User is at the top of the page
      } else {
        setVisible(true); // User is scrolling
      }

      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        // If the user is inactive and not at the top, and not hovered, hide the element
        if (window.scrollY !== 0 && !ishovered) {
          setVisible(false);
        }
      }, 2000); // 2 seconds of inactivity
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, [ishovered]); // Dependency array includes ishovered to re-run when hover state changes

  return (
    <div
      className={`fixed top-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:w-[40%] xl:w-[25%] flex items-center justify-center ${
        visible ? "opacity-100 z-[1000]" : "opacity-0 scale-90 -z-50"
      } transition-opacity duration-500 ease-in-out`}
    >
      <FloatingDockDesktop navItems={navItems} setIsHovered={setIsHovered} />
      <FloatingDockMobile navItems={navItems} visible={visible} />
    </div>
  );
};

const FloatingDockMobile = ({
  navItems,
  className,
  visible,
}: {
  navItems: NavItem[];
  className?: string;
  visible: boolean;
}) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "inset-x-0 h-16 w-11/12 flex xl:hidden items-center justify-center space-x-4 px-10 py-5 mx-autorounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        {navItems.map((navItem: NavItem, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center  flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
            <span className="text-sm font-semibold tracking-wide">
              {navItem.name}
            </span>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

const FloatingDockDesktop = ({
  navItems,
  className,
  setIsHovered,
}: {
  navItems: NavItem[];
  className?: string;
  setIsHovered: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "h-16 w-full hidden xl:flex items-end justify-between bg-gray-50 dark:bg-neutral-900 px-4 pb-3 rounded-2xl",
        className
      )}
      style={{
        backdropFilter: "blur(16px) saturate(180%)",
        backgroundColor: "rgba(17, 25, 40, 0.75)",
        borderRadius: "12px",
      }}
    >
      {navItems.map((item) => (
        <IconContainer
          mouseX={mouseX}
          key={item.name}
          {...item}
          setIsHovered={setIsHovered}
        />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  name,
  link,
  icon,
  setIsHovered,
}: {
  mouseX: MotionValue;
  name: string;
  link: string;
  icon?: JSX.Element;
  setIsHovered: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const ref = useRef<HTMLDivElement>(null);

  // Calculate the distance from the mouse to the center of the parent div
  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  // Shared size transform for parent and icon
  const sizeTransform = useTransform(distance, [-50, 0, 50], [45, 60, 45]);

  // Spring animations for smooth resizing
  const parentSize = useSpring(sizeTransform, {
    mass: 0.2,
    stiffness: 150,
    damping: 15,
  });

  const iconSize = useSpring(sizeTransform, {
    mass: 0.3,
    stiffness: 150,
    damping: 20,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <Link href={link}>
      <motion.div
        ref={ref}
        style={{ width: parentSize, height: parentSize }}
        onMouseEnter={() => {
          setHovered(true);
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setHovered(false);
          setIsHovered(false);
        }}
        className="relative flex items-center justify-center bg-gray-200 dark:bg-neutral-800 aspect-square rounded-full"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="px-2 py-0.5 whitespace-pre rounded-md bg-gray-100 border dark:bg-neutral-800 dark:border-neutral-900 dark:text-white border-gray-200 text-neutral-700 absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs"
            >
              {name}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: iconSize, height: iconSize }}
          className="flex items-center justify-center text-[1.25rem]"
        >
          {icon}
        </motion.div>
      </motion.div>
    </Link>
  );
}
