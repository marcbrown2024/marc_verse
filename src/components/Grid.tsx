"use client";

// react/nextjs components
import React from "react";

// Aceternity UI components
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";

// json data
import { gridItems } from "@/data/index";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full pt-20">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
