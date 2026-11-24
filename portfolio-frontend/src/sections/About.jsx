
import { motion } from "framer-motion";

function About() {
  return (
    <section className="about section-padding" id="about">
      <div className="section-heading">
        <p className="section-subtitle">GET TO KNOW ME</p>
        <h2>About <span>Me</span></h2>
        <p>A little introduction about my journey and goals.</p>
      </div>

      <div className="about-container">
        <motion.div
          className="about-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3>Who am I?</h3>

          <p>
            I'm Prakash, an aspiring Java Full Stack Developer
            and Information Technology student passionate about
            building useful and user-friendly web applications.
          </p>

          <p>
            I enjoy learning new technologies, solving problems
            and turning ideas into practical software solutions.
            I'm continuously improving my development skills
            through personal and collaborative projects.
          </p>

          <p>
            My current focus is on Java, Spring Boot, React,
            REST APIs and database management.
          </p>
        </motion.div>

        <motion.div
          className="education-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="education-icon">🎓</div>

          <p className="section-subtitle">MY EDUCATION</p>

          <h3>Bachelor of Technology</h3>

          <h4>Information Technology</h4>

          <p>University College of Engineering, Tiruchirappalli</p>

          <div className="education-details">
            <span>Anna University</span>
            <span>2023 – 2027</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
