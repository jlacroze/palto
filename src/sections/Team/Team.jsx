import styles from "./Team.module.css";
import useReveal from "../../hooks/useReveal";

import member1 from "../../assets/bg_hero.jpg";
import member2 from "../../assets/bg_hero.jpg";

const team = [
  {
    name: "Jean Dupont",
    role: "Fondateur & Consultant",
    image: member1,
  },
  {
    name: "Marie Martin",
    role: "Responsable Stratégie",
    image: member2,
  },
];

export default function Team() {
  const [ref, visible] = useReveal();

  return (
    <section id="team" className={styles.section}>
      
      {/* HEADER */}
      <div className={styles.header}>
        <p className="label">Équipe</p>
        <h2 className={styles.heading}>
          Les talents derrière<br />PALTO
        </h2>
      </div>

      {/* BACKGROUND LINES */}
      <div className={styles.lines}>
        <span className={styles.line} />
        <span className={styles.line} />
        <span className={styles.line} />
      </div>

      {/* TEAM */}
      <div
        ref={ref}
        className={`${styles.grid} ${visible ? styles.show : ""}`}
      >
        {team.map((member, index) => (
          <div
            key={index}
            className={styles.card}
            style={{ transitionDelay: `${index * 0.2}s` }}
          >
            <div className={styles.imageWrapper}>
              <img src={member.image} alt={member.name} />
              <div className={styles.overlay} />
            </div>

            <div className={styles.content}>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}