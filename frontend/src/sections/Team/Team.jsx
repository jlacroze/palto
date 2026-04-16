import styles from "./Team.module.css";
import useReveal from "../../hooks/useReveal";

import member1 from "../../assets/bg_hero.avif";
import member2 from "../../assets/bg_hero.avif";

export default function Team() {
  const [ref, visible] = useReveal();

  return (
    <section id="team" className={styles.section}>
      
      {/* LIGNES */}
      <div className={styles.lines}>
        <span />
        <span />
      </div>

      {/* HEADER */}
      <div className={styles.header}>
        <p className="label">Équipe</p>
        <h2 className={styles.heading}>
          L’expertise au cœur<br />du projet
        </h2>
      </div>

      {/* CONTENT */}
      <div
        ref={ref}
        className={`${styles.wrapper} ${
          visible ? styles.show : ""
        }`}
      >
        {/* PERSONNE 1 */}
        <div className={`${styles.person} ${styles.left}`}>
          
          <div className={styles.image}>
            <img src={member1} alt="Jean Dupont" />
          </div>

          <div className={styles.card}>
            <h3>Jean Dupont</h3>
            <span>Fondateur</span>
            <p>
              Expert en stratégie et pilotage de projets complexes,
              il accompagne les entreprises dans leurs décisions clés.
            </p>
          </div>
        </div>

        {/* PERSONNE 2 */}
        <div className={`${styles.person} ${styles.right}`}>
          
          <div className={styles.image}>
            <img src={member2} alt="Marie Martin" />
          </div>

          <div className={styles.card}>
            <h3>Marie Martin</h3>
            <span>Responsable stratégie</span>
            <p>
              Spécialisée en transformation digitale et organisation,
              elle structure et optimise les performances.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}