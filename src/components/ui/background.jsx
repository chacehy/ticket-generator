import React from "react";
import { useState } from "react";
import Form from "./ticketForm.jsx";
import { For } from "@chakra-ui/react";
import bgImage from "../../../assets/images/background-desktop.png";
import patternCircle from "../../../assets/images/pattern-circle.svg";
import patternLines from "../../../assets/images/pattern-lines.svg";
import patternSquigleTop from "../../../assets/images/pattern-squiggly-line-top.svg";
import patternSquigleBot from "../../../assets/images/pattern-squiggly-line-bottom.svg";
import fullLogo from "../../../assets/images/logo-full.svg";
const Background = ({ children }) => {
  return (
    <div
      className="w-screen h-[1100px] flex flex-col items-center justify-start"
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover" }}
    >
      <div className="absolute right-[16rem] bottom-[22.25rem]">
        <img src={patternCircle} alt="meow" />
      </div>
      <div className="absolute top-0">
        <img src={patternLines} alt="meow" />
      </div>
      <div className="absolute top-[5rem] right-[-1rem]">
        <img src={patternSquigleTop} alt="meow"></img>
      </div>
      <div className="absolute left-[2rem] top-[-5.75rem]">
        <img src={patternCircle} alt="meow" />
      </div>
      <div className="absolute bottom-0 left-0">
        <img src={patternSquigleBot} alt="meow" />
      </div>
      {children}
    </div>
    
  );
};

export default Background