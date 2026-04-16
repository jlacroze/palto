import styles from "./About.module.css";
import useReveal from "../../hooks/useReveal";
import image from "../../assets/bg_hero.jpg";

export default function About() {
  const [ref, visible] = useReveal();

  return (
    <section id="about" className={styles.section}>
      
      {/* ===== TOP TEXT ===== */}
      <div
        ref={ref}
        className={`${styles.topInner} ${
          visible ? styles.show : ""
        }`}
      >
        <h2 className={styles.heading}>
          Une vision durable<br />et stratégique
        </h2>

        <div className={styles.intro}>
          <p className={styles.textLine}>
            PALTO accompagne les entreprises dans leurs décisions stratégiques
            en combinant expertise métier et vision long terme.
          </p>

          <p className={styles.textLine}>
            Nous structurons et pilotons vos projets avec exigence afin de
            garantir des résultats concrets et durables.
          </p>
        </div>
      </div>

      {/* ===== VISUAL ===== */}
      <div className={styles.visual}>
        
        {/* IMAGE */}
        <div className={styles.imageWrapper}>
          <img
            src={image}
            alt="PALTO expertise"
            className={`${styles.image} ${
              visible ? styles.imageVisible : ""
            }`}
          />
        </div>

        {/* CARD */}
        <div
          className={`${styles.card} ${
            visible ? styles.cardVisible : ""
          }`}
        >
          <p className="label">PALTO</p>

          <h3 className={styles.big}>
            Conseil<br />Stratégique
          </h3>

          <button className={styles.link}>
            En savoir plus
          </button>
        </div>
      </div>
    </section>
  );
}