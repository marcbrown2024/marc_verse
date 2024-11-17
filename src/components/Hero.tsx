"use client";

// react/nextjs components
import React from "react";
import Image from "next/image";

// Aceternity UI components
import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import MagicButton from "@/components/ui/MagicButton";

// react icons
import { FaCloudDownloadAlt } from "react-icons/fa";

const Hero = () => {
  const lineHeight = window.innerWidth >= 1024 ? "3.5rem" : "2.5rem";

  return (
    <div className="h-screen w-screen flex items-center justify-center pt-12 xs:pt-36">
      <div>
        <Spotlight
          className="-top-40 md:-top-20 -left-10 md:-left-32 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="absolute top-0 left-0 h-screen w-screen flex items-center justify-center dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none" />
      </div>
      <div className="h-fit w-full flex flex-col-reverse lg:flex-row items-center justify-between px-10 md:px-20 z-0">
        <div className="h-2/3 w-full lg:w-3/5 flex flex-col items-start justify-start gap-6 2xl:gap-12">
          <TextGenerateEffect
            words="Hi, I'm Marc"
            className="w-full text-4xl xs:text-[44px] md:text-6xl xl:text-7xl 2xl:text-9xl"
          />
          <div
            className="text-sm xs:text-base md:text-lg lg:text-2xl 2xl:text-4xl md:tracking-wider sm:mb-8 md:mb-0 "
            style={{ lineHeight: lineHeight }}
          >
            Aspiring software engineer, proficient in Java, Python, JavaScript,
            Golang, AWS, Firebase. Strong communicator, team player, and a keen
            interest in mentorship opportunities.
          </div>

          <div className="w-full flex justify-start gap-8">
            <a href="/Resume.pdf" download="Marc_Brown_Resume.pdf">
              <MagicButton
                title="My Resume"
                icon={<FaCloudDownloadAlt />}
                position="left"
                animate={false}
              />
            </a>
            <a href="https://www.linkedin.com/in/marc-tariq-brown/">
              <MagicButton
                title="&nbsp;Let's Connect"
                icon="👋"
                position="left"
                animate={true}
              />
            </a>
          </div>
        </div>
        <div className="h-48 w-48 xs:h-60 xs:w-60 md:h-80 md:w-80 xl:h-96 xl:w-96 2xl:h-[36rem] 2xl:w-[36rem] bg-white border-4 border-black-200 sm:mb-8 md:mb-0 rounded-full overflow-hidden">
          <Image
            width={500}
            height={500}
            src="/profile_pic.jpg"
            alt="Profile Picture"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
