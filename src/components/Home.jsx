import React from "react";
import resume from "../assets/Bill_Wang_Resume.pdf";

const Home = () => {
  return (
    <div className="w-full h-[95%] flex flex-col">
      {/* Intro */}
      <div className="flex-none md:text-left text-center">
        <p> Hello. I am</p>
        <h1 className="text-5xl md:text-6xl"> Bill Wang</h1>
        <div className="text-xl ">
          <p>Software Developer</p>
          <p>AI Tinkerer</p>
          <p>Engineer</p>
        </div>
      </div>
      <span className="flex-auto"></span>
      {/* Links */}
      <div className="flex-none text-6xl mt-20">
        <div className="flex flex-col h-full text-center md:text-right">
          <div className="flex-auto md:hidden block"></div>
          <div className="mt-2.5">
            <a target="_blank" href="mailto:billwang7599@gmail.com">
              email
            </a>
          </div>
          <div className="mt-2.5">
            <a target="_blank" href="https://github.com/billwang7599">
              GitHub
            </a>
          </div>
          <div className="mt-2.5">
            <a target="_blank" href={resume}>
              Resume
            </a>
          </div>
        </div>
        <div className="flex-auto md:hidden block"></div>
      </div>
    </div>
  );
};

export default Home;
