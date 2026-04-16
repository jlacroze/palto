import styles from "./Footer.module.css";
import logo from "../../assets/logo.png";

export default function Footer() {
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
          <a href="#">Mentions légales</a>
          <p>© {new Date().getFullYear()} PALTO</p>
        </div>

      </div>

      {/* Ligne gold */}
      <div className={styles.bottomLine} />
    </footer>
  );
}