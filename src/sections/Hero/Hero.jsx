import styles from "./Hero.module.css";
import useReveal from "../../hooks/useReveal";

export default function Hero() {
  const [ref, visible] = useReveal();

  return (
    <section
      id="home"
      ref={ref}
      className={`${styles.hero} ${
        visible ? "reveal-visible" : "reveal"
      }`}
    >
      <div className={styles.content}>
        <p className="label">Cabinet de conseil</p>

        <h1>
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