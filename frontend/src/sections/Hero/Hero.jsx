import styles from "./Hero.module.css";
import heroImage from "../../assets/bg_hero.avif";
import logo from "../../assets/logo_white.png";
import { usePage } from "../../hooks/usePage";

export default function Hero() {
  const { sections } = usePage();

  const hero = sections.find(
    (section) => section.__component === "sections.hero"
  );

  // 🔥 FALLBACK
  const fallbackHero = {
    title: "Excellence & stratégie",
    subtitle: "Votre partenaire digital",
  };

  const heroData = hero || fallbackHero;

  // 🔥 IMAGE DYNAMIQUE (FIX PROD ⚠️)
  const imageUrl =
    hero?.image?.url
      ? `${import.meta.env.VITE_API_URL}${hero.image.url}`
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