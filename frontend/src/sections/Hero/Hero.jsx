import styles from "./Hero.module.css";
import heroImage from "../../assets/bg_hero.avif";
import logo from "../../assets/logo_white.png";

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      
      {/* IMAGE LCP */}
      <img
        src={heroImage}
        alt="PALTO background"
        className={styles.bgImage}
        loading="eager"
        fetchpriority="high"
      />

      {/* LIGNES */}
      <div className={styles.lines}>
        <span />
        <span />
        <span />
      </div>

      {/* DIAGONALE */}
      <div className={styles.diagonal}></div>

      {/* CONTENT */}
      <div className={styles.content}>
        <img src={logo} alt="PALTO" className={styles.logo} />

        <h1 className={styles.title}>
          Excellence & stratégie
        </h1>
      </div>
    </section>
  );
}