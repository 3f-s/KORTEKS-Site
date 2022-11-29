import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Section = (props: any) => {
   return (
      <div className={styles.sectionContainer}>
         {props.reverse && (
            <img
               className={styles.img}
               src={props.img}
               alt="KORTEKS Asset"
               width={650}
               height={400}
               style={{
                  objectFit: "cover",
               }}
            />
         )}
         <div className={styles.sectionDetail}>
            <h3 className={styles.sectionTitle}>{props.title}</h3>
            <span className={styles.sectionText}>{props.detail}</span>
         </div>
         {!props.reverse && (
            <img
               className={styles.img}
               src={props.img}
               alt="KORTEKS Asset"
               width={650}
               height={400}
               style={{
                  objectFit: "cover",
               }}
            />
         )}
      </div>
   );
};

export default function Home() {
   return (
      <div className={styles.container}>
         <Head>
            <title>Ana Sayfa</title>
            <meta name="home" content="created by 3fs" />
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
               {/* divider line */}
            </div>
            <div className={styles.divider}></div>
            <div>
               <div
                  style={{
                     marginBottom: "20%",
                     display: "flex",
                     flexDirection: "column",
                     alignItems: "center",
                  }}
               >
                  <h1 className={styles.mainTitle}>KORTEKS</h1>
                  <h2 className={styles.mainText}>
                     Kranial Operasyonlarda Radyolojik Teşhis ve Eksizyonda
                     Konvolüsyonel Sistemler
                  </h2>
                  <button
                     onClick={() => {
                        window.scroll({
                           top: 900,
                           left: 0,
                           behavior: "smooth",
                        });
                     }}
                     className={styles.scrollButton}
                  >
                     👇
                  </button>
               </div>
               <Section
                  title="Arttırılmış Gerçeklik"
                  detail="
                     Arttırılmış gerçeklik (augmented reality) teknolojisi, gerçek
                     dünyanın üzerine sanal dünyayı ekleyerek, kullanıcıların gerçek
                     dünyayı gözlemlemelerine olanak tanır. Bu teknoloji sayesinde,
                     kullanıcılar, gerçek dünyayı gözlemledikleri sırada, sanal dünyanın
                     içindeki nesneleri görebilirler. Arttırılmış gerçeklik teknolojisi ile
                     analiz edilen MR dosyalarından insan beyni 3 boyutlu modellenir, 
                     tümör lokasyonu ve boyutu belirlenir. Bu sayede cerrahlar,
                     ameliyat öncesi tüm özellikleri görebilirler.
                     "
                  img="https://medcitynews.com/uploads/2019/09/GettyImages-1015934084-600x337.jpg"
                  width={1000}
               />
               <Section
                  title="Sanal Gerçeklik"
                  detail="
                     Sanal gerçeklik (virtual reality) teknolojisi, kullanıcıların
                     gerçek dünyadan tamamen koparak, sanal bir dünyaya girmelerine
                     olanak tanır. Bu teknoloji sayesinde, kullanıcılar, sanal dünyanın
                     içindeki nesneleri görebilirler.
                     Sanal gerçeklik teknolojisi ile analiz edilen MR dosyalarından
                     insan beyni 3 boyut
                     lu modellenir, bu modelleme üzerine kurulan bir ameliyat simülasyonu sayesinde
                     cerrahlar, ameliyat öncesi tüm detayları görüp ameliyat pratiği yaparlar.
                     Böylece cerrahlar, ameliyat sırasında karşılaşabilecekleri
                     durumları önceden görebilirler.
                     "
                  img="https://i.guim.co.uk/img/media/6bc84a95a5284426a64e2f36c080adb92310b9cb/158_72_3423_2054/master/3423.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=8e76dceba0d8a530205e182ee6647af4"
                  reverse
                  width={750}
               />
               <Section
                  title="Yapay Zeka"
                  detail="
                     Yapay zeka (artificial intelligence) teknolojisi, bilgisayar
                     sistemlerinin, insanların düşünme ve davranışlarını taklit ederek
                     insanların düşünme ve davranışlarını anlamalarına olanak tanır.
                     Bu teknoloji sayesinde, kullanıcılar, bilgisayar sistemlerinin
                     düşünme ve davranışlarını taklit ederek, insanların düşünme ve
                     davranışlarını anlayabilirler. Yapay zeka teknolojisi ile analiz
                     edilen MR dosyaları, simülasyona ve ameliyat planlamasına
                     kullanılır.
                     "
                  img="https://i0.wp.com/sciencemediahub.eu/wp-content/uploads/2021/11/Artificial-intelligence-in-smart-healthcare-hospital-technology-concept.-Doctor-point-pen-to-AI-biomedical-screen-machine-learning-detect-brain-cancer-cell.jpg?fit=925%2C694&ssl=1"
                  width={2300}
               />
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
                     alt="3fs Logo"
                     width={52}
                     height={52}
                  />
               </span>
            </a>
         </footer>
      </div>
   );
}
