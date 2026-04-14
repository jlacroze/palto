import styles from "./About.module.css";
import useReveal from "../../hooks/useReveal";

export default function About() {
  const [ref, visible] = useReveal();

  return (
    <section
      id="about"
      ref={ref}
      className={`${styles.about} ${
        visible ? "reveal-visible" : "reveal"
      }`}
    >
      <div className={styles.inner}>
        <p className="label">Qui sommes-nous</p>

        <h2>Une approche stratégique centrée sur l’excellence</h2>

        <p className={styles.text}>
          PALTO accompagne les entreprises dans leurs décisions les plus
          structurantes.
        </p>

        <p className={styles.text}>
          Une exigence forte, une vision claire, des résultats mesurables.
        </p>
      </div>
    </section>
  );
}