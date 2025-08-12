import React from "react";
import { FaGraduationCap, FaCode, FaRunning } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  const aboutItems = [
    {
      icon: <FaGraduationCap className="text-indigo-400 text-2xl" />,
      title: "Education",
      description:
        "Currently studying Computer Science at BRAC University, building a solid understanding of algorithms, data structures, and software engineering concepts.",
    },
    {
      icon: <FaCode className="text-indigo-400 text-2xl" />,
      title: "Programming Journey",
      description:
        "I started exploring web development with HTML, CSS, and JavaScript. Over time, I expanded my skills to full-stack development using the MERN stack and am now diving into AI and machine learning. I love tackling challenging problems and creating efficient, scalable software solutions.",
    },
    {
      icon: <FaRunning className="text-indigo-400 text-2xl" />,
      title: "Hobbies & Interests",
      description:
        "I value maintaining a healthy balance by staying active through walking and light workouts. I’m enthusiastic about learning new technologies and applying my knowledge to real-world projects, which keeps me inspired and sharp.",
    },
  ];

  return (
    <section className="bg-black text-white py-12 px-6">
      <motion.h2
        className="text-3xl font-bold text-indigo-400 text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {aboutItems.map((item, index) => (
          <motion.div
            key={index}
            className="border border-gray-700 rounded-lg p-6 hover:shadow-lg hover:shadow-indigo-500/20 transition"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="flex items-center gap-3 mb-3">
              {item.icon}
              <h3 className="text-lg font-bold text-indigo-400">{item.title}</h3>
            </div>
            <p className="text-gray-300">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
