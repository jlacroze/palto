import styles from "./About.module.css";
import useReveal from "../../hooks/useReveal";

export default function About() {
  const [ref, visible] = useReveal();

  return (
    <section id="about" className={styles.about}>
      
      {/* cercles */}
      <div className={`${styles.circle} ${styles.circle1}`}></div>
      <div className={`${styles.circle} ${styles.circle2}`}></div>
      <div className={`${styles.circle} ${styles.circleCenter}`}></div>

      <div
        ref={ref}
        className={`${styles.inner} ${
          visible ? "reveal-visible" : "reveal"
        }`}
      >
        <p className="label">Qui sommes-nous</p>

        <h2 className="section-title">
          Une approche stratégique centrée sur l’excellence
        </h2>

        <p className={styles.text}>
          PALTO accompagne les entreprises dans leurs décisions stratégiques.
        </p>

        <p className={styles.text}>
          Une exigence forte, une vision claire, des résultats mesurables.
        </p>
      </div>
    </section>
  );
}