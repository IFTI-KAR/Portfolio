import React from "react";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const Contactme = () => {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center p-6">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side - Contact Info */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Email */}
          <motion.div
            className="flex items-center gap-4"
            whileHover={{ scale: 1.05 }}
          >
            <FaEnvelope className="text-indigo-400 text-3xl" />
            <div>
              <p className="font-bold">Email</p>
              <p className="text-gray-300">iftikar.rahaman@g.bracu.ac.bd</p>
            </div>
          </motion.div>

          {/* Phone */}
          <motion.div
            className="flex items-center gap-4"
            whileHover={{ scale: 1.05 }}
          >
            <FaPhone className="text-indigo-400 text-3xl" />
            <div>
              <p className="font-bold">Phone</p>
              <p className="text-gray-300">+880 1818904360</p>
            </div>
          </motion.div>

          {/* WhatsApp */}
          <motion.div
            className="flex items-center gap-4"
            whileHover={{ scale: 1.05 }}
          >
            <FaWhatsapp className="text-indigo-400 text-3xl" />
            <div>
              <p className="font-bold">WhatsApp</p>
              <p className="text-gray-300">+880 1818904360</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-indigo-400 mb-6 text-center md:text-left">
            Contact Me
          </h2>
          <motion.form
            className="bg-gray-900 p-6 rounded-lg space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <motion.input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded bg-gray-800 text-white outline-none focus:ring-2 focus:ring-indigo-400"
              required
              whileFocus={{ scale: 1.02 }}
            />
            <motion.input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded bg-gray-800 text-white outline-none focus:ring-2 focus:ring-indigo-400"
              required
              whileFocus={{ scale: 1.02 }}
            />
            <motion.textarea
              placeholder="Your Message"
              className="w-full p-3 h-32 rounded bg-gray-800 text-white outline-none focus:ring-2 focus:ring-indigo-400"
              required
              whileFocus={{ scale: 1.02 }}
            ></motion.textarea>
            <motion.button
              type="submit"
              className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold p-3 rounded transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contactme;
