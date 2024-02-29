import React from "react";
import Job from "./Job";

const About = () => {
  return (
    <div className="mt-10">
      <div className="h-[70vh] lg:px-[20vw] overflow-y-scroll">
        <div className="mt-[-1.7rem]">
          <Job
            company="Huawei"
            date="Feb 2024 - May 2024"
            position="Software Engineer"
            location="Markham, ON"
          />
        </div>
        <Job
          company="AdaptivePulse"
          date="May 2023 - Aug 2023"
          position="Software Developer"
          location="Waterloo, ON"
        />
        <Job
          company="RoboEDU"
          date="May 2022 - Aug 2022"
          position="Programming Instructor"
          location="Markham, ON"
        />
      </div>
    </div>
  );
};

export default About;
