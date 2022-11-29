import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Contact.module.css";

export default function Contact() {
   return (
      <div className={styles.container}>
         <Head>
            <title>İletişim</title>
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
                  <a href="/">Ana Sayfa</a>
                  <a href="/about">Hakkımızda</a>
                  <a href="/contact">İletişim</a>
               </div>
            </div>
            <div className={styles.divider}></div>

            <div className={styles.contactContainer}>
               <h2 className={styles.title}>Bizimle İletişime Geçin</h2>

               <p className={styles.description}>
                  Lütfen iletişime geçmek için aşağıdaki formu doldurun.
               </p>

               {/*
                  contact form designed in black theme
               */}
               <div className={styles.contactForm}>
                  <div className={styles.contactFormUp}>
                     <input
                        className={styles.inputMail}
                        placeholder="email adresiniz"
                        type="email"
                     />
                     <input
                        className={styles.inputName}
                        placeholder="isminiz"
                        type="text"
                     />
                  </div>

                  <input className={styles.inputTitle} placeholder="başlık" />
                  <textarea
                     className={styles.inputDescripition}
                     placeholder="açıklama"
                  />

                  <button className={styles.button}>Gönder</button>
               </div>
            </div>
            <div className={styles.contactInfo}>
               <h3 className={styles.subtitle}>İletişim Bilgileri</h3>
               <p className={styles.description}>
                  <span className={styles.bold}>Adres:</span> Eğitim Mh.
                  Sarayönü Cd. No: 1 İstanbul Atatürk Fen Lisesi
                  Kadıköy/İstanbul
               </p>

               <p className={styles.description}>
                  <span className={styles.bold}>E-posta:</span>{" "}
                  <a
                     href="mailto:morkoc_furkan@hotmail.com
                     "
                  >
                     morkoc_furkan@hotmail.com
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
               href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
               target="_blank"
               rel="noopener noreferrer"
            >
               Powered by{" "}
               <span className={styles.logo_3fs}>
                  <Image
                     src="/3fs_logo.png"
                     alt="Vercel Logo"
                     width={52}
                     height={52}
                  />
               </span>
            </a>
         </footer>
      </div>
   );
}