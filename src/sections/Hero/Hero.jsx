import styles from "./Hero.module.css";
import useReveal from "../../hooks/useReveal";
import heroImage from "../../assets/bg_hero.jpg";

export default function Hero() {
  const [ref, visible] = useReveal();

  return (
    <section
      id="home"
      className={styles.hero}
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div
        ref={ref}
        className={`${styles.card} ${
          visible ? "reveal-visible" : "reveal"
        }`}
      >
        <p className="label">Cabinet de conseil</p>

        <h1 className={styles.title}>
          Excellence<br />
          & stratégie
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