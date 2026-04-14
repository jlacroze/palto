import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.inner}>
        <p className="label">Qui sommes-nous</p>

        <h2>Une approche stratégique centrée sur l’excellence</h2>

        <p className={styles.text}>
          PALTO accompagne les entreprises dans leurs décisions les plus
          structurantes. Nous intervenons à la croisée de la stratégie,
          de la transformation et de la performance opérationnelle.
        </p>

        <p className={styles.text}>
          Notre approche repose sur une compréhension fine des enjeux,
          une exigence élevée et une exécution rigoureuse.
        </p>
      </div>
    </section>
  );
}