import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import logoImg from "/src/assets/faseeh.webp";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Education", path: "/education" },
  { name: "Skills", path: "/skills" },
  { name: "Experience", path: "/experience" },
  { name: "Projects", path: "/projects" },
  { name: "Certifications", path: "/certifications" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="nav-logo">
        <NavLink to="/" onClick={closeMenu}>
          <img src={logoImg} alt="Logo" className="nav-logo-img" />
        </NavLink>
      </div>

      {/* Desktop nav links */}
      <ul className="nav-links nav-links-desktop">
        {NAV_LINKS.map((link) => (
          <li key={link.name}>
            <NavLink
              to={link.path}
              className={({ isActive }) => (isActive ? "active" : "")}
              end={link.path === "/"}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <button className="download-cv-btn download-cv-desktop">Download CV</button>

      {/* Hamburger button — visible only on mobile */}
      <button
        className="hamburger-btn"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <span className={`hamburger-line ${menuOpen ? "open" : ""}`} />
        <span className={`hamburger-line ${menuOpen ? "open" : ""}`} />
        <span className={`hamburger-line ${menuOpen ? "open" : ""}`} />
      </button>

      {/* Mobile slide-down menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <ul className="mobile-menu-links">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) => (isActive ? "active" : "")}
                    end={link.path === "/"}
                    onClick={closeMenu}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            <button className="download-cv-btn mobile-cv-btn">Download CV</button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
