import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../styles/Contact.module.css";

export default function Contact() {
   const [locale, setLocale] = useState("en");
   useEffect(() => {
      setLocale(navigator.language.split(/[-_]/)[0]);
   }, []);
   return (
      <div className={styles.container}>
         <Head>
            <title>
               {locale === "en"
                  ? "Contact"
                  : locale === "tr"
                  ? "İletişim"
                  : "Contact"}
            </title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <main className={styles.main}>
            <div className={styles.navBar}>
               <span className={styles.title}>
                  <Image
                     src="/korteks_logo.png"
                     alt="KORTEKS Logo"
                     width={50}
                     height={50}
                     style={{
                        cursor: "pointer",
                     }}
                     onClick={() => (window.location.href = "/")}
                  />
               </span>
               <div className={styles.navLinks}>
                  <a href="/">
                     {locale === "en"
                        ? "Home"
                        : locale === "tr"
                        ? "Ana Sayfa"
                        : "Accueil"}
                  </a>
                  <a href={"/about"}>
                     {locale === "en"
                        ? "About"
                        : locale === "tr"
                        ? "Hakkımızda"
                        : "À propos"}
                  </a>
                  <a href={"/contact"}>
                     {locale === "en"
                        ? "Contact"
                        : locale === "tr"
                        ? "İletişim"
                        : "Contact"}
                  </a>
               </div>
            </div>
            <div className={styles.divider}></div>

            <div className={styles.contactContainer}>
               <h2 className={styles.title}>
                  {locale === "en"
                     ? "Contact Us"
                     : locale === "tr"
                     ? "Bize Ulaşın"
                     : "Contactez-nous"}
               </h2>

               <p className={styles.description}>
                  {locale === "en"
                     ? "You can contact us by filling out the form below."
                     : locale === "tr"
                     ? "Aşağıdaki formu doldurarak bize ulaşabilirsiniz."
                     : "Vous pouvez nous contacter en remplissant le formulaire ci-dessous."}
               </p>

               {/*
                  contact form designed in black theme
               */}
               <div className={styles.contactForm}>
                  <div className={styles.contactFormUp}>
                     <input
                        className={styles.inputMail}
                        placeholder={
                           locale === "en"
                              ? "email"
                              : locale === "tr"
                              ? "e-posta"
                              : "email"
                        }
                        type="email"
                     />
                     <input
                        className={styles.inputName}
                        placeholder={
                           locale === "en"
                              ? "name"
                              : locale === "tr"
                              ? "isim"
                              : "nom"
                        }
                        type="text"
                     />
                  </div>

                  <input
                     className={styles.inputTitle}
                     placeholder={
                        locale === "en"
                           ? "title"
                           : locale === "tr"
                           ? "başlık"
                           : "titre"
                     }
                  />
                  <textarea
                     className={styles.inputDescripition}
                     placeholder={
                        locale === "en"
                           ? "description"
                           : locale === "tr"
                           ? "açıklama"
                           : "description"
                     }
                  />

                  <button className={styles.button}>
                     {locale === "en"
                        ? "Send"
                        : locale === "tr"
                        ? "Gönder"
                        : "Envoyer"}
                  </button>
               </div>
            </div>
            <div className={styles.contactInfo}>
               <h3 className={styles.subtitle}>
                  {locale === "en"
                     ? "Contact Information"
                     : locale === "tr"
                     ? "İletişim Bilgileri"
                     : "Informations de contact"}
               </h3>
               <p className={styles.description}>
                  <span className={styles.bold}>
                     {locale === "en"
                        ? "Address:"
                        : locale === "tr"
                        ? "Adres:"
                        : "Adresse:"}
                  </span>{" "}
                  {locale === "en"
                     ? "İstanbul Atatürk Science High School 1 Sarayönü St. Kadikoy, Istanbul 34720"
                     : locale === "tr"
                     ? "Eğitim Mh. Sarayönu Cd. No:1, İstanbul Atatürk Fen Lisesi Kadıköy/İstanbul"
                     : "İstanbul Atatürk Science High School 1 Sarayönü St. Kadikoy, Istanbul 34720"}
               </p>

               <p className={styles.description}>
                  <span className={styles.bold}>
                     {locale === "en"
                        ? "Email"
                        : locale === "tr"
                        ? "E-posta"
                        : "Email"}
                     :
                  </span>{" "}
                  <a
                     href="mailto:info@korteks.dev
                     "
                  >
                     info@korteks.dev
                  </a>
               </p>
            </div>
         </main>

         <footer className={styles.footer}>
            <div className={styles.korteks_logo_cnt}>
               <span className={styles.logo_korteks}>
                  <Image
                     src="/korteks_logo.png"
                     alt="KORTEKS Logo"
                     width={50}
                     height={50}
                  />
               </span>
            </div>
            <a
               href="https://github.com/3f-s"
               target="_blank"
               rel="noopener noreferrer"
            >
               Powered by{" "}
               <span className={styles.logo_3fs}>
                  <Image
                     src="/3fs_logo.png"
                     alt="Vercel Logo"
                     width={40}
                     height={40}
                  />
               </span>
            </a>
         </footer>
      </div>
   );
}
