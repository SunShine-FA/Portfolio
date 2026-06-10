import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const splashTexts = [
  "> TAKING YOU TO THE ULTIMATE WEB BY FASEEH\u00A0UR\u00A0REHMAN",
  "> WELCOME VISITOR",
];

const DISPLAY_DURATION = 2800;  // how long each text stays visible
const EXIT_DURATION = 800;       // must match your motion transition duration

function SplashScreen({ onFinish }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (currentIndex < splashTexts.length - 1) {
      // Advance to the next text after DISPLAY_DURATION
      const timer = setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, DISPLAY_DURATION);
      return () => clearTimeout(timer);
    } else {
      // Last text shown — wait, then fade out and call onFinish
      const timer = setTimeout(() => {
        setVisible(false);
        setTimeout(onFinish, EXIT_DURATION);
      }, DISPLAY_DURATION);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, onFinish]);

  return (
    <motion.div
      className="splash-container"
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: EXIT_DURATION / 1000 }}
    >
      <AnimatePresence mode="wait">
        <motion.h1
          key={currentIndex}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}  // exit goes UP, entry comes from below — feels intentional
          transition={{ duration: 0.8 }}
          className="splash-text"
        >
          {splashTexts[currentIndex]}
        </motion.h1>
      </AnimatePresence>
    </motion.div>
  );
}

export default SplashScreen;