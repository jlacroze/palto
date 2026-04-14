import styles from "./Team.module.css";

export default function Team() {
  return (
    <section id="team" className={styles.team}>
      <div className={styles.inner}>
        <p className="label">Équipe</p>

        <h2>Des experts engagés à vos côtés</h2>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.avatar}></div>
            <h3>Jean Dupont</h3>
            <p>Fondateur & Consultant senior</p>
          </div>

          <div className={styles.card}>
            <div className={styles.avatar}></div>
            <h3>Marie Martin</h3>
            <p>Consultante stratégie</p>
          </div>

          <div className={styles.card}>
            <div className={styles.avatar}></div>
            <h3>Lucas Bernard</h3>
            <p>Expert transformation digitale</p>
          </div>
        </div>
      </div>
    </section>
  );
}