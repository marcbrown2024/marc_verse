// react/nextjs components
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Aceternity UI components
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

// custom components
import MagicButton from "@/components/MagicButton";

const Hero = () => {
  const [lineHeight, setLineHeight] = useState("2.5rem");

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth >= 1024) {
      setLineHeight("3.5rem");
    }
  }, []);

  return (
    <div id="home" className="h-[90vh] md:h-[80vh] pt-44 md:pt-36 pb-20">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="h-full w-full flex flex-col-reverse xl:flex-row items-center justify-between">
        <div className="h-2/3 xl:h-full w-full xl:w-[55%] flex flex-col justify-center gap-3">
          <TextGenerateEffect
            words="Hi, I'm Marc!"
            className="text-4xl md:text-6xl xl:text-8xl"
          />

          <p
            className="md:text-xl xl:text-3xl md:tracking-wider mb-4"
            style={{ lineHeight: lineHeight }}
          >
            Aspiring software engineer on a mission to craft innovative
            solutions. Explore my portfolio and discover the passion behind my
            code.
          </p>

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
            />
          </Link>
        </div>
        <div className="h-48 w-48 xs:h-60 xs:w-60 md:h-80 md:w-80 xl:h-[28rem] xl:w-[28rem] border-4 border-black-200 rounded-full overflow-hidden">
          <Image
            width={500}
            height={500}
            src="/profile_pic.jpg"
            alt="Profile Picture"
            className="h-full w-full object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
