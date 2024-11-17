'use client'

// react/nextjs components
import React from "react";

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  animate,
  otherClasses,
}: {
  title: string;
  icon?: React.ReactNode | string;
  position: string;
  handleClick?: () => void;
  animate?: boolean;
  otherClasses?: string;
}) => {
  return (
    <button
      className="relative h-14 xl:h-16 w-full md:w-64 md:mt-10 rounded-[0.5rem] p-[1px] overflow-hidden focus:outline-none"
      onClick={handleClick}
    >
      <span
        className={`absolute inset-[-1000%] ${
          animate &&
          "animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
        } bg-white`}
      />

      {/* remove px-3 py-1, add px-5 gap-2 */}
      <span
        className={`h-full w-full inline-flex items-center justify-center gap-3 text-xs xs:text-sm md:text-lg xl:text-2xl text-white font-medium bg-slate-950 px-4 md:px-7 rounded-[0.5rem] cursor-pointer backdrop-blur-3xl ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
