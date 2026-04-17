import styles from "./Contact.module.css";
import useReveal from "../../hooks/useReveal";
import { usePage } from "../../hooks/usePage";
import emailjs from "@emailjs/browser";
import { useId } from "react";

import contactFallback from "../../assets/bg_hero.avif";

export default function Contact() {
  const { sections } = usePage();
  const [ref, visible] = useReveal();

  const contact = sections.find(
    (section) => section.__component === "sections.contact"
  );

  const fallback = {
    title: "Nous contacter",
    subtitle: "GET IN TOUCH",
  };

  const data = contact || fallback;

  const imageUrl =
    contact?.image?.url?.startsWith("http")
      ? contact.image.url
      : contact?.image?.url
      ? `${import.meta.env.VITE_API_URL}${contact.image.url}`
      : contactFallback;

  // 🔥 IDs uniques pour accessibilité
  const id = useId();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_phq75fh",
        "template_71tplbn",
        e.target,
        "LLgwv59YM11xmDVn7"
      )
      .then(() => {
        alert("✅ Message envoyé !");
        e.target.reset();
      })
      .catch((error) => {
        console.error(error);
        alert("❌ Erreur lors de l'envoi");
      });
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
          <img src={imageUrl} alt="" /> {/* décoratif */}
        </div>

        {/* FORM */}
        <div className={styles.formContainer}>
          <div className={styles.header}>
            <h2>{data.title}</h2>
            <span>{data.subtitle}</span>
          </div>

          <form
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
                  placeholder="Jean"
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

            <button type="submit" className={styles.button}>
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}