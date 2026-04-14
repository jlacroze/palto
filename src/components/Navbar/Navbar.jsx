import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  const navLinks = [
    { label: "Accueil", id: "home" },
    { label: "Services", id: "services" },
    { label: "À propos", id: "about" },
    { label: "Équipe", id: "team" },
  ];

  // lock scroll menu
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  // shadow scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // active section (scroll spy FIXED)
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <a href="#home" onClick={closeMenu}>
          <img src={logo} alt="PALTO" className={styles.logo} />
        </a>

        {/* Desktop */}
        <div className={styles.links}>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={active === link.id ? styles.active : ""}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Burger */}
        <button
          className={`${styles.burger} ${isOpen ? styles.open : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`${styles.mobileMenu} ${isOpen ? styles.show : ""}`}>
        
        {/* cercles */}
        <div className={`${styles.circle} ${styles.circle1}`}></div>
        <div className={`${styles.circle} ${styles.circle2}`}></div>
        <div className={`${styles.circle} ${styles.circle3}`}></div>

        <div className={styles.menuContent}>
          {navLinks.map((link, index) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={closeMenu}
              className={active === link.id ? styles.active : ""}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}