import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const splashTexts = [
  "> Initializing Faseeh.dev...",
  "> Loading Projects...",
  "> Compiling Skills...",
  "> Fetching Experience...",
  "> Welcome, Visitor.",
];

function SplashScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="splash-container">
      <AnimatePresence mode="wait">
        <motion.h1
          key={currentIndex}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
          className="splash-text"
        >
          {splashTexts[currentIndex]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}

export default SplashScreen;