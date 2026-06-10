import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { createPortal } from "react-dom";
import cvFile from "../../CV.pdf";
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
  const [showCVModal, setShowCVModal] = useState(false);

  const openCVModal = () => setShowCVModal(true);
  const closeCVModal = () => setShowCVModal(false);

  return (
    <>
      <motion.nav
        className="navbar"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="nav-logo">
          <div>
            <img src={logoImg} alt="Logo" className="nav-logo-img" />
          </div>
        </div>

        {/* Nav links (horizontal scrolling on mobile) */}
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

        <button className="download-cv-btn" onClick={openCVModal}>
          Download CV
        </button>
      </motion.nav>

      {/* CV Modal rendered via Portal — outside the navbar entirely */}
      {createPortal(
        <AnimatePresence>
          {showCVModal && (
            <>
              {/* Backdrop */}
              <motion.div
                key="backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={closeCVModal}
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100vw",
                  height: "100vh",         // viewport height is enough since body scroll is locked
                  background: "rgba(0,0,0,0.85)",
                  zIndex: 9998,
                  backdropFilter: "blur(4px)",
                  WebkitBackdropFilter: "blur(4px)",   // Safari fix
                }}
              />

              {/* Modal */}
              <motion.div
                key="modal"
                initial={{ opacity: 0, scale: 0.88, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.88, y: 40 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                style={{
                  position: "fixed",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 9999,
                  pointerEvents: "none",
                }}
              >
                <div
                  className="cv-modal"
                  onClick={(e) => e.stopPropagation()}
                  style={{ pointerEvents: "auto" }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
                    <h3 style={{ color: "#fff", margin: 0 }}>Curriculum Vitae</h3>
                    <button
                      onClick={closeCVModal}
                      style={{
                        background: "rgba(124,58,237,0.15)",
                        border: "1px solid rgba(124,58,237,0.3)",
                        color: "#fff",
                        borderRadius: "8px",
                        padding: "4px 12px",
                        cursor: "pointer",
                      }}
                    >
                      ✕
                    </button>
                  </div>
                  <embed
                    src={cvFile}
                    type="application/pdf"
                    style={{ width: "100%", height: "85vh", borderRadius: "8px" }}
                  />

                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.body  // ← renders directly into <body>, escaping the navbar
      )}
    </>
  );
}

export default Navbar;