import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const NAV_LINKS = ["Home", "About", "Skills", "Experience", "Projects", "Certifications", "Contact"];

const TYPED_ROLES = ["Software Engineer", "Ethical Hacker", "Full Stack Developer"];

function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  // Typewriter effect
  useEffect(() => {
    const currentRole = TYPED_ROLES[roleIndex];
    let timeout;

    if (typing) {
      if (displayed.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayed(currentRole.slice(0, displayed.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, 45);
      } else {
        setRoleIndex((prev) => (prev + 1) % TYPED_ROLES.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="portfolio-wrapper">
      {/* Decorative background blobs */}
      <div className="bg-blob blob-1" />
      <div className="bg-blob blob-2" />

      {/* Floating dots */}
      <div className="dot dot-1" />
      <div className="dot dot-2" />
      <div className="dot dot-3" />

      {/* ── NAVBAR ── */}
      <motion.nav
        className="navbar"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="nav-logo"></div>
        <ul className="nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className={link === "Home" ? "active" : ""}>
                {link}
              </a>
            </li>
          ))}
        </ul>
        <button className="download-cv-btn">Download CV</button>
      </motion.nav>

      {/* ── HERO ── */}
      <main className="hero-section">
        {/* Left content */}
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="hero-greeting" variants={itemVariants}>
            Hi, I'm
          </motion.p>

          <motion.h1 className="hero-name" variants={itemVariants}>
            <span className="name-white">Faseeh</span>{" "}
            <span className="name-purple">ur Rehman</span>
          </motion.h1>

          <motion.div className="hero-role" variants={itemVariants}>
            {displayed}
            <span className="cursor">|</span>
          </motion.div>

          <motion.p className="hero-bio" variants={itemVariants}>
            I build modern, responsive and user-friendly web applications with clean code and great
            user experience.
          </motion.p>

          <motion.div className="hero-buttons" variants={itemVariants}>
            <button className="btn-primary">View Projects</button>
            <button className="btn-outline">Contact Me</button>
          </motion.div>

          <motion.div className="social-icons" variants={itemVariants}>
            {/* LinkedIn */}
            <a href="#" className="social-link" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            {/* GitHub */}
            <a href="#" className="social-link" aria-label="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
              </svg>
            </a>
            {/* Email */}
            <a href="#" className="social-link" aria-label="Email">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
            {/* Instagram */}
            <a href="#" className="social-link" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </motion.div>
        </motion.div>

        {/* Right — profile image */}
        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <div className="profile-glow-ring" />
          <div className="profile-circle">
            {/* Replace src with your actual image */}
            <img
              src="src/assets/faseeh.webp"
              alt="Faseeh ur Rehman"
              className="profile-img"
            />
          </div>
        </motion.div>
      </main>
    </div>
  );
}

export default HeroSection;
