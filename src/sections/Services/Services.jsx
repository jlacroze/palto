import styles from "./Services.module.css";
import useReveal from "../../hooks/useReveal";
import bgImage from "../../assets/bg_hero.jpg";

const services = [
  {
    title: "Conseil stratégique",
    desc: "Accompagnement dans vos prises de décision et structuration de votre vision.",
  },
  {
    title: "Transformation digitale",
    desc: "Optimisation de vos outils et process pour une performance durable.",
  },
  {
    title: "Pilotage de projet",
    desc: "Gestion rigoureuse et suivi de vos projets à fort enjeu.",
  },
  {
    title: "Audit & analyse",
    desc: "Diagnostic précis pour identifier vos leviers de croissance.",
  },
];

export default function Services() {
  const [ref, visible] = useReveal();

  const handleMouseMove = (e, el) => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = (y / rect.height - 0.5) * -12;
    const rotateY = (x / rect.width - 0.5) * 12;

    el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;

    el.style.setProperty("--x", `${x}px`);
    el.style.setProperty("--y", `${y}px`);
  };

  const resetTilt = (el) => {
    el.style.transform = `rotateX(0) rotateY(0) scale(1)`;
  };

  return (
    <section id="services" className={styles.section}>
      
      {/* IMAGE FULL RIGHT */}
      <div
        className={styles.bgImage}
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* HEADER */}
      <div className={styles.header}>
        <p className="label">Expertises</p>
        <h2 className={styles.heading}>
          Des solutions pensées<br />pour durer
        </h2>
        <p className={styles.subtitle}>
          Une approche structurée pour accompagner votre croissance
        </p>
      </div>

      {/* GRID */}
      <div
        ref={ref}
        className={`${styles.grid} ${visible ? styles.show : ""}`}
      >
        {services.map((service, index) => (
          <div
            key={index}
            className={styles.card}
            style={{ transitionDelay: `${index * 0.12}s` }}
            onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
            onMouseLeave={(e) => resetTilt(e.currentTarget)}
          >
            <div className={styles.cardInner}>
              <h3>{service.title}</h3>

              <p className={styles.desc}>
                {service.desc}
              </p>

              <span className={styles.link}>
                Découvrir
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}