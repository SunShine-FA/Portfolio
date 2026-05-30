import { motion } from "framer-motion";

function About() {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
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
        <motion.p className="hero-greeting" variants={itemVariants}>
          Get To Know Me
        </motion.p>
        <motion.h1 className="hero-name mb-15" variants={itemVariants}>
          <span className="name-white">About</span> <span className="name-purple">Me</span>
        </motion.h1>

        <motion.p className="hero-bio about-bio" variants={itemVariants}>
          I am a Software Engineer and Certified Ethical Hacker (CEH) with a passion for building secure, scalable, and high-performance digital solutions. My expertise spans Full-Stack Development, Cybersecurity, Networking, and IT Service Management. With hands-on experience in React.js, .NET Framework, SQL, ServiceNow, and security assessment tools, I focus on developing reliable applications while maintaining strong security standards. I am committed to continuous learning, innovation, and solving real-world challenges through technology.
        </motion.p>

        <div className="grid-container-250">
          <motion.div
            className="portfolio-card"
            variants={itemVariants}
            whileHover={{ scale: 1.02, borderColor: "rgba(124, 58, 237, 0.6)" }}
          >
            <h3 className="about-card-title">
              <span className="text-purple">💻</span> Full-Stack Development
            </h3>
            <p className="card-description-small">
              Experienced in developing modern web applications using React.js, .NET Framework, and SQL. Skilled in designing responsive user interfaces, implementing secure backend systems, and building scalable solutions with authentication, database integration, and efficient workflows.
            </p>
          </motion.div>

          <motion.div
            className="portfolio-card"
            variants={itemVariants}
            whileHover={{ scale: 1.02, borderColor: "rgba(124, 58, 237, 0.6)" }}
          >
            <h3 className="about-card-title">
              <span className="text-purple">🛡️</span> Cybersecurity & Ethical Hacking
            </h3>
            <p className="card-description-small">
              Certified Ethical Hacker (CEH) with practical experience in vulnerability assessment, network security, penetration testing, and firewall configuration. Proficient with industry-standard tools including Nmap, Wireshark, Burp Suite, and Metasploit to identify and mitigate security risks.
            </p>
          </motion.div>

          <motion.div
            className="portfolio-card"
            variants={itemVariants}
            whileHover={{ scale: 1.02, borderColor: "rgba(124, 58, 237, 0.6)" }}
          >
            <h3 className="about-card-title">
              <span className="text-purple">⚙️ </span> Software Engineering
            </h3>
            <p className="card-description-small">
              Applying software engineering principles, networking concepts, and system design methodologies to create efficient and maintainable solutions. Focused on problem-solving, performance optimization, clean architecture, and secure software development practices.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}

export default About;
