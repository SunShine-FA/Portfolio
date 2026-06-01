import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
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
  const imgRef = useRef(null);
  const scaleRef = useRef(1);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedCert]);

  // Image zoom via mouse wheel and pinch-to-zoom (touch)
  useEffect(() => {
    if (!selectedCert) return;

    // Small delay to ensure the img element is mounted in the portal
    const timeout = setTimeout(() => {
      const img = imgRef.current;
      if (!img) return;

      // Reset scale whenever a new cert opens
      scaleRef.current = 1;
      img.style.transform = "scale(1)";
      img.style.transformOrigin = "center center";

      // --- Mouse wheel zoom ---
      const onWheel = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const delta = e.deltaY > 0 ? 0.9 : 1.1;
        scaleRef.current = Math.min(Math.max(scaleRef.current * delta, 1), 5);
        img.style.transform = `scale(${scaleRef.current})`;
      };

      // --- Pinch-to-zoom (touch) ---
      let lastDist = null;

      const getTouchDist = (touches) => {
        const dx = touches[0].clientX - touches[1].clientX;
        const dy = touches[0].clientY - touches[1].clientY;
        return Math.hypot(dx, dy);
      };

      const onTouchMove = (e) => {
        if (e.touches.length !== 2) return;
        e.preventDefault();
        e.stopPropagation();
        const dist = getTouchDist(e.touches);
        if (lastDist !== null) {
          const ratio = dist / lastDist;
          scaleRef.current = Math.min(Math.max(scaleRef.current * ratio, 1), 5);
          img.style.transform = `scale(${scaleRef.current})`;
        }
        lastDist = dist;
      };

      const onTouchEnd = () => {
        lastDist = null;
      };

      img.addEventListener("wheel", onWheel, { passive: false });
      img.addEventListener("touchmove", onTouchMove, { passive: false });
      img.addEventListener("touchend", onTouchEnd);

      // Cleanup
      return () => {
        img.removeEventListener("wheel", onWheel);
        img.removeEventListener("touchmove", onTouchMove);
        img.removeEventListener("touchend", onTouchEnd);
      };
    }, 50);

    return () => clearTimeout(timeout);
  }, [selectedCert]);

  // Reset zoom when modal closes
  const handleClose = () => {
    scaleRef.current = 1;
    if (imgRef.current) {
      imgRef.current.style.transform = "scale(1)";
    }
    setSelectedCert(null);
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
              <div
                className="card-footer"
                style={{ justifyContent: "space-between", alignItems: "center" }}
              >
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
                onClick={handleClose}
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100vw",
                  height: "100vh",
                  background: "rgba(0,0,0,0.85)",
                  zIndex: 9998,
                  backdropFilter: "blur(4px)",
                  WebkitBackdropFilter: "blur(4px)",
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
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: "16px",
                      gap: "1rem",
                    }}
                  >
                    <div>
                      <span className="card-issuer" style={{ marginBottom: "4px" }}>
                        {selectedCert.issuer}
                      </span>
                      <h3
                        style={{
                          color: "#fff",
                          fontSize: "1.1rem",
                          fontWeight: 600,
                          lineHeight: 1.4,
                        }}
                      >
                        {selectedCert.title}
                      </h3>
                    </div>
                    <button
                      onClick={handleClose}
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

                  {/* Zoom hint */}
                  <p
                    style={{
                      color: "rgba(148,163,184,0.7)",
                      fontSize: "0.75rem",
                      marginBottom: "10px",
                      textAlign: "center",
                      letterSpacing: "0.3px",
                    }}
                  >
                    Scroll or pinch to zoom the image
                  </p>

                  {/* Zoomable image container */}
                  <div
  style={{
    overflow: "hidden",
    borderRadius: "10px",
    border: "1px solid rgba(124,58,237,0.2)",
    height: "65vh",        // ← change maxHeight to height
    width: "100%",         // ← add this
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "zoom-in",
  }}
>
  <img
    ref={imgRef}
    src={selectedCert.image}
    alt={selectedCert.title}
    style={{
      maxWidth: "100%",      // ← change width to maxWidth
      maxHeight: "100%",     // ← add this
      display: "block",
      objectFit: "contain",
      transition: "transform 0.1s ease",
      transformOrigin: "center center",
      userSelect: "none",
      touchAction: "none",
    }}
  />
</div>

                  {/* Zoom reset button */}
                  <div style={{ display: "flex", justifyContent: "center", marginTop: "12px" }}>
                    <button
                      onClick={() => {
                        scaleRef.current = 1;
                        if (imgRef.current) {
                          imgRef.current.style.transform = "scale(1)";
                        }
                      }}
                      style={{
                        background: "rgba(124,58,237,0.12)",
                        border: "1px solid rgba(124,58,237,0.3)",
                        color: "#cbd5e1",
                        borderRadius: "8px",
                        padding: "4px 16px",
                        cursor: "pointer",
                        fontSize: "0.8rem",
                        fontFamily: "inherit",
                      }}
                    >
                      Reset Zoom
                    </button>
                  </div>
                </motion.div>
              </div>
            </>
          )}
        </AnimatePresence>,
        document.body
      )}
    </main>
  );
}

export default Certifications;
