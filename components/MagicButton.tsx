import React from "react";

/**
 *  UI: border magic from tailwind css btns
 *  Link: https://ui.aceternity.com/components/tailwindcss-buttons
 *
 *  change border radius to rounded-lg
 *  add margin of md:mt-10
 *  remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50
 */
const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  animate,
  otherClasses,
}: {
  title: string;
  icon?: React.ReactNode;
  position: string;
  handleClick?: () => void;
  animate?: boolean;
  otherClasses?: string;
}) => {
  return (
    <button
      className="relative h-12 lg:h-14 w-fit rounded-[0.5rem] p-[1px] focus:outline-none hover:scale-[98%] overflow-hidden"
      onClick={handleClick}
    >
      <span
        className={`absolute inset-[-1000%] ${
          animate &&
          "animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
        } bg-white`}
      />

      <span
        className={`h-full w-full inline-flex items-center justify-center gap-3 text-xs xs:text-sm md:text-lg xl:text-xl text-white text-nowrap font-medium bg-slate-950 px-4 rounded-[0.5rem] cursor-pointer backdrop-blur-3xl ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
