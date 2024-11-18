"use client";

// react/nextjs components
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Aceternity UI components
import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import MagicButton from "@/components/ui/MagicButton";

const Hero = () => {
  const [lineHeight, setLineHeight] = useState("2.5rem");

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth >= 1024) {
      setLineHeight("3.5rem");
    }
  }, []);

  return (
    <div id="home" className="h-[70vh] md:h-[80vh] flex items-center justify-center mb-28 lg-mb-0">
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
      <div className="h-full w-full flex flex-col-reverse xl:flex-row items-center justify-between z-0">
        <div className="h-2/3 xl:h-full w-full xl:w-2/4 flex flex-col xl:items-center xl:justify-center gap-6 lg:gap-12">
          <TextGenerateEffect
            words="Hi, I'm Marc"
            className="w-full text-4xl xs:text-[44px] md:text-6xl lg:text-7xl"
          />
          <span
            className="text-sm xs:text-base md:text-lg lg:text-2xl md:tracking-wider sm:mb-8 md:mb-0 "
            style={{ lineHeight: lineHeight }}
          >
            Aspiring software engineer, proficient in Java, Python, JavaScript,
            Golang, AWS, Firebase. Strong communicator, team player, and a keen
            interest in mentorship opportunities.
          </span>
          <div className="w-full flex justify-start gap-8">
            <Link href="/Resume.pdf" download="Marc_Brown_Resume.pdf">
              <MagicButton
                title="My Resume"
                icon={
                  <Image
                    width={50}
                    height={50}
                    src="/download.gif"
                    alt="Download gif"
                    unoptimized
                    className="mb-2"
                  />
                }
                position="left"
                animate={false}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/marc-tariq-brown/"
              target="blank"
              rel="noopener noreferrer"
            >
              <MagicButton
                title="&nbsp;Let's Connect"
                icon={
                  <Image
                    width={35}
                    height={35}
                    src="/handwave.gif"
                    alt="Download gif"
                    unoptimized
                    className="mb-2"
                  />
                }
                position="left"
                animate={true}
              />
            </Link>
          </div>
        </div>
        <div className="h-48 w-48 xs:h-60 xs:w-60 md:h-80 md:w-80 xl:h-[28rem] xl:w-[28rem] border-4 border-black-200 rounded-full overflow-hidden">
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
