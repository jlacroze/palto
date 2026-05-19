import styles from "./Services.module.css";
import useReveal from "../../hooks/useReveal";
import { usePage } from "../../hooks/usePage";
import { getMediaUrl, getSection } from "../../lib/mediaHelpers";
import bgFallback from "../../assets/bg_hero.avif";

export default function Services() {
  const { sections } = usePage();
  const [ref, visible] = useReveal();

  const servicesSection = getSection(sections, "sections.services");

  const fallback = {
    title: "Des solutions pensées pour durer",
    subtitle: "Une approche structurée pour accompagner votre croissance",
    items: [
      {
        id: 1,
        title: "P",
        desc: "Priorisation Stratégique - Aligner la direction juridique avec les enjeux business",
      },
      {
        id: 2,
        title: "A",
        desc: "Architecture des Processus - Structurer les workflows et clarifier les responsabilités",
      },
      {
        id: 3,
        title: "L",
        desc: "Leverage Technologique - Déployer efficacement des outils LegalTech & IA",
      },
      {
        id: 4,
        title: "T",
        desc: "Tracking & Pilotage de la Performance - Mettre en place des indicateurs et une gouvernance claire",
      },
      {
        id: 5,
        title: "O",
        desc: "Operational Excellence - Optimiser durablement les pratiques quotidiennes",
      },
    ],
  };

  const data =
    servicesSection && servicesSection.items?.length > 0
      ? servicesSection
      : fallback;

  const bgImage = getMediaUrl(data.background, bgFallback);

  const handleMouseMove = (e, el) => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = (y / rect.height - 0.5) * -10;
    const rotateY = (x / rect.width - 0.5) * 10;
    el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    el.style.setProperty("--x", `${x}px`);
    el.style.setProperty("--y", `${y}px`);
  };

  const resetTilt = (el) => {
    el.style.transform = `rotateX(0) rotateY(0) scale(1)`;
  };

  return (
    <section id="services" className={styles.section}>

      <div className={styles.lines}>
        <span />
        <span />
      </div>

      <div
        className={styles.bgImage}
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      <div className={styles.header}>
        <h2 className={styles.heading}>{data.title}</h2>
        <p className={styles.subtitle}>{data.subtitle}</p>
      </div>

      <div
        ref={ref}
        className={`${styles.grid} ${visible ? styles.show : ""}`}
      >
        {data.items?.map((service, index) => (
          <div
            key={service.id}
            className={styles.card}
            style={{ transitionDelay: `${index * 0.12}s` }}
            onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
            onMouseLeave={(e) => resetTilt(e.currentTarget)}
          >
            <div className={styles.cardInner}>
              <h3>{service.title}</h3>
              <p className={styles.desc}>{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
