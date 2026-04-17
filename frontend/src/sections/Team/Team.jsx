import styles from "./Team.module.css";
import useReveal from "../../hooks/useReveal";
import { usePage } from "../../hooks/usePage";

import fallbackImg from "../../assets/bg_hero.avif";

export default function Team() {
  const { sections } = usePage();
  const [ref, visible] = useReveal();

  // 🔥 Récupération section
  const team = sections.find(
    (section) => section.__component === "sections.team"
  );

  // 🔥 FALLBACK COMPLET
  const fallback = {
    label: "Équipe",
    title: "L’expertise au cœur du projet",
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

  const data =
    team && team.items?.length > 0 ? team : fallback;

  // 🔥 Helper image (Strapi Cloud OK)
  const getMediaUrl = (media) => {
    if (!media) return fallbackImg;

    // Strapi Cloud → URL déjà complète
    if (media.url?.startsWith("http")) return media.url;

    // fallback local
    return `${import.meta.env.VITE_API_URL}${media.url}`;
  };

  return (
    <section id="team" className={styles.section}>
      
      {/* LIGNES */}
      <div className={styles.lines}>
        <span />
        <span />
      </div>

      {/* HEADER */}
      <div className={styles.header}>
        <p className="label">{data.label}</p>

        <h2 className={styles.heading}>
          {data.title}
        </h2>
      </div>

      {/* CONTENT */}
      <div
        ref={ref}
        className={`${styles.wrapper} ${
          visible ? styles.show : ""
        }`}
      >
        {data.items.map((member, index) => (
          <div
            key={member.id || index}
            className={`${styles.person} ${
              index % 2 === 0 ? styles.left : styles.right
            }`}
          >
            {/* IMAGE */}
            <div className={styles.image}>
              <img
                src={getMediaUrl(member.photo)}
                alt={member.name}
              />
            </div>

            {/* CARD */}
            <div className={styles.card}>
              <h3>{member.name}</h3>
              <span>{member.role}</span>

              <p>
                {member.description || member.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}