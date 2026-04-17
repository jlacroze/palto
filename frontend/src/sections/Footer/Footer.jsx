import styles from "./Footer.module.css";
import logo from "../../assets/logo_white.avif";

export default function Footer({ onOpenLegal }) {
  return (
    <footer className={styles.footer}>
      
      {/* LIGNES */}
      <div className={styles.lines}>
        <span />
        <span />
      </div>

      <div className={styles.inner}>
        
        {/* LEFT */}
        <div className={styles.left}>
          <img src={logo} alt="PALTO" className={styles.logo} />
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
          <button
            onClick={onOpenLegal}
            className={styles.link}
          >
            Mentions légales
          </button>

          <p>© {new Date().getFullYear()} PALTO</p>
        </div>

      </div>

      {/* Ligne gold */}
      <div className={styles.bottomLine} />
    </footer>
  );
}