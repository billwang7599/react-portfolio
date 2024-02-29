import React from "react";

function Project(props) {
  var link = "hidden";
  if ("webLink" in props) {
    link = "";
  }
  var languages = "";
  for (var i = 0; i < props.languages.length; i += 1) {
    languages += props.languages[i];
    if (i == props.languages.length - 1) {
      break;
    }
    languages += " · ";
  }

  return (
    <div className="w-full mt-[4rem]">
      <div className="flex w-full h-fit border-slate-950 border-[1px]">
        <div className="w-[35%] flex p-5 items-center md:text-base text-sm">
          <p> {languages} </p>
        </div>

        <div className="flex-auto"></div>
        <div className="relative w-fit h-fit mt-[-1em] px-4 bg-[length:200px_10px]">
          <span className="absolute w-full h-[1px] top-[19px] left-0 bg-[#F3F5F9]"></span>
          <div className="text-2xl relative text-center">
            <h1 className="md:text-2xl text-lg"> {props.title} </h1>
          </div>
        </div>
        <div className="flex-auto"></div>

        <div className={`w-[35%] flex items-end pr-2 pb-2`}>
          <div className="flex-auto"></div>
          <div className="flex items-center md:text-base text-sm">
            <a className={link} href={props.webLink} target="blank_">
              <p>Link</p>
            </a>
            <div className={"mx-2 " + link}>
              <p> · </p>
            </div>
            <a href={props.gitLink} target="blank_">
              <p>GitHub</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
