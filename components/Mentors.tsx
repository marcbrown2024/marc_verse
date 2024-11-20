"use client";

import React from "react";
import Image from "next/image";

import { InfiniteMovingCards } from "@/components/ui/InfiniteCards";

import { companies, testimonials } from "@/data";

const Mentors = () => {
  return (
    <section id="testimonials" className="h-[65vh] relative">
      <h1 className="heading">
        Kind words from
        <span className="text-purple"> Mentors</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        <div className="absolute bottom-0 h-28 w-screen flex flex-wrap items-center justify-center gap-4 md:gap-16">
          {companies.map((company) => {
            const { id, img, name } = company;
            return (
              <React.Fragment key={id}>
                <div className="relative h-28 w-28 flex items-center justify-center bg-white rounded-full">
                  <Image
                    width={100}
                    height={100}
                    src={img}
                    alt={name}
                    className={`${
                      id === 1 || id === 4
                        ? "h-14  object-contain"
                        : id === 6
                        ? "h-20"
                        : "h-10  object-contain"
                    }`}
                  />
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Mentors;
