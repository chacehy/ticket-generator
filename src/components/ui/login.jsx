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

const Login = () => {
  return (
    <div className="container">
      <div className="relative flex items-center justify-center mt-10 mb-16">
        <img src={fullLogo} alt="" />
      </div>
      <div className="relative flex items-center justify-center flex-col">
        <h1 className="text-white font-[Inconsolata] font-extrabold text-6xl text-center">
          Your Journey to Coding Conf<br></br> 2025 Starts Here!
        </h1>
        <p className="text-white pt-6 font-[Inconsolata] text-2xl text-opacity-60">
          secure your spot at the next year's biggest coding conference.
        </p>
        <Form/>
      </div>
    </div>
  );
};

export default Login;
