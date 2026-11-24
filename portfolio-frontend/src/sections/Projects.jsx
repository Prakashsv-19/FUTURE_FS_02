
import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";

const projects = [
  {
    title: "Cinila AI",
    category: "AI-Powered Web Application",
    description:
      "An AI-powered cinematic story analysis platform that helps filmmakers analyze scripts, organize scenes and generate cinematic shot divisions.",
    technologies: ["React", "Java", "Spring Boot", "OpenRouter API"],
    status: "In Development",
    github: "",
    demo: "",
  },
  {
    title: "AptiArena",
    category: "Learning & Assessment Platform",
    description:
      "A collaborative aptitude learning platform featuring quizzes, daily challenges, XP points, coins and leaderboard functionality.",
    technologies: ["React", "JavaScript", "Node.js", "MongoDB"],
    status: "Developed",
    github: "",
    demo: "",
  },
  {
    title: "Employee Management System",
    category: "Full Stack Web Application",
    description:
      "A web application designed to manage employee records with frontend integration, backend REST APIs and database connectivity.",
    technologies: ["React", "Java", "Spring Boot", "MySQL"],
    status: "Developed",
    github: "",
    demo: "",
  },
];

function Projects() {
  return (
    <section className="projects section-padding" id="projects">
      <div className="section-heading">
        <p className="section-subtitle">MY RECENT WORK</p>
        <h2>Featured <span>Projects</span></h2>
        <p>Some applications I've worked on during my development journey.</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.article
            className="project-card"
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <div className="project-top">
              <div className="project-icon">
                <Code2 size={28} />
              </div>

              <span className="project-status">{project.status}</span>
            </div>

            <p className="project-category">{project.category}</p>

            <h3>{project.title}</h3>

            <p className="project-description">
              {project.description}
            </p>

            <div className="project-tech">
              {project.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <div className="project-links">
              {project.github ? (
                <a href={project.github} target="_blank" rel="noreferrer">
                  <Code2 size={18} /> GitHub
                </a>
              ) : (
                <span className="project-link-disabled">
                  GitHub link coming soon
                </span>
              )}

              {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer">
                  <ExternalLink size={18} /> Live Demo
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
