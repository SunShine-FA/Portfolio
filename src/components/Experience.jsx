import { motion } from "framer-motion";

const EXPERIENCES = [
  {
    role: "Computer  Science Teacher",
    company: "Air Foundation School and College, Jinnah Garden, Islamabad",
    duration: "Sep 2025 – Present",
    points: [
      "Teaching Computer Science to students from Grade 7 to 2nd Year.",
      "Conducting practical lab sessions focused on programming, MS Office, internet technologies and computer fundamentals.",
      "Guiding students in software applications, digital literacy, and basic computer troubleshooting.",
      "Preparing lesson plans, practical assignments, quizzes, and examinations aligned with academic objectives.",
      "Promoting an interactive learning environment through practical demonstrations and real-world applications of computing concepts."
    ],
  },
  {
    role: "President",
    company: "BIIT Information and Cyber Security Society, BIIT Rawalpindi",
    duration: "Sep 2023 – July 2025",
    points: [
      "Led the Cyber Society’s vision, strategy, and growth, aligning with institutional goals.",
      "Organized cybersecurity seminars, workshops, and campus-wide hackathons.",
      "Conducted cybersecurity awareness sessions and hands-on training for 50+ students.",
      "Mentored team members and coordinated event management activities.",
      "Promoted cybersecurity research, collaboration, and real-world problem-solving."
    ],
  },
  {
    role: "Teacher Assistant",
    company: "Barani Institute of Information Technology, 6th Road, Rawalpindi",
    duration: "Feb 2023 – May 2025",
    points: [
      "Assisted in teaching network and system administration courses.",
      "Supported students with technical queries and lab assignments.",
      "Gained hands-on experience with networking equipment and troubleshooting."
    ],
  },
  {
    role: "Customer Sales Representative",
    company: "MARS BPO",
    duration: "Jul 2024",
    points: [
      "Communicated with customers through outbound calls to promote products and services.",
      "Handled customer inquiries and provided personalized solutions to improve customer satisfaction."
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
