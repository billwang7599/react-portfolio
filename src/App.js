import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
//import Connect from "./components/Connect";
import Particle from "./components/Particle"; 
import React, { useState } from "react";

function App() {
  const [page, setPage] = useState([" ", " hidden", " hidden", " hidden"]);

  return (
    <div className="p-1.5 md:p-5 h-screen">
      {/*^ outer wrapper*`/}
      {/*inner wrapper*/}
      <div className="flex flex-col h-full w-full border-[1px] border-black relative px-10 ">
        <Particle />
        {/*Navbar*/}
        <div className="flex-none mt-10 mb-20 flex overflow-x-auto h-fit w-full ">
          <Navbar setPage={setPage} />
        </div>

        {/*Main Screen*/}
        <div className="h-full mb-10 overflow-auto">
          <span className={page[0]}>
            <Home />
          </span>
          <span className={page[1]}>
            <About />
          </span>
          <span className={page[2]}>
            <Work />
          </span>
          {/* 
          <span className={default_class + page[3]}>
            <Connect />
          </span>
          */}
        </div>
      </div>
    </div>
  );
}

export default App;
