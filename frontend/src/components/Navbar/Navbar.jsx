import { useState, useEffect, useRef } from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.avif";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [hideNav, setHideNav] = useState(false);

  const lastScrollY = useRef(0);

  const navLinks = [
    { label: "Accueil", id: "home" },
    { label: "À propos", id: "about" },
    { label: "Services", id: "services" },
    { label: "Équipe", id: "team" },
    { label: "Contact", id: "contact" },
  ];

  // lock scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  // hide/show navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      setScrolled(currentScroll > 10);

      if (window.innerWidth >= 768) {
        if (
          currentScroll > lastScrollY.current &&
          currentScroll > 100
        ) {
          setHideNav(true);
        } else {
          setHideNav(false);
        }
      }

      lastScrollY.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 SCROLL SPY VERSION UX (TOP OFFSET)
useEffect(() => {
  const handleScroll = () => {
    const sections = document.querySelectorAll("section");

    let closestSection = null;
    let minDistance = Infinity;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const distance = Math.abs(rect.top);

      if (distance < minDistance) {
        minDistance = distance;
        closestSection = section.id;
      }
    });

    if (closestSection) {
      setActive(closestSection);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
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
                className={`${styles.link} ${
                  active === link.id ? styles.linkActive : ""
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Burger */}
          <button
            className={`${styles.burger} ${isOpen ? styles.open : ""}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`${styles.mobileMenu} ${isOpen ? styles.show : ""}`}>
        <div className={styles.lines}>
          <span className={styles.line} />
          <span className={styles.line} />
          <span className={styles.line} />
        </div>

        <div className={styles.menuContent}>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={closeMenu}
              className={`${styles.link} ${
                active === link.id ? styles.linkActive : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}