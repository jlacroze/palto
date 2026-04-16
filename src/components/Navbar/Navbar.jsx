import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [hideNav, setHideNav] = useState(false);

  let lastScrollY = 0;

  const navLinks = [
    { label: "Accueil", id: "home" },
    { label: "À propos", id: "about" },
    { label: "Services", id: "services" },
    { label: "Équipe", id: "team" },
  ];

  // lock scroll menu
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  // scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      setScrolled(currentScroll > 10);

      // 👉 hide only desktop
      if (window.innerWidth >= 768) {
        if (currentScroll > lastScrollY && currentScroll > 100) {
          setHideNav(true); // scroll down
        } else {
          setHideNav(false); // scroll up
        }
      }

      lastScrollY = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // scroll spy
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
    <nav
      className={`
        ${styles.navbar}
        ${scrolled ? styles.scrolled : ""}
        ${hideNav ? styles.hide : ""}
      `}
    >
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
        <div className={styles.menuContent}>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={closeMenu}
              className={active === link.id ? styles.active : ""}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}