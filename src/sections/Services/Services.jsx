import styles from "./Services.module.css";

export default function Services() {
  return (
    <section className={styles.services}>
      <div className={styles.inner}>
        <p className="label">Nos expertises</p>

        <h2>Des solutions adaptées à vos enjeux</h2>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Conseil stratégique</h3>
            <p>
              Accompagnement dans la définition et la mise en œuvre de vos
              orientations stratégiques.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Transformation digitale</h3>
            <p>
              Optimisation de vos processus et intégration des technologies
              innovantes.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Performance opérationnelle</h3>
            <p>
              Amélioration continue de vos performances et pilotage des
              indicateurs clés.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}