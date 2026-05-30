import { motion } from "framer-motion";

const PROJECTS_DATA = [
  {
    title: "SecureShare",
    description: "An end-to-end encrypted web app for secure file storage and link sharing. Features secure credentials management and session tracking.",
    tags: ["React", "Node.js", "Cryptography", "MongoDB"],
    link: "#",
  },
  {
    title: "VibeMusic",
    description: "A gorgeous, responsive music streaming UI featuring smooth transitions, audio visualizer, playlist management, and responsive layouts.",
    tags: ["React.js", "Framer Motion", "CSS Variables"],
    link: "#",
  },
  {
    title: "PortScan Network Utility",
    description: "A fast, multi-threaded port scanner and host discovery tool designed to find open ports and identify software banners on target nodes.",
    tags: ["Python", "Socket Programming", "Cyber Security"],
    link: "#",
  }
];

function Projects() {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <main className="hero-section subpage-section">
      <motion.div
        className="hero-content content-max-900"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p className="hero-greeting" variants={cardVariants}>
          My Creations
        </motion.p>
        <motion.h1 className="hero-name mb-20" variants={cardVariants}>
          <span className="name-white">Recent</span> <span className="name-purple">Projects</span>
        </motion.h1>

        <div className="grid-container-280">
          {PROJECTS_DATA.map((proj, idx) => (
            <motion.div
              key={idx}
              className="portfolio-card portfolio-card-flex project-card-height"
              variants={cardVariants}
              whileHover={{ scale: 1.02, borderColor: "rgba(124, 58, 237, 0.6)" }}
            >
              <div>
                <h3 className="project-card-title">{proj.title}</h3>
                <p className="project-card-desc">{proj.description}</p>
              </div>
              <div>
                <div className="project-tags-container">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="project-tag"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={proj.link}
                  className="project-link"
                >
                  View Project <span className="text-purple">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}

export default Projects;
