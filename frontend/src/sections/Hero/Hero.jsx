import styles from "./Hero.module.css";
import heroFallback from "../../assets/bg_hero.avif";
import logoFallback from "../../assets/logo_white.png";
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

  // ✅ BACKGROUND (nouveau champ)
  const backgroundUrl =
    hero?.background?.url
      ? `${import.meta.env.VITE_API_URL}${hero.background.url}`
      : heroFallback;

  // ✅ LOGO (nouveau champ)
  const logoUrl =
    hero?.logo?.url
      ? `${import.meta.env.VITE_API_URL}${hero.logo.url}`
      : logoFallback;

  return (
    <section id="home" className={styles.hero}>
      
      {/* BACKGROUND */}
      <img
        src={backgroundUrl}
        alt="PALTO background"
        className={styles.bgImage}
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
        <img src={logoUrl} alt="PALTO" className={styles.logo} />

        <h1 className={styles.title}>
          {heroData.title}
        </h1>

        <p>{heroData.subtitle}</p>
      </div>
    </section>
  );
}