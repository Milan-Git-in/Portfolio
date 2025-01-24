import React from "react";

const About2 = () => {
  return (
    <div id="About" className="flex mt-[10vh]  gap-[7vw] justify-center  px-5 ">
      <div>
        <img
          src={"https://avatars.githubusercontent.com/u/151204285?v=4"}
          alt="Milan"
          className="rounded-full size-64 max-sm:size-44"
        />
      </div>
      <div className="flex flex-col py-5 max-w-[30vw] gap-2 justify-center max-md:max-w-[50vw] break-words ">
        <div className="self-center">
          <p>Hey, I'm Milan</p>
        </div>
        <div>
          <p>
            I am a Full Stack Web Developer Im passionate About Building
            Scalable & Maintainable Applications
          </p>
        </div>
      </div>
    </div>
  );
};

export default About2;
