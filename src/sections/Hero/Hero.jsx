import { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import useReveal from "../../hooks/useReveal";
import heroImage from "../../assets/bg_hero.jpg";
import logo from "../../assets/logo_white.png";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [ref, visible] = useReveal();

  useEffect(() => {
    setTimeout(() => setLoaded(true), 200);
  }, []);

  return (
    <section
      id="home"
      className={`${styles.hero} ${loaded ? styles.loaded : ""}`}
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* LIGNES ANIMÉES */}
      <div className={styles.lines}>
        <span />
        <span />
        <span />
      </div>

      {/* DIAGONALE */}
      <div className={styles.diagonal}></div>

      {/* CONTENT */}
      <div
        ref={ref}
        className={`${styles.content} ${
          visible ? styles.visible : ""
        }`}
      >
        <img src={logo} alt="PALTO" className={styles.logo} />

        <h1 className={styles.title}>
          Excellence & stratégie
        </h1>
      </div>
    </section>
  );
}