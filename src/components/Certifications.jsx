import { motion } from "framer-motion";

const CERTIFICATIONS = [
  {
    title: "eLearnSecurity Junior Penetration Tester (eJPT)",
    issuer: "INE / eLearnSecurity",
    date: "2024",
    description: "Hands-on certification validating skills in penetration testing, network assessment, web app security, and system exploits.",
  },
  {
    title: "Meta Front-End Developer Certificate",
    issuer: "Meta / Coursera",
    date: "2023",
    description: "Professional certificate training validating expertise in React, UI/UX, version control, and client-side web application deployment.",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "2022",
    description: "Earned accreditation in fundamental web design, including semantic HTML structure, responsive layout principles, and CSS style rules.",
  }
];

function Certifications() {
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
          My Credentials
        </motion.p>
        <motion.h1 className="hero-name mb-20" variants={cardVariants}>
          <span className="name-white">Certifications &</span> <span className="name-purple">Badges</span>
        </motion.h1>

        <div className="grid-container-280">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={idx}
              className="portfolio-card portfolio-card-flex"
              variants={cardVariants}
              whileHover={{ scale: 1.02, borderColor: "rgba(124, 58, 237, 0.6)" }}
            >
              <div>
                <span className="card-issuer">{cert.issuer}</span>
                <h3 className="card-title-medium">{cert.title}</h3>
                <p className="card-description-small">{cert.description}</p>
              </div>
              <div className="card-footer">
                <span className="card-footer-text">{cert.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}

export default Certifications;
