import React from "react";
import Project from "./components/Project";

const Work = () => {
  return (
    <div className="h-[95%] md:px-7 lg:px-32">
      <div className="mt-[-3rem]">
        <Project
          title="Schedulr"
          languages={["AWS RDS", "PostgreSQL", "React", "Go"]}
          gitLink="https://github.com/lourw/schedulr"
        />
      </div>
      <Project
        title="reWordle"
        languages={["Python", "PyQT5", "JSON"]}
        gitLink="https://github.com/billwang7599/RoboEdu-HackathonCurriculum"
      />
      <Project
        title="pvim"
        languages={["Vim", "Lua"]}
        gitLink="https://github.com/billwang7599/pvim"
      />
    </div>
  );
};

export default Work;
