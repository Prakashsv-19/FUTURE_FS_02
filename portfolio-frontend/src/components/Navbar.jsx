
import { useState } from "react";
import { Menu, X, Code2 } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        <Code2 size={25} />
        <span>Prakash<span className="blue">.</span></span>
      </a>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}
      </div>

      <a href="#contact" className="nav-button">
        Let's Talk
      </a>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        {menuOpen ? <X /> : <Menu />}
      </button>
    </nav>
  );
}

export default Navbar;
