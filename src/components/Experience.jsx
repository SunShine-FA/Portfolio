import { motion } from "framer-motion";

const EXPERIENCES = [
  {
    role: "Freelance Full-Stack Developer",
    company: "Upwork / Self-Employed",
    duration: "2023 - Present",
    points: [
      "Designed and developed highly responsive portfolio websites and web tools.",
      "Built custom web architectures using React.js, Node.js, and MongoDB.",
      "Integrated secure authentication protocols and database security measures.",
    ],
  },
  {
    role: "Cyber Security Trainee & Open Source Contributor",
    company: "GitHub / Community",
    duration: "2022 - Present",
    points: [
      "Performed audit reports and vulnerability assessments for web applications.",
      "Participated in capture the flag (CTF) challenges to hone penetration testing skills.",
      "Contributed code fixes and documentation to public repositories.",
    ],
  }
];

function Experience() {
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
        className="hero-content content-max-800"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p className="hero-greeting" variants={cardVariants}>
          Professional History
        </motion.p>
        <motion.h1 className="hero-name mb-20" variants={cardVariants}>
          <span className="name-white">Work</span> <span className="name-purple">Experience</span>
        </motion.h1>

        <div className="timeline-container">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={idx}
              className="portfolio-card"
              variants={cardVariants}
              whileHover={{ scale: 1.01, borderColor: "rgba(124, 58, 237, 0.6)" }}
            >
              <div className="card-header">
                <h3 className="card-title">{exp.role}</h3>
                <span className="card-duration">{exp.duration}</span>
              </div>
              <h4 className="card-subtitle">{exp.company}</h4>
              <ul className="card-list">
                {exp.points.map((pt, pIdx) => (
                  <li key={pIdx} className="card-list-item">{pt}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}

export default Experience;
