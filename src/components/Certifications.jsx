import { motion } from "framer-motion";

const CERTIFICATIONS = [
  {
    title: "Certified Ethical Hacker (CEH)",
    issuer: "EC Council, NAVTTC",
    date: "2025",
    description: "Certification No: ECC7149258630",
  },
  {
    title: "Cisco Certified Network Associate (CCNA)",
    issuer: "Technologix, Rawalpindi/Islamabad",
    date: "2024",
    description: "Reference ID: TCN-24/05/CCNA/04",
  },
  {
    title: "Cyber Security Summer Short Course",
    issuer: "Aridian Array Software Society, PMAS ARID",
    date: "2024",
    description: "Delivered in collaboration with PMAS ARID Agriculture University.",
  },
  {
    title: "Firewall Router Design using pfSense",
    issuer: "BIIT, Rawalpindi",
    date: "2024",
    description: "Hands-on implementation and routing configuration using pfSense.",
  },
  {
    title: "ServiceNow – Software Engineering",
    issuer: "BIIT, Rawalpindi",
    date: "2024",
    description: "Training focusing on custom workflows and application development on ServiceNow.",
  },
  {
    title: "Chamber of Cipher",
    issuer: "NaSCon NUCES, Islamabad",
    date: "2024",
    description: "Cryptography and cipher solving competition.",
  },
  {
    title: "Basics of Ethical Hacking",
    issuer: "BIIT, Rawalpindi",
    date: "2023",
    description: "Introduction to fundamental penetration testing concepts and cybersecurity.",
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
