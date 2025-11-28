import React from "react";
import HeroSectionImage from "../Assets/HeroSectionImage.png";

const HeroSection = () => {
  return (
    <div className="grid grid-cols-2 min-h-[50vh] mx-40 rounded-3xl px-8 mx-50">
      {/* {left part text} */}
      <div className="h-full flex flex-col justify-center gap-4">
        <h1 className="text-5xl font-bold text-white hover:text-cyan-400 transition duration-300">
          Welcome to the <strong>Movies Den</strong>{" "}
        </h1>
        <p className="text-2xl mt-4 text-white text-white hover:text-cyan-400 transition duration-300">
          the best place to find movies!
        </p>
      </div>

      {/* {right part image} */}
      <div className="h-full">
        <img
          src={HeroSectionImage}
          alt="Hero Section"
          className="h-full w-full object-cover rounded-3xl"
        />
      </div>
    </div>
  );
};

export default HeroSection;
