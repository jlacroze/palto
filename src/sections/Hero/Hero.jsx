import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.content}>
        <p className={`${styles.fadeUp} ${styles.delay1} label`}>
          Cabinet de conseil
        </p>

        <h1 className={`${styles.fadeUp} ${styles.delay2}`}>
          Excellence<br />
          <span className={styles.highlight}>& stratégie</span>
        </h1>

        <p className={`${styles.fadeUp} ${styles.delay3} ${styles.subtitle}`}>
          Nous accompagnons les entreprises dans leurs décisions stratégiques
          avec exigence, précision et vision long terme.
        </p>

        <button className={`${styles.fadeUp} ${styles.delay4} button-primary`}>
          Prendre contact
        </button>
      </div>
    </section>
  );
}