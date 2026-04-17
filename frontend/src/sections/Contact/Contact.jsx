import styles from "./Contact.module.css";
import useReveal from "../../hooks/useReveal";
import { usePage } from "../../hooks/usePage";
import emailjs from "@emailjs/browser";

import contactFallback from "../../assets/bg_hero.avif";

export default function Contact() {
  const { sections } = usePage();
  const [ref, visible] = useReveal();

  // 🔥 Récup section Strapi
  const contact = sections.find(
    (section) => section.__component === "sections.contact"
  );

  // 🔥 FALLBACK
  const fallback = {
    title: "Nous contacter",
    subtitle: "GET IN TOUCH",
  };

  const data = contact || fallback;

  // 🔥 IMAGE (compatible Strapi Cloud)
  const imageUrl =
    contact?.image?.url?.startsWith("http")
      ? contact.image.url
      : contact?.image?.url
      ? `${import.meta.env.VITE_API_URL}${contact.image.url}`
      : contactFallback;

  // 🔥 SUBMIT EMAILJS
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_phq75fh",   // 🔁 remplace si besoin
        "template_71tplbn",    // 🔁 TON TEMPLATE ID
        e.target,
        "LLgwv59YM11xmDVn7"         // 🔁 TA PUBLIC KEY
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
      
      {/* LIGNES */}
      <div className={styles.lines}>
        <span />
        <span />
        <span />
      </div>

      <div
        ref={ref}
        className={`${styles.wrapper} ${
          visible ? styles.show : ""
        }`}
      >
        {/* IMAGE */}
        <div className={styles.image}>
          <img src={imageUrl} alt="Contact" />
        </div>

        {/* FORM */}
        <div className={styles.formContainer}>
          <div className={styles.header}>
            <h2>{data.title}</h2>
            <span>{data.subtitle}</span>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            
            <div className={styles.row}>
              <div className={styles.field}>
                <label>PRÉNOM</label>
                <input name="firstname" placeholder="Jean" required />
              </div>

              <div className={styles.field}>
                <label>NOM</label>
                <input name="lastname" placeholder="Dupont" required />
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <label>SOCIÉTÉ</label>
                <input name="company" placeholder="Acme SAS" />
              </div>

              <div className={styles.field}>
                <label>TÉLÉPHONE</label>
                <input name="phone" placeholder="+33 6 00 00 00 00" />
              </div>
            </div>

            <div className={styles.field}>
              <label>EMAIL *</label>
              <input type="email" name="email" required />
            </div>

            <div className={styles.field}>
              <label>MESSAGE *</label>
              <textarea
                name="message"
                rows="5"
                required
                placeholder="Décrivez votre besoin..."
              />
            </div>

            <button type="submit" className={styles.button}>
              ENVOYER LE MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}