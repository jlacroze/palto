import { useEffect } from "react";
import styles from "./LegalModal.module.css";

export default function LegalModal({ isOpen, onClose }) {
  // bloque le scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  // fermeture avec ESC
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKey);
    }

    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.close} onClick={onClose}>
          ✕
        </button>

        <h2>Mentions légales</h2>

        <p><strong>Nom de l’entreprise :</strong> PALTO</p>
        <p><strong>Responsable :</strong> Ton nom</p>
        <p><strong>Email :</strong> contact@palto.fr</p>

        <p>
          Ce site est édité à titre professionnel. Les informations
          présentées sont données à titre indicatif.
        </p>

        <p>
          Les données collectées via le formulaire sont utilisées
          uniquement dans le cadre de la relation commerciale.
        </p>
      </div>
    </div>
  );
}