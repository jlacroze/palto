import styles from "./Hero.module.css";
import heroFallback from "../../assets/bg_hero.avif";
import logoFallback from "../../assets/logo_white.avif";
import { usePage } from "../../hooks/usePage";
import { getMediaUrl, getSection } from "../../lib/mediaHelpers";

export default function Hero() {
  const { sections } = usePage();

  const hero = getSection(sections, "sections.hero");

  const fallbackHero = {
    title: "Mettre le numérique au service du juridique",
    subtitle: "",
  };

  const heroData = hero || fallbackHero;

  const backgroundUrl = getMediaUrl(hero?.background, heroFallback);
  const logoUrl = getMediaUrl(hero?.logo, logoFallback);

  return (
    <section id="home" className={styles.hero}>

      <img
        src={backgroundUrl}
        alt="PALTO background"
        className={styles.bgImage}
        loading="eager"
        fetchpriority="high"
        decoding="async"
      />

      <div className={styles.lines}>
        <span />
        <span />
        <span />
      </div>

      <div className={styles.diagonal}></div>

      <div className={styles.content}>
        <img
          src={logoUrl}
          alt="PALTO"
          className={styles.logo}
          loading="eager"
          fetchpriority="high"
          decoding="async"
        />

        <h1 className={styles.title}>{heroData.title}</h1>
        <p className={styles.subtitle}>{heroData.subtitle}</p>
      </div>
    </section>
  );
}
