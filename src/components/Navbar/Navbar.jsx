import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // bloque le scroll quand menu ouvert
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.inner}>
        <img src={logo} alt="PALTO" className={styles.logo} />

        {/* Desktop */}
        <div className={styles.links}>
          <a href="#">Accueil</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </div>

        {/* Burger */}
        <button
          className={`${styles.burger} ${isOpen ? styles.open : ""}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Overlay */}
      <div
        className={`${styles.overlay} ${isOpen ? styles.show : ""}`}
        onClick={closeMenu}
      />

      {/* Mobile menu */}
      <div className={`${styles.mobileMenu} ${isOpen ? styles.show : ""}`}>
        <a onClick={closeMenu}>Accueil</a>
        <a onClick={closeMenu}>Services</a>
        <a onClick={closeMenu}>Contact</a>
      </div>
    </nav>
  );
}