import { motion } from "framer-motion";

const EDUCATION_DATA = [
  {
    degree: "Bachelor of Science in Software Engineering",
    school: "Barani Institute of Information Technology, Rawalpindi",
    duration: "2022 - 2026",
    description: "Studied software engineering, database systems, computer networking, software architecture, artificial intelligence, and project management. Enhanced practical expertise through full-stack development, cybersecurity projects, technical leadership, and hands-on industry-focused learning.",
  },
  {
    degree: "Intermediate in Pre-Engineering",
    school: "Punjab Group of Colleges (Quaid Campus) Fazaia, Rawalpindi",
    duration: "2020 - 2022",
    description: "Built a strong foundation in Mathematics, Physics, and analytical problem-solving. Developed logical reasoning and engineering concepts that later supported advanced studies in software engineering and cybersecurity.",
  },
  {
    degree: "Matriculation",
    school: "Sir Syed Public School, Tipu Road Rawalpindi",
    duration: "2009 - 2020",
    description: "Completed secondary education with a focus on Biology and General Science while developing critical thinking, discipline, and a strong academic foundation for future technical and engineering studies.",
  }
];

function Education() {
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
          My Academic Journey
        </motion.p>
        <motion.h1 className="hero-name mb-20" variants={cardVariants}>
          <span className="name-white">My</span> <span className="name-purple">Education</span>
        </motion.h1>

        <div className="education-timeline timeline-container">
          {EDUCATION_DATA.map((edu, idx) => (
            <motion.div
              key={idx}
              className="portfolio-card"
              variants={cardVariants}
              whileHover={{ scale: 1.01, borderColor: "rgba(124, 58, 237, 0.6)" }}
            >
              <div className="card-header">
                <h3 className="card-title">{edu.degree}</h3>
                <span className="card-duration">{edu.duration}</span>
              </div>
              <h4 className="card-subtitle">{edu.school}</h4>
              <p className="card-description">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}

export default Education;
