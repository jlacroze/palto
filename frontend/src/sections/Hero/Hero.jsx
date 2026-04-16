import styles from "./Hero.module.css";
import heroFallback from "../../assets/bg_hero.avif";
import logoFallback from "../../assets/logo_white.png";
import { usePage } from "../../hooks/usePage";

export default function Hero() {
  const { sections } = usePage();

  const hero = sections.find(
    (section) => section.__component === "sections.hero"
  );

  // 🔥 FALLBACK DATA
  const fallbackHero = {
    title: "Excellence & stratégie",
    subtitle: "Votre partenaire digital",
  };

  const heroData = hero || fallbackHero;

  // 🔥 HELPER IMAGE (gère tous les cas)
  const getMediaUrl = (media, fallback) => {
    if (!media) return fallback;

    // priorité aux formats optimisés
    if (media.formats?.medium?.url) return media.formats.medium.url;
    if (media.formats?.small?.url) return media.formats.small.url;

    // fallback original
    if (media.url) return media.url;

    return fallback;
  };

  // ✅ BACKGROUND
  const backgroundUrl = getMediaUrl(hero?.background, heroFallback);

  // ✅ LOGO
  const logoUrl = getMediaUrl(hero?.logo, logoFallback);

  return (
    <section id="home" className={styles.hero}>
      
      {/* BACKGROUND */}
      <img
        src={backgroundUrl}
        alt="PALTO background"
        className={styles.bgImage}
        loading="eager"
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
        <img
          src={logoUrl}
          alt="PALTO"
          className={styles.logo}
        />

        <h1 className={styles.title}>
          {heroData.title}
        </h1>

        <p className={styles.subtitle}>
          {heroData.subtitle}
        </p>
      </div>
    </section>
  );
}