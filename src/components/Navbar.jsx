import React, { useState } from "react";

const Navbar = ({ setPage }) => {
  const unselected = "px-[10px] hover:text-slate-600";
  const selected = unselected + " border-b-[1px] border-black hover:border-slate-600 text-[1.5em]";
  const [home, setHome] = useState(selected);
  const [about, setAbout] = useState(unselected)
  const [work, setWork] = useState(unselected);
  const [connect, setConnect] = useState(unselected);

  const handleClick = (name) => {
    if (name == "home") {
      setHome(selected);
      setAbout(unselected);
      setWork(unselected);
      setConnect(unselected);
      setPage(["", "hidden", "hidden", "hidden"]);
    } else if (name == "about") {
      setHome(unselected);
      setAbout(selected);
      setWork(unselected);
      setConnect(unselected);
      setPage(["hidden", "", "hidden", "hidden"]);
    } else if (name == "work") {
      setHome(unselected);
      setAbout(unselected);
      setWork(selected);
      setConnect(unselected);
      setPage(["hidden", "hidden", "", "hidden"]);
    } else if (name == "connect") {
      setHome(unselected);
      setAbout(unselected);
      setWork(unselected);
      setConnect(selected);
      setPage(["hidden", "hidden", "hidden", ""]);
    }
  };

  return (
    <div className="flex text-[1.2em] md:text-[1.5em]">
      <div className="flex-auto flex flex-col items-center">
        <button onClick={() => handleClick("home")} className={home}>
          {" "}
          Home{" "}
        </button>
      </div>
      <div className="flex-auto flex flex-col items-center">
        <button onClick={() => handleClick("about")} className={about}>
          {" "}
          Experience{" "}
        </button>
      </div>
      <div className="flex-auto flex flex-col items-center">
        <button onClick={() => handleClick("work")} className={work}>
          {" "}
          Work{" "}
        </button>
      </div>
      <div className="flex-auto flex flex-col items-center">
        <button onClick={() => handleClick("connect")} className={connect}>
          {" "}
          Links{" "}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
