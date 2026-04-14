import styles from "./Hero.module.css";
import useReveal from "../../hooks/useReveal";

export default function Hero() {
  const [ref, visible] = useReveal();

  return (
    <section id="home" className={styles.hero}>
      
      {/* cercles animés */}
      <div className={`${styles.circle} ${styles.circle1}`}></div>
      <div className={`${styles.circle} ${styles.circle2}`}></div>
      <div className={`${styles.circle} ${styles.circle3}`}></div>

      <div
        ref={ref}
        className={`${styles.content} ${
          visible ? "reveal-visible" : "reveal"
        }`}
      >
        <p className="label ">Cabinet de conseil</p>

        <h1 className="section-title">
          Excellence<br />
          <span className={styles.highlight}>& stratégie</span>
        </h1>

        <p className={styles.subtitle}>
          Nous accompagnons les entreprises dans leurs décisions stratégiques
          avec exigence, précision et vision long terme.
        </p>

        <button className="button-primary">Prendre contact</button>
      </div>
    </section>
  );
}