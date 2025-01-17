import React from "react";
import { useState } from "react";
import Form from "./ticketForm.jsx";
import { For } from "@chakra-ui/react";
import bgImage from "../../../assets/images/background-desktop.png";
import patternCircle from "../../../assets/images/pattern-circle.svg";
import patternLines from "../../../assets/images/pattern-lines.svg";
import patternSquigleTop from "../../../assets/images/pattern-squiggly-line-top.svg";
import patternSquigleBot from "../../../assets/images/pattern-squiggly-line-bottom.svg";

const Login = () => {
  return (
    <div
      className="w-screen min-h-screen flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover' }}
    >
      <div className="absolute right-[8rem] bottom-[11.25rem]">
        <img src={patternCircle} alt="meow" />
      </div>
      <div className="absolute h-screen overflow-hidden">
        <img src={patternLines} alt="meow" />
      </div>
      <div>
        <img src= alt="meow"></img>
      </div>
    </div>
  );
};

export default Login;
