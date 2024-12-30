import React, { useEffect } from "react";
import ProjectCard from "./ProjectCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  useEffect(() => {
    gsap.to(".build", {
      opacity: 1,
      y: 0,
      ease: "power2.inOut",
      duration: 1,
      stagger: {
        each: 0.3, // Add a delay between each animation
      },
      scrollTrigger: {
        trigger: ".build",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.to(".project-box", {
      opacity: 1, // Start fully hidden
      y: 0, // Start offset downward
      ease: "power2.inOut",
      duration: 1,
      stagger: {
        each: 0.3, // Add a delay between each animation
      },
      scrollTrigger: {
        trigger: ".project-box", // Trigger when the container scrolls into view
        start: "top 85%", // Trigger when top of container is 90% down the viewport
        toggleActions: "play none none reverse", // Play only once
      },
    });
  }, []);

  return (
    <div className="flex flex-col mt-[20vh] mx-2">
      <div className="flex flex-col justify-center items-center text-3xl">
        <div className="build opacity-0 gap-7 translate-y-20 flex">
          <div>My</div>
          <div>Builds</div>
        </div>
        <div className="build opacity-0 my-2 w-[20vw] max-sm:w-40 animated-border"></div>
      </div>
      <div className="projects-container grid grid-cols-3 gap-6 mt-[10vh] max-md:flex max-md:flex-col mx-2">
        <div className="project-box opacity-0  translate-y-[100px]">
          <ProjectCard
            Image={"/HeroBackground.png"}
            Project_Name={"Project 1"}
            Project_Desc={"Project Desc"}
          />
        </div>
        <div className="project-box opacity-0  translate-y-[100px]">
          <ProjectCard
            Image={"/HeroBackground.png"}
            Project_Name={"Project 2"}
            Project_Desc={"Project Desc"}
          />
        </div>
        <div className="project-box opacity-0  translate-y-[100px]">
          <ProjectCard
            Image={"/HeroBackground.png"}
            Project_Name={"Project 3"}
            Project_Desc={"Project Desc"}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
