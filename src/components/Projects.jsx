import { motion } from "framer-motion";

const PROJECTS_DATA = [

  {
    title: "Rental Property Management System",
    description: "A comprehensive property rental management platform inspired by Airbnb, featuring landlord property listings, tenant property discovery and rental workflows, admin-controlled property approvals, and user management functionalities.",
    tags: ["React.js", ".Net Framework", "SQL"],
  },

  {
    title: "Chatting Application",
    description: "A WhatsApp-inspired real-time chat application that supports instant messaging, image sharing, and video sharing through a clean and responsive user interface.",
    tags: ["React.js", "CSS Variables", "Firebase"],
  },

  {
    title: "Cyber Security Awareness Platform",
    description: "A cybersecurity awareness platform that helps users understand common cyber threats, security best practices, and online safety through interactive educational content.",
    tags: ["HTML", "CSS", "Javascript"],
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
                
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}

export default Projects;
