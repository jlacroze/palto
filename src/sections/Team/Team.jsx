import styles from "./Team.module.css";
import useReveal from "../../hooks/useReveal";

export default function Team() {
  const [ref, visible] = useReveal();

  return (
    <section
      id="team"
      ref={ref}
      className={`${styles.team} ${
        visible ? "reveal-visible" : "reveal"
      }`}
    >
      <div className={styles.inner}>
        <p className="label">Équipe</p>

        <h2>Des experts engagés</h2>

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