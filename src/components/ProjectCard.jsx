import React from "react";

const ProjectCard = ({ Image, Project_Name, Project_Desc }) => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <img src={Image} alt={Project_Name} className="rounded-2xl" />
      <div>{Project_Name}</div>
      <div className="text-clip">{Project_Desc}</div>
    </div>
  );
};

export default ProjectCard;
