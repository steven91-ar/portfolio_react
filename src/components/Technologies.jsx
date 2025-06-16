import { FaReact, FaNodeJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiPostgresql, SiNextdotjs, SiRedis, SiPython, SiMysql } from "react-icons/si";
import { TbBrandDjango, TbBrandJavascript, TbBrandNextjs, TbBrandSymfony } from "react-icons/tb";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      {/* Titre */}
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      {/* Grille des icônes */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        {/* React */}
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>

        {/* javascript */}
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandJavascript className="text-7xl text-yellow-500" />
        </div>

        {/* Node.js */}
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-7xl text-green-500" />
        </div>


        {/* python */}
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPython className="text-7xl text-yellow-700" />
        </div>

        {/* Django */}
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandDjango className="text-7xl text-blue-500" />
        </div>

         {/* Symfony */}
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandSymfony className="text-7xl text-white" />
        </div>
        

        {/* MongoDB */}
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMysql className="text-7xl text-green-500" />
        </div>
        {/* PostgreSQL */}
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPostgresql className="text-7xl text-sky-700" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
