import styles from "./Team.module.css";
import useReveal from "../../hooks/useReveal";
import { usePage } from "../../hooks/usePage";
import { getMediaUrl, getSection } from "../../lib/mediaHelpers";
import fallbackImg from "../../assets/bg_hero.avif";

export default function Team() {
  const { sections } = usePage();
  const [ref, visible] = useReveal();

  const team = getSection(sections, "sections.team");

  const fallback = {
    label: "Équipe",
    title: "L'expertise au cœur du projet",
    items: [
      {
        id: 1,
        name: "Jean Dupont",
        role: "Fondateur",
        description:
          "Expert en stratégie et pilotage de projets complexes, il accompagne les entreprises dans leurs décisions clés.",
      },
      {
        id: 2,
        name: "Marie Martin",
        role: "Responsable stratégie",
        description:
          "Spécialisée en transformation digitale et organisation, elle structure et optimise les performances.",
      },
    ],
  };

  const data = team && team.items?.length > 0 ? team : fallback;

  return (
    <section id="team" className={styles.section}>

      <div className={styles.lines}>
        <span />
        <span />
      </div>

      <div className={styles.header}>
        <p className="label">{data.label}</p>
        <h2 className={styles.heading}>{data.title}</h2>
      </div>

      <div
        ref={ref}
        className={`${styles.wrapper} ${visible ? styles.show : ""}`}
      >
        {data.items.map((member, index) => (
          <div
            key={member.id}
            className={`${styles.person} ${
              index % 2 === 0 ? styles.left : styles.right
            }`}
          >
            <div className={styles.image}>
              <img
                src={getMediaUrl(member.photo, fallbackImg)}
                alt={member.name}
              />
            </div>

            <div className={styles.card}>
              <h3>{member.name}</h3>
              <span>{member.role}</span>
              <p>{member.description || member.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
