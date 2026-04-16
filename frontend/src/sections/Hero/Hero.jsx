import { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import heroImage from "../../assets/bg_hero.avif";
import logo from "../../assets/logo_white.png";
import { fetchPage } from "../../lib/api";

export default function Hero() {
  const [hero, setHero] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetchPage();

      if (!res) return; // 🔥 évite crash en prod

      const sections = res.data?.[0]?.sections || [];

      const heroData = sections.find(
        (section) => section.__component === "sections.hero"
      );

      setHero(heroData);
    };

    loadData();
  }, []);

  // 🔥 FALLBACK (PROD SAFE)
  const fallbackHero = {
    title: "Excellence & stratégie",
    subtitle: "Votre partenaire digital",
  };

  const heroData = hero || fallbackHero;

  // 🔥 IMAGE DYNAMIQUE + FALLBACK
  const imageUrl =
    hero?.image?.url
      ? `http://localhost:1337${hero.image.url}`
      : heroImage;

  return (
    <section id="home" className={styles.hero}>
      
      {/* IMAGE LCP */}
      <img
        src={imageUrl}
        alt="PALTO background"
        className={styles.bgImage}
        loading="eager"
        fetchpriority="high"
      />

      {/* LIGNES */}
      <div className={styles.lines}>
        <span />
        <span />
        <span />
      </div>

      {/* DIAGONALE */}
      <div className={styles.diagonal}></div>

      {/* CONTENT */}
      <div className={styles.content}>
        <img src={logo} alt="PALTO" className={styles.logo} />

        <h1 className={styles.title}>
          {heroData.title}
        </h1>

        <p>{heroData.subtitle}</p>
      </div>
    </section>
  );
}