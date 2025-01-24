import React from "react";

const Footer = () => {
  return (
    <section
      id="footer"
      className="text-zinc-700 cursor-default c-space pt-7 mt-[20vh] pb-3 border-t border-zinc-800 flex justify-between items-center flex-wrap gap-5"
    >
      <div className="flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3">
        <a href="https://github.com/Milan-Git-in" target="_blank">
          <img
            className="rounded-full w-10 bg-zinc-900 mr-4 cursor-pointer"
            src="./github.png"
            alt="github"
          />
        </a>
        <a
          target="_blank"
          className="bg-white rounded-full"
          href="https://www.linkedin.com/in/milan-prajapati-1b676526b/"
        >
          <img
            className="rounded-full w-10 cursor-pointer"
            src="./linkedin.png"
            alt="LinkedIn"
          />
        </a>
      </div>
      <p>©️ 2025 Milan. All rights Reserved </p>
    </section>
  );
};

export default Footer;
