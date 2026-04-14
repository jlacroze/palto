import styles from "./Team.module.css";
import useReveal from "../../hooks/useReveal";

export default function Team() {
  const [ref, visible] = useReveal();

  return (
    <section id="team" className={styles.team}>
      
      {/* cercles */}
      <div className={`${styles.circle} ${styles.circle1}`}></div>
      <div className={`${styles.circle} ${styles.circle2}`}></div>
      <div className={`${styles.circle} ${styles.circleCenter1}`}></div>
      <div className={`${styles.circle} ${styles.circleCenter2}`}></div>

      <div
        ref={ref}
        className={`${styles.inner} ${
          visible ? "reveal-visible" : "reveal"
        }`}
      >
        <p className="label">Équipe</p>

        <h2 className="section-title">
          Des experts engagés
        </h2>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.avatar}></div>
            <h3>Jean Dupont</h3>
            <p>Consultant senior</p>
          </div>

          <div className={styles.card}>
            <div className={styles.avatar}></div>
            <h3>Marie Martin</h3>
            <p>Stratégie</p>
          </div>

          <div className={styles.card}>
            <div className={styles.avatar}></div>
            <h3>Lucas Bernard</h3>
            <p>Transformation digitale</p>
          </div>
        </div>
      </div>
    </section>
  );
}