import { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import useReveal from "../../hooks/useReveal";
import heroImage from "../../assets/bg_hero.jpg"; // ⚠️ vérifie le chemin
import logo from "../../assets/logo_white.png";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [ref, visible] = useReveal();

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section id="home" className={styles.hero}>
      {/* BACKGROUND IMAGE */}
      <img
        src={heroImage}
        alt="background"
        className={`${styles.bg} ${loaded ? styles.loaded : ""}`}
        loading="eager"
      />

      {/* DIAGONALE */}
      <div
        className={`${styles.diagonal} ${
          loaded ? styles.diagonalVisible : ""
        }`}
      />

      {/* LIGNES */}
      <div className={styles.lines}>
        <span />
        <span />
        <span />
      </div>

      {/* CONTENT */}
      <div
        ref={ref}
        className={`${styles.content} ${visible ? styles.visible : ""}`}
      >
        <img src={logo} alt="PALTO logo" className={styles.logo} />

        <h1 className={styles.title}>
          Excellence & stratégie
        </h1>
      </div>
    </section>
  );
}