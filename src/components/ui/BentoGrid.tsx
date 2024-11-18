"use client";

// react/nextjs components
import React, { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import Image from "next/image";

// library and utilities
import { cn } from "@/lib/utils";

// Aceternity UI components
import { BackgroundGradientAnimation } from "@/components/ui/GradientBg";
import MagicButton from "@/components/ui/MagicButton";

// other components
import Lottie from "react-lottie";

// json data
import animationData from "@/data/confetti.json";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["ReactJS", "Express", "Typescript"];
  const rightLists = ["VueJS", "NuxtJS", "GraphQL"];

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: false,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "marcbrown2024@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);

    // Refresh after 5 seconds
    setTimeout(() => {
      setCopied(false); // Reset the copied state
    }, 5000); // 5000ms = 5 seconds
  };

  return (
    <div
      className={cn(
        `relative ${
          id !== 3 ? "h-60" : "h-52"
        } lg:h-full flex flex-col justify-between space-y-4 row-span-1 border border-white/[0.1] rounded-3xl overflow-hidden group/bento transition duration-200`,
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* add img divs */}
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <Image
              width={500}
              height={500}
              src={img}
              alt={img}
              className={cn(
                imgClassName,
                `object-cover object-center ${
                  id === 4 ? "opacity-50 transform scale-x-[-1]" : ""
                } ${
                  id === 6 ? "w-full h-full" : ""
                }`
              )}
            />
          )}
          {id === 1 && (
            <div className="absolute top-0 h-full w-full bg-black-100/50" />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          } `}
        >
          {spareImg && (
            <Image
              width={100}
              height={100}
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          // add background animation , remove the p tag
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          {/* change the order of the title and des, font-extralight, remove text-xs text-neutral-600 dark:text-neutral-300 , change the text-color */}
          <div className="md:max-w-60 text-sm md:text-xs lg:text-base text-white/80 font-sans font-extralight z-10">
            {description}
          </div>
          {/* add text-3xl max-w-96 , remove text-neutral-600 dark:text-neutral-300*/}
          {/* remove mb-2 mt-2 */}
          <div
            className={` max-w-96 text-lg lg:text-3xl font-sans font-bold ${
              id === 2 && "mt-20"
            } z-10`}
          >
            {title}
          </div>

          {id === 3 && (
            <div>
              <Image
                width={400}
                height={400}
                src="/techybg.png"
                alt="Computer monitor background"
                className="absolute top-0 -left-20 transform scale-x-[-1] opacity-20"
              />
            </div>
          )}

          {/* for the github 3d globe */}
          {id === 2 && (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute -top-5 lg:-top-10 left-20"
              style={{ objectFit: "cover", opacity: "25%" }}
            >
              <source src="/github_globe.mp4" type="video/mp4" />
            </video>
          )}

          {/* Tech stack list div */}
          {id === 3 && (
            <div className="flex gap-2 lg:gap-5 w-fit absolute right-0">
              {/* tech stack lists */}
              <div className="flex flex-col gap-2 lg:gap-5 mt-14 lg:mt-3">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="text-xs lg:text-base text-center bg-[#10132E] px-3 py-4 opacity-50 
                      lg:opacity-100 rounded-lg "
                  >
                    {item}
                  </span>
                ))}
                <span className="text-center bg-[#10132E] px-3 py-6 lg:py-4 rounded-lg"></span>
              </div>
              <div className="flex flex-col gap-3 lg:gap-5 mt-8 lg:mt-0">
                <span className="text-center bg-[#10132E] px-3 py-6 lg:py-4 rounded-lg"></span>
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="text-xs lg:text-base text-center bg-[#10132E] px-3 py-4 opacity-50 
                      lg:opacity-100 rounded-lg"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          {id === 6 && (
            <div className="mt-5 relative">
              <div
                className={`absolute -bottom-5 right-0 ${
                  copied ? "block" : "block"
                }`}
              >
                <Lottie
                  key={copied ? "copied" : "default"}
                  options={defaultOptions}
                  height={200}
                  width={400}
                />
              </div>

              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
