import React from "react";

const Footer = () => (
  <div className="bg-blue">
    <div className="flex justify-between w-full mx-auto p-4 md:p-8 text-sm">
      <p className="text-white">
        Created by Andrew Mason
      </p>
      <p>
        <a
          href="https://github.com/andrewmcodes"
          className="font-bold no-underline text-white"
        >
          GitHub
        </a>
      </p>
    </div>
  </div>
);

export default Footer;
