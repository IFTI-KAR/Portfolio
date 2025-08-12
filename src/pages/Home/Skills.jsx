import React from "react";
import { motion } from "framer-motion";
import {
  SiPython,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiGit,
  SiGithub,
  SiMysql,
  SiTensorflow,
} from "react-icons/si";
import { FaBrain } from "react-icons/fa";

const skills = [
  { name: "Python", icon: <SiPython />, color: "from-yellow-400 to-yellow-600" },
  { name: "HTML5", icon: <SiHtml5 />, color: "from-orange-400 to-orange-600" },
  { name: "CSS3", icon: <SiCss3 />, color: "from-blue-400 to-blue-600" },
  { name: "JavaScript", icon: <SiJavascript />, color: "from-yellow-300 to-yellow-500" },
  { name: "React", icon: <SiReact />, color: "from-cyan-400 to-cyan-600" },
  { name: "Node.js", icon: <SiNodedotjs />, color: "from-green-500 to-green-700" },
  { name: "MongoDB", icon: <SiMongodb />, color: "from-green-400 to-green-600" },
  { name: "Express.js", icon: <SiExpress />, color: "from-gray-400 to-gray-600" },
  { name: "Data Structures & Algorithms", icon: <FaBrain />, color: "from-pink-400 to-pink-600" },
  { name: "Machine Learning & AI", icon: <SiTensorflow />, color: "from-orange-400 to-orange-600" },
  { name: "Problem-Solving Skills", icon: <FaBrain />, color: "from-purple-400 to-purple-600" },
  { name: "Version Control (Git, GitHub)", icon: <SiGithub />, color: "from-gray-400 to-gray-600" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1 },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center text-white bg-gradient-to-b from-black via-gray-900 to-black w-full px-6 md:px-12 overflow-hidden py-16"
    >
      <motion.h2
        className="text-3xl font-extrabold mb-12 text-center text-indigo-400 select-none"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Skills & Technologies
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 max-w-6xl w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {skills.map(({ name, icon, color }, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center cursor-pointer select-none"
            variants={itemVariants}
            whileHover={{ scale: 1.12, boxShadow: "0 0 15px rgba(99,102,241,0.7)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div
              className={`w-20 h-20 rounded-full bg-gradient-to-tr ${color} flex items-center justify-center
                p-1 shadow-lg animate-pulse`}
            >
              <div className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center text-4xl text-white">
                {icon}
              </div>
            </div>
            <p className="mt-4 text-lg font-semibold text-center">{name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
