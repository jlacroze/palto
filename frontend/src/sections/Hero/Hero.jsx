import styles from "./Hero.module.css";
import heroFallback from "../../assets/bg_hero.avif";
import logoFallback from "../../assets/logo_white.avif";
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

  // 🔥 HELPER IMAGE
  const getMediaUrl = (media, fallback) => {
    if (!media) return fallback;

    if (media.formats?.medium?.url) return media.formats.medium.url;
    if (media.formats?.small?.url) return media.formats.small.url;

    if (media.url) return media.url;

    return fallback;
  };

  // ✅ IMAGE UNIQUE (pas de double render)
  const backgroundUrl = getMediaUrl(hero?.background, heroFallback);
  const logoUrl = getMediaUrl(hero?.logo, logoFallback);

  return (
    <section id="home" className={styles.hero}>
      
      {/* BACKGROUND */}
      <img
        src={backgroundUrl}
        alt="PALTO background"
        className={styles.bgImage}
        loading="eager"
        fetchpriority="high"
        decoding="async"
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
          loading="eager"
          fetchpriority="high"
          decoding="async"
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