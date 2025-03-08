import React, { useState } from "react";

const InputInteraction = () => {
    const [focused, setFocused] = useState(false)
  return (
    <div className={`rounded-md transition-all ${focused && "bg-accent/20"}`}>
        <div className={`text-[12px] transition-all duration-300 px-2 text-foreground/40 ${focused ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[20%] " } `}>Enter name</div>
      <div className="flex rounded-md border-2 group focus-within:border-primary items-center justify-start relative overflow-hidden">
        <div className="text-sm group-focus-within:text-[12px] opacity-100 group-focus-within:opacity-0 absolute mx-4 text-foreground/40 pointer-events-none duration-300 ease-in-out group-focus-within:-top-full group-focus-within:translate-y-1/2 top-1/2 -translate-y-1/2 transition-all  ">
          Enter name
        </div>
        <input onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} className="px-4 py-2 bg-accent/40  outline-none focus:border-primary border-accent" />
      </div>
    </div>
  );
};

export default InputInteraction;
