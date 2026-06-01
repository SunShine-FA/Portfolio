import { motion } from "framer-motion";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

const CONTACT_INFO = [
  {
    id: "email",
    label: "EMAIL",
    value: "hello@yourname.com",
    href: "mailto:hello@yourname.com",
    Icon: FiMail,
  },
  {
    id: "phone",
    label: "PHONE",
    value: "+1 (234) 567-8901",
    href: "tel:+12345678901",
    Icon: FiPhone,
  },
  {
    id: "linkedin",
    label: "LINKEDIN",
    value: "linkedin.com/in/yourname",
    href: "https://linkedin.com/in/yourname",
    Icon: FaLinkedinIn,
  },
];

function Contact() {
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
        className="hero-content content-max-700"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p className="hero-greeting" variants={itemVariants}>
          Let's Connect
        </motion.p>

        <motion.h1 className="hero-name mb-15" variants={itemVariants}>
          <span className="name-white">Contact</span>{" "}
          <span className="name-purple">Me</span>
        </motion.h1>

        <motion.p className="hero-bio contact-bio" variants={itemVariants}>
          Have a project in mind or just want to chat? Reach out directly —
          I'll get back to you as soon as possible!
        </motion.p>

        <motion.div className="contact-cards" variants={itemVariants}>
          {CONTACT_INFO.map(({ id, label, value, href, Icon }) => (
            
              key={id}
              href={href}
              className="contact-card"
              target={id === "linkedin" ? "_blank" : undefined}
              rel={id === "linkedin" ? "noopener noreferrer" : undefined}
            >
              <span className="contact-card-icon">
                <Icon size={18} />
              </span>
              <span className="contact-card-text">
                <span className="contact-card-label">{label}</span>
                <span className="contact-card-value">{value}</span>
              </span>
              <span className="contact-card-arrow">↗</span>
            </a>
          ))}
        </motion.div>
      </motion.div>
    </main>
  );
}

export default Contact;