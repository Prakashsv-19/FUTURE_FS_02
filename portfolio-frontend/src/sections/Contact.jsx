
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Send,
  Code2,
} from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/contact`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send message.");
      }

      setStatus({
        type: "success",
        message: "Your message has been sent successfully!",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

    } catch (error) {
      setStatus({
        type: "error",
        message: "Unable to send your message. Please try again.",
      });

      console.error("Contact form error:", error);

    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact section-padding" id="contact">
      <div className="section-heading">
        <p className="section-subtitle">GET IN TOUCH</p>
        <h2>Let's Work <span>Together</span></h2>
        <p>Have an opportunity or a project idea? Feel free to contact me.</p>
      </div>

      <div className="contact-container">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3>Let's connect</h3>

          <p>
            I'm interested in entry-level software development
            opportunities, collaborations and learning experiences.
          </p>

          <div className="contact-detail">
            <Mail size={21} />
            <div>
              <h4>Email</h4>
              <a href="mailto:your-email@example.com">
                your-email@example.com
              </a>
            </div>
          </div>

          <div className="contact-detail">
            <MapPin size={21} />
            <div>
              <h4>Location</h4>
              <p>Tamil Nadu, India</p>
            </div>
          </div>

          <div className="contact-socials">
            <a href="https://github.com/Prakashsv-19" target="_blank" rel="noreferrer">
              <Code2 size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/prakashsv19"
              target="_blank"
              rel="noreferrer"
            >
              <span style={{ fontWeight: "bold" }}>in</span>
            </a>
          </div>
        </motion.div>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              type="text"
              name="subject"
              placeholder="Enter message subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message..."
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          {status.message && (
            <p
              role="status"
              style={{
                color: status.type === "success" ? "#22c55e" : "#ef4444",
                marginBottom: "12px",
              }}
            >
              {status.message}
            </p>
          )}

          <button
            type="submit"
            className="contact-submit"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
            {!loading && <Send size={18} />}
          </button>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
