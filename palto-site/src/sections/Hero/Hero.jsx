import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />

      <div className={styles.content}>
        <p className="label">Cabinet de conseil</p>

        <h1>
          Excellence<br />
          & stratégie
        </h1>

        <p className={styles.subtitle}>
          Nous accompagnons les entreprises dans leurs décisions les plus
          stratégiques avec exigence et précision.
        </p>

        <button className="button-primary">Prendre contact</button>
      </div>
    </section>
  );
}