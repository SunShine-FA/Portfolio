  import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
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
  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="nav-logo">
        <img src={logoImg} alt="Logo" className="nav-logo-img" />
      </div>
      <ul className="nav-links">
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
      <button className="download-cv-btn">Download CV</button>
    </motion.nav>
  );
}

export default Navbar;
