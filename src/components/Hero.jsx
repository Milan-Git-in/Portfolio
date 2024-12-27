import gsap from "gsap";
import React, { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    const tl = gsap.timeline(); // Create a GSAP timeline

    // Animate #Headline
    tl.fromTo(
      "#Headline",
      { opacity: 0 },
      { opacity: 1, duration: 2, ease: "power3.in" }
    )
      // Animate #tagline after #Headline animation is done
      .fromTo(
        "#tagline",
        { opacity: 0 },
        { opacity: 1, duration: 2, ease: "power3.out" }
      )
      // Animate #border after #tagline animation is done
      .fromTo(
        "#border",
        { width: "0%" },
        { width: "40%", duration: 2, ease: "power3.out" }
      );
  }, []);

  return (
    <div className="flex cursor-default flex-col justify-center items-center min-h-[90vh]">
      <div
        id="Headline"
        className="text-4xl max-sm:text-xl max-md:text-2xl opacity-0"
      >
        Turning Imaginations Into Reality
      </div>
      <div id="border" className="my-2 w-0 animated-border" />
      <div id="tagline" className="max-sm:text-sm opacity-0">
        From Front-end flair to Back-end blend.
      </div>
    </div>
  );
};

export default Hero;
