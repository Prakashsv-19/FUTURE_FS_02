
import { motion } from "framer-motion";
import { ArrowRight, Code2 } from "lucide-react";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="hero-tag"
        >
          Welcome to my portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Hi, I'm Prakash.
          <br />
          <span>Java Full Stack Developer</span>
        </motion.h1>

        <p className="hero-description">
          I am an aspiring software developer interested in building
          modern web applications using Java and web technologies.
        </p>

        <a href="#projects" className="primary-button">
          Explore My Work <ArrowRight size={18} />
        </a>

        <div className="hero-socials">
          <Code2 size={24} />
          <span>Building. Learning. Creating.</span>
        </div>
      </div>

      <div className="hero-visual">
        <div className="code-card">
          <Code2 size={50} />
          <h3>Java Full Stack</h3>
          <p>Turning ideas into applications.</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
