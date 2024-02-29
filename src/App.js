import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Connect from "./components/Connect";
import background from "./assets/xd.jpg";
import Particle from "./components/Particle";
import React, { useState } from "react";

function App() {
  const [page, setPage] = useState(["", "hidden", "hidden", "hidden"]);

  return (
    <div className="h-screen w-screen p-4 md:p-5">
      {/*^ outer wrapper*`/}
      {/*inner wrapper*/}
      <div className="h-full w-full border-[1px] border-black relative px-10">
        <Particle />
        <div className="flex flex-col h-full ">
          <div className="pt-10 pb-5 fixed w-[90%] flex bg-[#F3F5F9] bg-opacity-0">
            <Navbar setPage={setPage} />
          </div>
          <div className="my-[7em] h-[100%]">
            <span className={page[0]}>
              <Home />
            </span>
            <span className={page[1]}>
              <About />
            </span>
            <span className={page[2]}>
              <Work />
            </span>
            <span className={page[3]}>
              <Connect />
            </span>
          </div>
          <div className="mt-[-70px] z-20"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
