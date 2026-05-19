import { useRef, useState, useId } from "react";
import styles from "./Contact.module.css";
import useReveal from "../../hooks/useReveal";
import { usePage } from "../../hooks/usePage";
import { sendContactForm } from "../../lib/emailService";
import { getMediaUrl, getSection } from "../../lib/mediaHelpers";
import contactFallback from "../../assets/bg_contact.avif";

export default function Contact() {
  const { sections } = usePage();
  const [ref, visible] = useReveal();
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const id = useId();

  const contact = getSection(sections, "sections.contact");

  const fallback = {
    title: "Nous contacter",
    subtitle: "",
  };

  const data = contact || fallback;
  const imageUrl = getMediaUrl(contact?.image, contactFallback);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await sendContactForm(formRef.current);
      setStatus("success");
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className={styles.section}>

      <div className={styles.lines}>
        <span />
        <span />
        <span />
      </div>

      <div
        ref={ref}
        className={`${styles.wrapper} ${visible ? styles.show : ""}`}
      >
        {/* IMAGE */}
        <div className={styles.image}>
          <img src={imageUrl} alt="" />
        </div>

        {/* FORM */}
        <div className={styles.formContainer}>
          <div className={styles.header}>
            <h2>{data.title}</h2>
            <span>{data.subtitle}</span>
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className={styles.form}
            aria-labelledby="contact-title"
          >
            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor={`${id}-firstname`}>Prénom</label>
                <input
                  id={`${id}-firstname`}
                  name="firstname"
                  placeholder="Camille"
                  required
                  autoComplete="given-name"
                />
              </div>

              <div className={styles.field}>
                <label htmlFor={`${id}-lastname`}>Nom</label>
                <input
                  id={`${id}-lastname`}
                  name="lastname"
                  placeholder="Dupont"
                  required
                  autoComplete="family-name"
                />
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor={`${id}-company`}>Société</label>
                <input
                  id={`${id}-company`}
                  name="company"
                  placeholder="Acme SAS"
                  autoComplete="organization"
                />
              </div>

              <div className={styles.field}>
                <label htmlFor={`${id}-phone`}>Téléphone</label>
                <input
                  id={`${id}-phone`}
                  name="phone"
                  placeholder="+33 6 00 00 00 00"
                  autoComplete="tel"
                />
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor={`${id}-email`}>Email *</label>
              <input
                id={`${id}-email`}
                type="email"
                name="email"
                required
                autoComplete="email"
                aria-required="true"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor={`${id}-message`}>Message *</label>
              <textarea
                id={`${id}-message`}
                name="message"
                rows="5"
                required
                placeholder="Décrivez votre besoin..."
                aria-required="true"
              />
            </div>

            {status === "success" && (
              <p className={`${styles.feedback} ${styles.feedbackSuccess}`}>
                Message envoyé avec succès.
              </p>
            )}

            {status === "error" && (
              <p className={`${styles.feedback} ${styles.feedbackError}`}>
                Erreur lors de l'envoi. Veuillez réessayer.
              </p>
            )}

            <button
              type="submit"
              className={`${styles.button} ${status === "loading" ? styles.buttonLoading : ""}`}
              disabled={status === "loading"}
            >
              {status === "loading" ? "Envoi en cours..." : "Envoyer le message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
