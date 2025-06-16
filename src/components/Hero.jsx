import React from "react";
import profile from "../assets/stevenProfile.png";
import { HERO_CONTENT } from "../constants"; 
const Hero = () => {
  return (
    <section className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap w-full lg:flex-nowrap">
        {/* Texte à gauche */}
        <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2">
          <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
            Steven Dev
          </h1>

          <span className="bg-gradient-to-r from-pink-300 via-slate-500
           to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
            Développeur back end
          </span>

          <p className="my-2 max-w-xl py-6 font-light tracking-tight">
            {HERO_CONTENT}
          </p>
        </div>

        {/* Image à droite */}
        <div className="w-full lg:w-1/2 p-4">
          <div className="flex justify-center">
            <img src={profile} alt="profile" className="max-w-xs rounded-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;