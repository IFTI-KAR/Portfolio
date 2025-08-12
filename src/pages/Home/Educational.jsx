import React from "react";
import { motion } from "framer-motion";
import bracu_logo from "../../assets/bracu_logo_12-0-2022.png";

const Educational = () => {
  return (
    <motion.section
      id="education"
      className="min-h-screen w-full bg-gradient-to-b from-black via-gray-900 to-black px-8 py-24 flex flex-col items-center overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Section Title */}
      <motion.h2
        className="text-3xl font-extrabold text-indigo-500 mb-20 tracking-wide text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Educational Qualifications
      </motion.h2>

      {/* Education Card */}
      <motion.div
        className="flex flex-col md:flex-row items-center w-full max-w-3xl mx-auto bg-gray-800 bg-opacity-80 rounded-xl p-10 shadow-xl gap-8 md:gap-12"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
      >
        <img
          src={bracu_logo}
          alt="BRAC University Logo"
          className="w-32 h-32 md:w-40 md:h-40 object-contain rounded-lg shadow-lg"
        />
        <div className="text-center md:text-left max-w-xl">
          <h3 className="text-4xl font-semibold text-white mb-4">
            BRAC University
          </h3>
          <p className="text-indigo-400 font-semibold text-xl mb-3">
            Bachelor's degree, Computer Science and Engineering
          </p>
          <p className="text-gray-300 text-lg">2022 - 2026</p>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Educational;
