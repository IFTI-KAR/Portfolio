// src/components/Hero.jsx
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import profile_image from "../../assets/profile picture.jpeg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center text-white bg-gradient-to-b from-black via-gray-900 to-black w-full 
                 px-6 sm:px-12 md:px-24 lg:px-40 xl:px-60
                 overflow-hidden"
    >
      {/* Left Content */}
      <motion.div
        className="flex-1 text-center md:text-left space-y-6 max-w-lg"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.p
          className="text-gray-400 uppercase tracking-widest text-xs sm:text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Hey there, I’m
        </motion.p>

        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <span className="text-indigo-400">Iftikar Rahaman</span>
        </motion.h1>

        <motion.h2
          className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-300"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          MERN Stack Developer
        </motion.h2>

        <motion.p
          className="text-gray-400 max-w-md sm:max-w-lg mx-auto md:mx-0 text-sm sm:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          I’m a developer and a CSE student who loves turning ideas into reality through clean,
          efficient, and visually appealing web applications. My mission? To
          build digital products that not only work but leave a lasting
          impression.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 justify-center md:justify-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-lg text-white font-medium shadow-lg transition-colors duration-300 text-center"
          >
            Download CV
          </a>
          <div className="flex justify-center sm:justify-start space-x-6 text-2xl sm:text-xl">
            {[
              { icon: <FaGithub />, link: "https://github.com/IFTI-KAR" },
              { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/iftikar-rahaman91/" },
              { icon: <FaFacebook />, link: "https://www.facebook.com/share/1CvrUiMG9y" },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className="hover:text-indigo-400 transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Link to ${social.link}`}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="flex-1 flex justify-center mt-10 md:mt-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <motion.img
          src={profile_image}
          alt="Iftikar Rahaman"
          className="w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover rounded-full border-4 border-gray-800 shadow-[0_0_30px_rgba(99,102,241,0.5)]"
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ type: "spring", stiffness: 200 }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
