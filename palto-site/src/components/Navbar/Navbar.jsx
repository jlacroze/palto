import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";

export default function Navbar() {
  return (
   <nav className={styles.navbar}>
  <div className={styles["navbar-inner"]}>
    <img src={logo} alt="PALTO" className={styles.logo} />

    <div className={styles.links}>
      <a href="#">Accueil</a>
      <a href="#">Services</a>
      <a href="#">Contact</a>
    </div>
  </div>
</nav>
  );
}