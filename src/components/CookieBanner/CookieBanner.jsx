import { useEffect, useState } from "react";
import styles from "./CookieBanner.module.css";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie_consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={styles.banner}>
      <p>
        Nous utilisons des cookies pour améliorer votre expérience.
      </p>

      <div className={styles.actions}>
        <button onClick={acceptCookies} className={styles.accept}>
          Accepter
        </button>
        <button onClick={declineCookies} className={styles.decline}>
          Refuser
        </button>
      </div>
    </div>
  );
}