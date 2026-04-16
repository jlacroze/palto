import { useEffect, useState } from "react";
import styles from "./About.module.css";
import useReveal from "../../hooks/useReveal";
import { usePage } from "../../hooks/usePage";
import image from "../../assets/bg_hero.avif";

export default function About() {
  const { sections } = usePage();
  const [ref, visible] = useReveal();
  const [scrollY, setScrollY] = useState(0);

  // 🔥 SCROLL EFFECT
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 GET DATA FROM STRAPI
  const about = sections.find(
    (section) => section.__component === "sections.about"
  );

  // 🔥 FALLBACK
  const fallbackAbout = {
    title: "Une vision durable et stratégique",
    text1:
      "PALTO accompagne les entreprises dans leurs décisions stratégiques en combinant expertise métier et vision long terme.",
    text2:
      "Nous structurons et pilotons vos projets avec exigence afin de garantir des résultats concrets et durables.",
  };

  const aboutData = about || fallbackAbout;

  // 🔥 IMAGE DYNAMIQUE
  const imageUrl =
    about?.image?.url
      ? `${import.meta.env.VITE_API_URL}${about.image.url}`
      : image;

  return (
    <section id="about" className={styles.section}>
      
      {/* ===== LIGNES LUXE ===== */}
      <div className={styles.lines}>
        <span
          className={styles.line}
          style={{ transform: `translateX(${scrollY * 0.03}px)` }}
        />
        <span
          className={styles.line}
          style={{ transform: `translateX(${scrollY * 0.05}px)` }}
        />
        <span
          className={styles.line}
          style={{ transform: `translateX(${scrollY * 0.02}px)` }}
        />
      </div>

      {/* ===== TOP TEXT ===== */}
      <div
        ref={ref}
        className={`${styles.topInner} ${
          visible ? styles.show : ""
        }`}
      >
        <h2 className={styles.heading}>
          {aboutData.title}
        </h2>

        <div className={styles.intro}>
          <p className={styles.textLine}>
            {aboutData.text1}
          </p>

          <p className={styles.textLine}>
            {aboutData.text2}
          </p>
        </div>
      </div>

      {/* ===== VISUAL ===== */}
      <div className={styles.visual}>
        <div className={styles.imageWrapper}>
          <img
            src={imageUrl}
            alt="PALTO expertise"
            className={`${styles.image} ${
              visible ? styles.imageVisible : ""
            }`}
          />
        </div>

        <div
          className={`${styles.card} ${
            visible ? styles.cardVisible : ""
          }`}
        >
          <p className="label">PALTO</p>

          <h3 className={styles.big}>
            Conseil<br />Stratégique
          </h3>
        </div>
      </div>
    </section>
  );
}