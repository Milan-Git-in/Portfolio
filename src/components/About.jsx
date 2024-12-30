import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import { AmbientLight, DirectionalLight, SpotLight } from "three";
import Loader from "./Loader";
import Card from "./Card";
import { toolNames } from "../exports";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
const Developer = React.lazy(() => import("./Developer"));
gsap.registerPlugin(ScrollTrigger);
const About = () => {
  const [animationName, setAnimationName] = useState("idle");
  useEffect(() => {
    gsap.to(".box", {
      opacity: 1,
      y: 0,
      duration: 1.5,
      stagger: {
        each: 0.5,
        from: "start",
      },
      scrollTrigger: {
        trigger: ".container",
        start: "top 60%",
        end: "bottom 100%",
        scrub: true,
      },
      ease: "power1.inOut",
    });
  }, []);
  return (
    <div
      id="About"
      className="cursor-default justify-self-center container pt-[10vh] rounded-xl bg-zinc-950 flex justify-center max-sm:flex-col max-sm:mt-[10vh]"
    >
      <div className="box opacity-0 rounded-3xl max-sm:h-80  translate-y-12  w-1/3 max-lg:w-1/3 max-sm:min-w-full">
        <Canvas>
          <ambientLight intensity={7} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <directionalLight position={[10, 10, 10]} intensity={1} />
          <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
          <Suspense fallback={<Loader />}>
            <Developer
              position-y={-3}
              scale={3}
              animationName={animationName}
            />
          </Suspense>
        </Canvas>
      </div>
      <div className="box opacity-0 md:w-1/2  flex flex-col translate-y-12  rounded-3xl  overflow-hidden w-2/3 max-sm:min-w-full pb-5">
        <div className="flex flex-col items-center ">
          <div className="border border-zinc-950 pt-1">About me</div>
          <div className="flex flex-col gap-2 mt-5">
            <div>Hey!!!</div>
            <div> I'm Milan, a Full Stack Software Developer</div>
            <div className="pt-1">
              Education:
              <br />{" "}
              <div className="pl-6">
                • a Bachlors Degree in Computer Science
              </div>
              <div className="mt-2 pl-6">
                • IBM{" "}
                <a
                  className="border-b border-b-blue-400"
                  href="https://coursera.org/share/92b02e044edd1748da18941fa05d0c2a"
                >
                  Certified
                </a>{" "}
                Full Stack Developer
              </div>
            </div>
            <div className="mt-5">My TechStack:</div>
            <div
              className="grid grid-cols-3 gap-3 bg-zinc-900 rounded-2xl p-5 min-w-[40vw] cursor-pointer"
              onClick={() => {
                setAnimationName("victory");
                console.log("hi");
              }}
              onPointerOver={() => setAnimationName("clapping")}
              onPointerOut={() => {
                setAnimationName("idle");
              }}
            >
              {toolNames.map((item, index) => {
                const [toolName, url] = Object.entries(item)[0];
                return <Card key={index} toolName={toolName} url={url} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
