import React, { useState, type ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const Accordion = ({
  title,
  children,
  className,
  defaultOpen = true,
}: {
  title: string;
  children: ReactNode;
  className?: string;
  defaultOpen?: boolean;
  
}) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={twMerge("flex flex-col w-full h-fit", className)}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className={`hover:underline cursor-pointer relative flex justify-start transition-all duration-75 ${
          open && "italic font-bold"
        } hover:font-bold hover:text-white`}
      >
        <div className="absolute right-full mx-2 h-full size-2 flex items-center justify-center">
          <div className="h-[1px] w-full absolute bg-white"></div>
          <div
            style={{ rotate: !open ? "-90deg" : "0deg" }}
            className="h-[1px] w-full absolute duration-700 ease-in-out transition-all bg-white"
          ></div>
        </div>
        {title}
      </button>

      <>
        <div
          style={{
            height: open ? "auto" : "0px", 
            opacity: open ? "1" : "0",
            // filter: open ? "blur(0px)" : "blur(2px)",
            paddingBottom: open ? "1rem" : "0px",
            paddingTop: open ? "0.5rem" : "0px",
          }}
          className={`transition-all duration-500 ease-in-out w-full overflow-hidden`}
        >
          {children}
        </div>
      </>
    </div>
  );
};

export default Accordion;
