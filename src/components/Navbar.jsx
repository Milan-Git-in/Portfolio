import React from "react";

const Navbar = () => {
  return (
    <div className="cursor-default pt-4 px-8">
      <div className="flex justify-between max-sm:flex-col max-sm:items-center">
        <div className="-mt-3 max-sm:mt-4 max-sm:hidden">
          <img src="/Logo.png" alt="Logo" className="w-14" />
        </div>
        <ul className="flex gap-[3vw] max-sm:flex-col max-sm:items-center">
          <li className="max-sm:w-screen max-sm:text-center onHover">
            <a className="cursor-default" href="#About">
              About Me
            </a>
          </li>

          <li className="max-sm:w-screen max-sm:text-center onHover">
            <a href="#contact">Contact Me</a>
          </li>
          <li className="max-sm:w-screen max-sm:text-center onHover">
            <a href="#footer">Connect with me</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
