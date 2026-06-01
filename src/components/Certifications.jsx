import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { createPortal } from "react-dom";

import cehImg from "/src/assets/CEHCertificate.png";
import ccnaImg from "/src/assets/CCNA.jpg";
import cyberSummerImg from "/src/assets/CyberSummer.jpg";
import pfSenseImg from "/src/assets/PFSense.jpg";
import serviceNowImg from "/src/assets/ServiceNow.jpg";
import chamberImg from "/src/assets/Chamber.jpg";
import ethicalHackingImg from "/src/assets/EthicalHackingBasics.jpg";

const CERTIFICATIONS = [
  {
    title: "Certified Ethical Hacker (CEH)",
    issuer: "EC Council, NAVTTC",
    date: "2025",
    description: "Certification No: ECC7149258630",
    image: cehImg,
  },
  {
    title: "Cisco Certified Network Associate (CCNA)",
    issuer: "Technologix, Rawalpindi/Islamabad",
    date: "2024",
    description: "Reference ID: TCN-24/05/CCNA/04",
    image: ccnaImg,
  },
  {
    title: "Cyber Security Summer Short Course",
    issuer: "Aridian Array Software Society, PMAS ARID",
    date: "2024",
    description: "Delivered in collaboration with PMAS ARID Agriculture University.",
    image: cyberSummerImg,
  },
  {
    title: "Firewall Router Design using pfSense",
    issuer: "BIIT, Rawalpindi",
    date: "2024",
    description: "Hands-on implementation and routing configuration using pfSense.",
    image: pfSenseImg,
  },
  {
    title: "ServiceNow – Software Engineering",
    issuer: "BIIT, Rawalpindi",
    date: "2024",
    description: "Training focusing on custom workflows and application development on ServiceNow.",
    image: serviceNowImg,
  },
  {
    title: "Chamber of Cipher",
    issuer: "NaSCon NUCES, Islamabad",
    date: "2024",
    description: "Cryptography and cipher solving competition.",
    image: chamberImg,
  },
  {
    title: "Basics of Ethical Hacking",
    issuer: "BIIT, Rawalpindi",
    date: "2022",
    description: "Introduction to fundamental penetration testing concepts and cybersecurity.",
    image: ethicalHackingImg,
  },
];

function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

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
          <span className="name-white">Certifications &</span>{" "}
          <span className="name-purple">Badges</span>
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
              <div className="card-footer" style={{ justifyContent: "space-between", alignItems: "center" }}>
                <button
                  className="btn-primary"
                  style={{ padding: "0.4rem 1rem", fontSize: "0.82rem", width: "auto" }}
                  onClick={() => setSelectedCert(cert)}
                >
                  View
                </button>
                <span className="card-footer-text">{cert.date}</span>
                
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* MODAL — rendered via portal directly to document.body */}
      {createPortal(
        <AnimatePresence>
          {selectedCert && (
            <>
              {/* Backdrop */}
              <motion.div
                key="backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={() => setSelectedCert(null)}
                style={{
                  position: "fixed",
                  inset: 0,
                  background: "rgba(0,0,0,0.85)",
                  zIndex: 9998,
                  backdropFilter: "blur(4px)",
                }}
              />

              {/* Positioning wrapper */}
              <div
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
                {/* Modal box */}
                <motion.div
                  key="modal"
                  initial={{ opacity: 0, scale: 0.88, y: 40 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.88, y: 40 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  style={{
                    pointerEvents: "all",
                    background: "rgba(13, 15, 26, 0.97)",
                    border: "1px solid rgba(124, 58, 237, 0.4)",
                    borderRadius: "16px",
                    padding: "24px",
                    maxWidth: "90vw",
                    width: "700px",
                    maxHeight: "90vh",
                    overflowY: "auto",
                    boxShadow: "0 0 60px rgba(124, 58, 237, 0.2)",
                  }}
                >
                  {/* Modal header */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px", gap: "1rem" }}>
                    <div>
                      <span className="card-issuer" style={{ marginBottom: "4px" }}>{selectedCert.issuer}</span>
                      <h3 style={{ color: "#fff", fontSize: "1.1rem", fontWeight: 600, lineHeight: 1.4 }}>
                        {selectedCert.title}
                      </h3>
                    </div>
                    <button
                      onClick={() => setSelectedCert(null)}
                      style={{
                        background: "rgba(124,58,237,0.15)",
                        border: "1px solid rgba(124,58,237,0.3)",
                        color: "#fff",
                        borderRadius: "8px",
                        padding: "4px 12px",
                        cursor: "pointer",
                        fontSize: "1.1rem",
                        flexShrink: 0,
                      }}
                    >
                      ✕
                    </button>
                  </div>

                  {/* Certificate image */}
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    style={{
                      width: "100%",
                      borderRadius: "10px",
                      border: "1px solid rgba(124,58,237,0.2)",
                      objectFit: "contain",
                      maxHeight: "65vh",
                    }}
                  />
                </motion.div>
              </div>
            </>
          )}
        </AnimatePresence>,
        document.body   // 👈 renders outside all parent stacking contexts
      )}
    </main>
  );
}

export default Certifications;