import styles from "./Services.module.css";
import useReveal from "../../hooks/useReveal";

export default function Services() {
  const [ref, visible] = useReveal();

  return (
    <section id="services" className={styles.services}>
      <div
        ref={ref}
        className={`${styles.inner} ${
          visible ? "reveal-visible" : "reveal"
        }`}
      >
        <p className="label">Nos expertises</p>

        <h2 className="section-title">
          Des solutions adaptées à vos enjeux
        </h2>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Conseil stratégique</h3>
            <p>Accompagnement stratégique global.</p>
          </div>

          <div className={styles.card}>
            <h3>Transformation digitale</h3>
            <p>Modernisation des processus et outils.</p>
          </div>

          <div className={styles.card}>
            <h3>Performance</h3>
            <p>Optimisation des résultats et pilotage.</p>
          </div>
        </div>
      </div>
    </section>
  );
}