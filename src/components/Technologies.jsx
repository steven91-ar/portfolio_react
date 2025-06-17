import { FaReact, FaNodeJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiPostgresql, SiNextdotjs, SiRedis, SiPython, SiMysql } from "react-icons/si";
import { TbBrandDjango, TbBrandJavascript, TbBrandNextjs, TbBrandSymfony } from "react-icons/tb";
import {motion} from "framer-motion";

const iconVariants = (duration = 2.4) => ({
  initial: { y: 10 },
  animate: {
    y: [-10, 10],
    transition: {
      duration,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "linear",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      {/* Titre */}
      <motion.h1 
    whileInView={{ opacity: 1, y:0}}
    initial={{opacity: 0, y: -100 }}
    transition={{ duration: 1.5}} 
    className="my-20 text-center text-4xl">Technologies</motion.h1>
      {/* Grille des icônes */}
      <motion.div
      whileInView={{ opacity: 1, y:0}}
    initial={{opacity: 0, y: -100 }}
    transition={{ duration: 1.5}}  className="flex flex-wrap items-center justify-center gap-4">
        {/* React */}
<motion.div
  variants={iconVariants(2.5)}
  initial="initial"
  animate="animate"
  className="rounded-2xl border-4 border-neutral-800 p-4 text-center"
>
  <RiReactjsLine className="text-7xl text-cyan-400 mx-auto" />
  <p className="text-cyan-400 mt-2 font-semibold">React</p>
</motion.div>

{/* JavaScript */}
<motion.div
  variants={iconVariants(3)}
  initial="initial"
  animate="animate"
  className="rounded-2xl border-4 border-neutral-800 p-4 text-center"
>
  <TbBrandJavascript className="text-7xl text-yellow-500 mx-auto" />
  <p className="text-yellow-500 mt-2 font-semibold">JavaScript</p>
</motion.div>

{/* Node.js */}
<motion.div
  variants={iconVariants(5)}
  initial="initial"
  animate="animate"
  className="rounded-2xl border-4 border-neutral-800 p-4 text-center"
>
  <FaNodeJs className="text-7xl text-green-500 mx-auto" />
  <p className="text-green-500 mt-2 font-semibold">Node.js</p>
</motion.div>

{/* Python */}
<motion.div
  variants={iconVariants(4)}
  initial="initial"
  animate="animate"
  className="rounded-2xl border-4 border-neutral-800 p-4 text-center"
>
  <SiPython className="text-7xl text-yellow-400 mx-auto" />
  <p className="text-yellow-700 mt-2 font-semibold">Python</p>
</motion.div>

{/* Django */}
<motion.div
  variants={iconVariants(4)}
  initial="initial"
  animate="animate"
  className="rounded-2xl border-4 border-neutral-800 p-4 text-center"
>
  <TbBrandDjango className="text-7xl text-green-500 mx-auto" />
  <p className="text-green-500 mt-2 font-semibold">Django</p>
</motion.div>

{/* Symfony */}
<motion.div
  variants={iconVariants(5)}
  initial="initial"
  animate="animate"
  className="rounded-2xl border-4 border-neutral-800 p-4 text-center"
>
  <TbBrandSymfony className="text-7xl text-white mx-auto" />
  <p className="text-white mt-2 font-semibold">Symfony</p>
</motion.div>

{/* MongoDB (remplace le mauvais SiMysql par le bon icône si nécessaire) */}
<motion.div
  variants={iconVariants(6)}
  initial="initial"
  animate="animate"
  className="rounded-2xl border-4 border-neutral-800 p-4 text-center"
>
  <SiMysql className="text-7xl text-blue-400 mx-auto" />
  <p className="text-blue-400 mt-2 font-semibold">MySQL</p>
</motion.div>

{/* PostgreSQL */}
<motion.div
  variants={iconVariants(6)}
  initial="initial"
  animate="animate"
  className="rounded-2xl border-4 border-neutral-800 p-4 text-center"
>
  <SiPostgresql className="text-7xl text-sky-700 mx-auto" />
  <p className="text-sky-700 mt-2 font-semibold">PostgreSQL</p>
</motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
