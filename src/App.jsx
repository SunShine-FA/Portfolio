import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Routes, Route } from "react-router-dom";
import SplashScreen from "./components/SplashScreen";
import Layout from "./components/Layout";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      <AnimatePresence>
        {showSplash && (
          <SplashScreen onFinish={() => setShowSplash(false)} />
        )}
      </AnimatePresence>

      {!showSplash && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="full-size"
        >
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HeroSection />} />
              <Route path="about" element={<About />} />
              <Route path="education" element={<Education />} />
              <Route path="skills" element={<Skills />} />
              <Route path="experience" element={<Experience />} />
              <Route path="projects" element={<Projects />} />
              <Route path="certifications" element={<Certifications />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        </motion.div>
      )}
    </>
  );
}

export default App;