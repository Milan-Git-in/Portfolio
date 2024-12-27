import { Html, Image } from "@react-three/drei";
import React from "react";

const Loader = () => {
  return (
    <Html>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
          width="200"
          height="200"
          style="shape-rendering: auto; display: block; background: transparent;"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <g>
            <path
              style="transform:scale(0.61);transform-origin:50px 50px"
              stroke-linecap="round"
              d="M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z"
              stroke-dasharray="156.51924621582032 100.06968200683593"
              stroke-width="3"
              stroke="#ffffff"
              fill="none"
            >
              <animate
                values="0;256.58892822265625"
                keyTimes="0;1"
                dur="1.5151515151515151s"
                repeatCount="indefinite"
                attributeName="stroke-dashoffset"
              ></animate>
            </path>
            <g></g>
          </g>
        </svg>
      </div>
    </Html>
  );
};

export default Loader;