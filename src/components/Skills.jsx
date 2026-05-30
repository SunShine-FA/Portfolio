import { motion } from "framer-motion";

const SKILL_CATEGORIES = [
  {
    category: "Programming Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "C/C++", "Python", "HTML5 & CSS3"],
  },
  {
    category: "Libraries & Frameworks",
    skills: ["React.js", "Node.js", "Express.js", "Vite", "Framer Motion", "Tailwind CSS"],
  },
  {
    category: "Tools & Technologies",
    skills: ["Git & GitHub", "Linux (Kali, Ubuntu)", "Burp Suite", "Nmap", "Postman", "MongoDB"],
  },








  
  {
    category: "Cybersecurity",
    skills: [
      "Certified Ethical Hacker (CEH)",
      "Nmap",
      "Wireshark",
      "Burp Suite",
      "Metasploit",
      "Vulnerability Assessment",
      "Penetration Testing",
      "Digital Forensics (Basics)"
    ],
  },
  {
    category: "Networking & System Administration",
    skills: [
      "CCNA",
      "Cisco Packet Tracer",
      "Switching & Routing",
      "Network Troubleshooting",
      "pfSense Firewall",
      "NAT Configuration",
      "Windows",
      "Kali Linux",
      "VMware"
    ],
  },
  {
    category: "Software Development",
    skills: [
      "React.js",
      ".NET Framework",
      "SQL",
      "Web Development",
      "Authentication Systems",
      "CRUD Operations",
      "Database Design",
      "Responsive UI Development"
    ],
  },
  {
    category: "Platforms & Tools",
    skills: [
      "ServiceNow",
      "ITSM Workflows",
      "Workflow Automation",
      "Application Customization",
      "Git & GitHub",
      "MS Office"
    ],
  },
  {
    category: "Professional Skills",
    skills: [
      "Technical Leadership",
      "Problem Solving",
      "Team Collaboration",
      "Communication",
      "Project Coordination",
      "Workshop Delivery",
      "Time Management"
    ],
  },










  {
    category: "Cybersecurity & Networking",
    skills: [
      "CEH",
      "CCNA",
      "Nmap",
      "Wireshark",
      "Burp Suite",
      "Metasploit",
      "pfSense",
      "Cisco Packet Tracer",
      "Switching & Routing",
      "Kali Linux"
    ],
  },
  {
    category: "Full-Stack Development",
    skills: [
      "React.js",
      ".NET Framework",
      "SQL",
      "Web Development",
      "Authentication Systems",
      "CRUD Operations",
      "Database Design",
      "Responsive UI Development"
    ],
  },
  {
    category: "Platforms & Professional Skills",
    skills: [
      "ServiceNow",
      "ITSM",
      "Workflow Automation",
      "Git & GitHub",
      "Technical Leadership",
      "Problem Solving",
      "Teamwork",
      "Communication"
    ],
  }
];

function Skills() {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
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
          My Toolkit
        </motion.p>
        <motion.h1 className="hero-name mb-20" variants={itemVariants}>
          <span className="name-white">Skills &</span> <span className="name-purple">Expertise</span>
        </motion.h1>

        <div className="grid-container-280">
          {SKILL_CATEGORIES.map((cat, index) => (
            <motion.div
              key={index}
              className="portfolio-card"
              variants={itemVariants}
              whileHover={{ scale: 1.01, borderColor: "rgba(124, 58, 237, 0.6)" }}
            >
              <h3 className="skills-category-title">
                {cat.category}
              </h3>
              <div className="skills-badge-container">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skills-badge"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}

export default Skills;
