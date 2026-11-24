
import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Programming Languages",
    skills: ["Java", "JavaScript", "SQL"],
  },
  {
    title: "Frontend Development",
    skills: ["HTML", "CSS", "React.js"],
  },
  {
    title: "Backend Development",
    skills: ["Java", "Spring Boot", "REST APIs"],
  },
  {
    title: "Tools & Technologies",
    skills: ["Git", "GitHub", "MySQL", "VS Code"],
  },
];

function Skills() {
  return (
    <section className="skills section-padding" id="skills">
      <div className="section-heading">
        <p className="section-subtitle">WHAT I WORK WITH</p>
        <h2>Technical <span>Skills</span></h2>
        <p>Technologies I'm learning and using in my development journey.</p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <motion.div
            className="skill-card"
            key={group.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3>{group.title}</h3>

            <div className="skill-list">
              {group.skills.map((skill) => (
                <span className="skill-tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
