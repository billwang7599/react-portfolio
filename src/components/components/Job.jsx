import React from "react";

function Job(props) {
  return (
    <div>
      {/* Wide view */}
      <div className="hidden lg:block">
        <div className="flex mt-5">
          <div className="flex-col">
            <div className="flex">
              <p className="flex-none text-3xl">{props.company}</p>
              <p className="mt-1 mx-1.5 flex-none">|</p>
              <p className="mt-1 text-2xl">{props.position}</p>
            </div>
            <p className="mt-[-0.5em] flex-none text-lg">{props.location} </p>
          </div>
          <p className="mt-2 flex-auto"></p>
          <p className="mt-2 flex-none text-xl">{props.date}</p>
        </div>
      </div>

      {/* Narrow view */}
      <div className="lg:hidden block text-center">
        <div className="flex flex-col mt-5">
          <div className="flex">
            <span className="flex-auto"></span>
            <p className="flex-none text-3xl">{props.company}</p>
            <p className="mt-1 mx-1.5 flex-none">|</p>
            <p className="mt-1">{props.position}</p>
            <span className="flex-auto"></span>
          </div>
          <p className="mt-[-0.25em] flex-none text-lg">{props.location} </p>
          <p className="mt-[-0.25em] flex-none text-xl">{props.date}</p>
        </div>
      </div>
    </div>
  );
}

export default Job;
