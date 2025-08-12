import React, { useState } from "react";
import { motion } from "framer-motion";
import project1 from "../../assets/project-1.png";
import project2 from "../../assets/project-2.png";
import project3 from "../../assets/project-3.png";

const projectsData = [
  {
    id: 1,
    name: "LeafyLife",
    image: project1,
    liveLink: "https://leafylife-green.web.app/",
    githubClient:
      "https://github.com/IFTI-KAR/LeafyLife-client-side-A-gardening-lover-s-platform-",
    techStack: "MERN Stack (MongoDB, Express, React, Node.js)",
    description:
      "A gardening lover’s platform that connects users with gardening resources, plant info, and community sharing.",
    challenges: "Integrating real-time chat and ensuring responsive UI across devices.",
    improvements:
      "Add plant disease detection and AI-based gardening tips in future updates.",
  },
  {
    id: 2,
    name: "Blog Site",
    image: project2,
    liveLink: "https://log-web-34782.web.app/",
    githubClient: "https://github.com/IFTI-KAR/blog-site-client-side",
    techStack: "MERN Stack (MongoDB, Express, React, Node.js)",
    description:
      "A personal blog site where users can create, edit, and read blog posts with authentication.",
    challenges: "Managing user authentication and secure content editing.",
    improvements: "Implementing comments and social sharing features next.",
  },
  {
    id: 3,
    name: "Fitness Tracker",
    image: project3,
    liveLink: "https://fitness-tracker-faf6f.web.app/",
    githubClient: "https://github.com/IFTI-KAR/JobStack",
    techStack: "MERN Stack (MongoDB, Express, React, Node.js)",
    description:
      "A fitness tracker app to log workouts, track progress, and plan routines.",
    challenges: "Handling complex state management and data visualization.",
    improvements: "Add AI-driven workout suggestions and diet plans.",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const buttonClasses =
  "px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-lg text-white font-medium shadow-lg transition-colors duration-300 text-center";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="min-h-screen w-full bg-gradient-to-b from-black via-gray-900 to-black text-white
                 px-6 sm:px-12 md:px-24 lg:px-40 xl:px-60 py-8 overflow-x-hidden"
    >
      {/* Section Title */}
      <motion.h2
        className="text-4xl font-bold mb-12 text-center text-indigo-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Projects
      </motion.h2>

      {!selectedProject ? (
        <motion.div
          className="max-w-full grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              className="bg-gray-800 rounded-lg shadow-lg flex flex-col overflow-hidden"
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 20px rgba(99,102,241,0.7)",
              }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <img
                src={project.image}
                alt={project.name}
                className="h-48 w-full object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold mb-4">{project.name}</h3>
                <motion.button
                  onClick={() => setSelectedProject(project)}
                  className={buttonClasses}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View More / Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.div
          className="max-w-4xl mx-auto p-6 bg-gray-900 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
        >
          <motion.button
            onClick={() => setSelectedProject(null)}
            className={`${buttonClasses} mb-6 inline-block`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ← Back to Projects
          </motion.button>

          <h2 className="text-4xl font-bold mb-6">{selectedProject.name}</h2>
          <img
            src={selectedProject.image}
            alt={selectedProject.name}
            className="w-full max-h-96 object-cover rounded-lg mb-6 shadow-lg"
          />

          <p>
            <strong>Main Technology Stack Used:</strong>{" "}
            {selectedProject.techStack}
          </p>
          <p className="my-4">
            <strong>Brief Description:</strong> {selectedProject.description}
          </p>
          <p>
            <strong>Live Project Link:</strong>{" "}
            <a
              href={selectedProject.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 underline"
            >
              {selectedProject.liveLink}
            </a>
          </p>
          <p className="my-4">
            <strong>GitHub Repository Link (Client):</strong>{" "}
            <a
              href={selectedProject.githubClient}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 underline"
            >
              {selectedProject.githubClient}
            </a>
          </p>
          <p className="my-4">
            <strong>Challenges Faced While Developing the Project:</strong>{" "}
            {selectedProject.challenges}
          </p>
          <p>
            <strong>Potential Improvements and Future Plans:</strong>{" "}
            {selectedProject.improvements}
          </p>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;
