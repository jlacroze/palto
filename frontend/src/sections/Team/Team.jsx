import styles from "./Team.module.css";
import useReveal from "../../hooks/useReveal";
import { usePage } from "../../hooks/usePage";
import { getMediaUrl, getSection } from "../../lib/mediaHelpers";

import photo1 from "../../assets/photo_theau.JPG";
import photo2 from "../../assets/photo_jeremy.jpg";

export default function Team() {
  const { sections } = usePage();
  const [ref, visible] = useReveal();

  const team = getSection(sections, "sections.team");

  const fallback = {
    title: "Notre équipe : L'expertise au cœur du projet",
    items: [
      {
        id: 1,
        photo: photo1,
        name: "Théau Charlier",
        role: "Fondateur & Consultant Legal Ops",
        description:
          "Théau a construit un parcours hybride, à la croisée du droit, du conseil en transformation et de l'innovation. Fort d'expériences dans de grandes entreprises de conseil et Big 4, où il a piloté des programmes de transformation Legal Ops, il accompagne aujourd'hui les cabinets d'avocats et les directions juridiques d'indépendants, de PME et d'ETI dans la structuration et l'optimisation de leurs opérations.",
      },
      {
        id: 2,
        photo: photo2,
        name: "Jérémy Lacroze",
        role: "Lead Tech & Ingénieur développeur",
        description:
          "Spécialisé en transformation digitale et organisation, il structure et optimise les performances. il accompagne aujourd'hui les cabinets d'avocats et les directions juridiques d'indépendants, de PME et d'ETI dans la structuration et l'optimisation de leurs outils et sites internet.",
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
        <h2 className={styles.heading}>{data.title}</h2>
      </div>

      <div
        ref={ref}
        className={`${styles.wrapper} ${visible ? styles.show : ""}`}
      >
        {data.items.map((member, index) => {
          // Fallback indépendant pour chaque membre
          const fallbackImage = index === 0 ? photo1 : photo2;

          return (
            <div
              key={member.id}
              className={`${styles.person} ${
                index % 2 === 0 ? styles.left : styles.right
              }`}
            >
              <div className={styles.image}>
                <img
                  src={getMediaUrl(member.photo) || fallbackImage}
                  alt={member.name}
                />
              </div>

              <div className={styles.card}>
                <h3>{member.name}</h3>
                <span>{member.role}</span>
                <p>{member.description || member.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}