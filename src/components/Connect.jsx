import React from "react";
import resume from '../assets/Bill_Wang_Resume.pdf';

const Connect = () => {
  return (
    <div className="flex text-6xl h-full">
      <div className="flex-auto"></div>
      <div className="flex flex-col h-full text-center md:text-right">
        <div className="flex-auto"></div>
        <a
          className="mt-2.5"
          target="_blank"
          href="mailto:billwang7599@gmail.com"
        >
          email
        </a>
        <a
          className="mt-2.5"
          target="_blank"
          href="https://github.com/billwang7599"
        >
          GitHub
        </a>
        <a className="mt-2.5" target="_blank" href={resume}>
          Resume
        </a>
      </div>
      <div className="flex-auto md:hidden block"></div>
    </div>
  );
};

export default Connect;
