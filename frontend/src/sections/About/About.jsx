import { useEffect, useState } from "react";
import styles from "./About.module.css";
import useReveal from "../../hooks/useReveal";
import { usePage } from "../../hooks/usePage";
import { getMediaUrl, getSection } from "../../lib/mediaHelpers";
import imageFallback from "../../assets/about_img.avif";

export default function About() {
  const { sections } = usePage();
  const [ref, visible] = useReveal();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const about = getSection(sections, "sections.about");

  const fallbackAbout = {
    title: "Une transformation stratégique et durable",
    text1:
      "Chez PALTO, nous cherchons avant tout à vous proposer un service sur mesure en fonction de vos besoins.   Nous analysons, structurons, optimisons et déployons des outils et solutions ciblées afin que vous puissiez retrouver de l’efficacité opérationnelle dans vos tâches quotidiennes.",
    text2:
      "Au-delà de la simple recommandation, nous nous engageons à vos côtés dans la mise en œuvre opérationnelle. Notre objectif est simple : vous permettre de retrouver de l'efficacité opérationnelle dans vos tâches quotidiennes, de redonner du sens et de la fluidité au travail de vos équipes, et de vous concentrer pleinement sur ce qui fait la véritable valeur ajoutée de votre activité.",
    cardTitle: "Conseil Stratégique",
  };

  const aboutData = about || fallbackAbout;
  const imageUrl = getMediaUrl(about?.image, imageFallback);

  return (
    <section id="about" className={styles.section}>

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

      <div
        ref={ref}
        className={`${styles.topInner} ${visible ? styles.show : ""}`}
      >
        <h2 className={styles.heading}>{aboutData.title}</h2>

        <div className={styles.intro}>
          <p className={styles.textLine}>{aboutData.text1}</p>
          <p className={styles.textLine}>{aboutData.text2}</p>
        </div>
      </div>

      <div className={styles.visual}>
        <div className={styles.imageWrapper}>
          <img
            src={imageUrl}
            alt="PALTO expertise"
            className={`${styles.image} ${visible ? styles.imageVisible : ""}`}
          />
        </div>

        <div className={`${styles.card} ${visible ? styles.cardVisible : ""}`}>
          <h3 className={styles.big}>{aboutData.cardTitle}</h3>
        </div>
      </div>
    </section>
  );
}
