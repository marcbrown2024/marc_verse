"use client";

import Image from "next/image";

import { PinContainer } from "@/components/ui/Pin";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";

const RecentProjects = () => {
  return (
    <div id="projects" className="w-full">
      <h1 className="heading">
        My<span className="text-purple">&nbsp;recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="h-[25rem] lg:min-h-[32.5rem] w-[80vw] sm:w-96 flex items-center justify-center"
            key={item.id}
          >
            <PinContainer
              title="github.com/marcbrown2024"
              href="https://github.com/marcbrown2024"
            >
              <div className="relative w-[80vw] sm:w-96 h-[20vh] lg:h-[30vh] flex items-center justify-center mb-10 overflow-hidden">
                <div
                  className="relative w-full h-full lg:rounded-3xl overflow-hidden"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <Image width={100} height={100} src="/bg.png" alt="bgimg" />
                  <Image
                    width={100}
                    height={100}
                    src={item.img}
                    alt="cover"
                    className="absolute -bottom-2 w-full object-cover z-10"
                  />
                </div>
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <Image
                        width={100}
                        height={100}
                        src={icon}
                        alt="icon5"
                        className="p-2"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
