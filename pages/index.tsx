import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Section = (props: any) => {
   return (
      <div className={styles.sectionContainer}>
         {props.reverse && props.img && (
            <img
               className={styles.img}
               src={props.img}
               alt="KORTEKS Asset"
               style={{
                  objectFit: "cover",
               }}
            />
         )}
         <div className={styles.sectionDetail}>
            <h3 className={styles.sectionTitle}>{props.title}</h3>
            <span className={styles.sectionText}>{props.detail}</span>
         </div>
         {!props.reverse && props.img && (
            <img
               className={styles.img}
               src={props.img}
               alt="KORTEKS Asset"
               style={{
                  objectFit: "cover",
               }}
            />
         )}
      </div>
   );
};

const titles = {
   en: "CORTEX",
   tr: "KORTEKS",
   fr: "CORTEX",
};

const sections = [
   {
      title: {
         en: "Augmented Reality",
         tr: "Arttırılmış Gerçeklik",
         fr: "Réalité augmentée",
      },
      detail: {
         en: `
         Augmented reality (AR) technology adds a virtual layer to the real world, allowing users to observe the real world while also being able to see virtual objects in it. With this technology, users can observe the real world while being able to see objects in the virtual world. With augmented reality technology, the human brain is modeled in 3D from the analyzed MRI files, the tumor location and size are determined. Thus, surgeons can see all the features before surgery.
         `,
         tr: `
         Arttırılmış gerçeklik (augmented reality) teknolojisi, gerçek dünyanın üzerine sanal dünyayı ekleyerek, kullanıcıların gerçek dünyayı gözlemlemelerine olanak tanır. Bu teknoloji sayesinde, kullanıcılar, gerçek dünyayı gözlemledikleri sırada, sanal dünyanın içindeki nesneleri görebilirler. Arttırılmış gerçeklik teknolojisi ile analiz edilen MR dosyalarından insan beyni 3 boyutlu modellenir, tümör lokasyonu ve boyutu belirlenir. Bu sayede cerrahlar, ameliyat öncesi tüm özellikleri görebilirler.
         `,
         fr: `La technologie de réalité augmentée (AR) ajoute une couche virtuelle au monde réel, permettant aux utilisateurs d'observer le monde réel tout en pouvant y voir des objets virtuels. Grâce à cette technologie, les utilisateurs peuvent observer le monde réel tout en étant capables de voir des objets dans le monde virtuel. Grâce à la technologie de réalité augmentée, le cerveau humain est modélisé en 3D à partir des fichiers IRM analysés, la localisation et la taille de la tumeur sont déterminées. Ainsi, les chirurgiens peuvent voir toutes les caractéristiques avant la chirurgie.`,
      },
   },
   {
      title: {
         en: "Virtual Reality",
         tr: "Sanal Gerçeklik",
         fr: "Réalité virtuelle",
      },
      detail: {
         en: `
         Virtual reality (VR) technology allows users to experience a virtual world by using a headset. With this technology, users can experience a virtual world by using a headset. With virtual reality technology, the human brain is modeled in 3D from the analyzed MRI files, the tumor location and size are determined. Thus, surgeons can see all the features before surgery.
         `,
         tr: `
         Sanal gerçeklik (virtual reality) teknolojisi, kullanıcıların bir başlık kullanarak sanal bir dünyaya katılmasına olanak tanır. Bu teknoloji sayesinde, kullanıcılar bir başlık kullanarak sanal bir dünyaya katılabilirler. Sanal gerçeklik teknolojisi ile analiz edilen MR dosyalarından insan beyni 3 boyutlu modellenir, tümör lokasyonu ve boyutu belirlenir. Bu sayede cerrahlar, ameliyat öncesi tüm özellikleri görebilirler.
         `,
         fr: `La technologie de réalité virtuelle (VR) permet aux utilisateurs d'expérimenter un monde virtuel en utilisant un casque. Grâce à cette technologie, les utilisateurs peuvent vivre un monde virtuel en utilisant un casque. Grâce à la technologie de réalité virtuelle, le cerveau humain est modélisé en 3D à partir des fichiers IRM analysés, la localisation et la taille de la tumeur sont déterminées. Ainsi, les chirurgiens peuvent voir toutes les caractéristiques avant la chirurgie.`,
      },
   },
   {
      title: {
         en: "Artificial Intelligence",
         tr: "Yapay Zeka",
         fr: "Intelligence artificielle",
      },
      detail: {
         en: `
         Artificial intelligence (artificial intelligence) technology, computer
                      systems by imitating people's thinking and behavior.
                      It allows people to understand their thinking and behavior.
                      Thanks to this technology, users can
                      people's thinking and behavior by imitating their thinking and behavior
                      can understand their behavior. Analysis with artificial intelligence technology
                      The MR files obtained can be used for simulation and surgery planning.
                      used.
         `,
         tr: `
         Yapay zeka (artificial intelligence) teknolojisi, bilgisayar
                     sistemlerinin, insanların düşünme ve davranışlarını taklit ederek
                     insanların düşünme ve davranışlarını anlamalarına olanak tanır.
                     Bu teknoloji sayesinde, kullanıcılar, bilgisayar sistemlerinin
                     düşünme ve davranışlarını taklit ederek, insanların düşünme ve
                     davranışlarını anlayabilirler. Yapay zeka teknolojisi ile analiz
                     edilen MR dosyaları, simülasyona ve ameliyat planlamasına
                     kullanılır.
         `,
         fr: `Technologie d'intelligence artificielle (AI), informatique
         systèmes en imitant la pensée et le comportement des gens.
         Il permet aux gens de comprendre leur pensée et leur comportement.
         Grâce à cette technologie, les utilisateurs peuvent
         la pensée et le comportement des gens en imitant leur pensée et leur comportement
         peut comprendre leur comportement. Analyse avec la technologie de l'intelligence artificielle
         Les fichiers IRM obtenus peuvent être utilisés pour la simulation et la planification de la chirurgie.
         utilisé.`,
      },
   },
   {
      title: {
         en: "Brain Cancer",
         tr: "Beyin Kanseri",
         fr: "Cancer du cerveau",
      },
      detail: {
         en: `
         Malignant tumors, or cancer, is one of the leading causes of death. In 2018, 18.1 million people were diagnosed with cancer and 9.6 million people died from it. According to the International Agency for Research on Cancer, 2.9% of cancer cases in 2018 in our country were brain and central nervous system related. Studies show that 5 out of every 100,000 people develop a brain tumor. Early and accurate diagnosis is vital for effective treatment. Our deep learning network has developed an artificial intelligence system called CORTEX that can segment tumors from MR images in seconds, a process that normally takes doctors weeks to do manually. CORTEX also includes a desktop application where doctors can log in, review and edit patient records or create new ones, and examine MR images in detail with our embedded MR imaging system, allowing for more accurate tumor segmentation and surgical planning. After analyzing the MR images, the artificial intelligence system transfers them to a virtual reality surgery simulation where the patient's brain is 3D modeled and the entire cranial surgery is simulated before the actual surgery. This system helps to minimize human error in risky surgeries by combining all these features in a single, easy-to-use application.
         `,
         tr: `
         Kötü huylu tümörler veya kanser, önde gelen ölüm nedenlerinden biridir. 2018 yılında 18,1 milyon kişiye kanser teşhisi kondu ve 9,6 milyon kişi bu nedenle hayatını kaybetti. Uluslararası Kanser Araştırmaları Ajansı'na göre ülkemizde 2018 yılında kanser vakalarının %2,9'u beyin ve merkezi sinir sistemi ile ilgiliydi. Araştırmalar, her 100.000 kişiden 5'inde beyin tümörü geliştiğini gösteriyor. Etkili tedavi için erken ve doğru tanı hayati önem taşır. Derin öğrenme ağımız, normalde doktorların manuel olarak haftalarca süren bir işlem olan MR görüntülerinden tümörleri saniyeler içinde segmentlere ayırabilen KORTEKS adlı bir yapay zeka sistemi geliştirdi. KORTEKS ayrıca, doktorların oturum açabileceği, hasta kayıtlarını inceleyip düzenleyebileceği veya yenilerini oluşturabileceği ve yerleşik MR görüntüleme sistemimizle MR görüntülerini ayrıntılı olarak inceleyebileceği bir masaüstü uygulaması içerir, bu da daha doğru tümör segmentasyonu ve cerrahi planlama sağlar. MR görüntülerini analiz ettikten sonra, yapay zeka sistemi onları hastanın beyninin 3D modellendiği ve gerçek ameliyattan önce tüm kraniyal cerrahinin simüle edildiği bir sanal gerçeklik ameliyat simülasyonuna aktarır. Bu sistem, tüm bu özellikleri kullanımı kolay tek bir uygulamada birleştirerek riskli ameliyatlarda insan hatasını en aza indirmeye yardımcı olur.
         `,
         fr: `Les tumeurs malignes, ou cancers, sont l'une des principales causes de décès. En 2018, 18,1 millions de personnes ont reçu un diagnostic de cancer et 9,6 millions de personnes en sont décédées. Selon le Centre international de recherche sur le cancer, 2,9 % des cas de cancer en 2018 dans notre pays étaient liés au cerveau et au système nerveux central. Des études montrent que 5 personnes sur 100 000 développent une tumeur au cerveau. Un diagnostic précoce et précis est essentiel pour un traitement efficace. Notre réseau d'apprentissage en profondeur a développé un système d'intelligence artificielle appelé CORTEX qui peut segmenter les tumeurs à partir d'images IRM en quelques secondes, un processus qui prend normalement des semaines aux médecins à faire manuellement. CORTEX comprend également une application de bureau où les médecins peuvent se connecter, consulter et modifier les dossiers des patients ou en créer de nouveaux, et examiner les images IRM en détail avec notre système d'imagerie IRM intégré, permettant une segmentation tumorale et une planification chirurgicale plus précises. Après avoir analysé les images IRM, le système d'intelligence artificielle les transfère à une simulation de chirurgie en réalité virtuelle où le cerveau du patient est modélisé en 3D et toute la chirurgie crânienne est simulée avant la chirurgie proprement dite. Ce système aide à minimiser les erreurs humaines dans les chirurgies à risque en combinant toutes ces fonctionnalités dans une seule application facile à utiliser.`,
      },
   },
];

function useWindowSize() {
   const [windowSize, setWindowSize] = useState({
      width: 0,
      height: 0,
   });
   useEffect(() => {
      function handleResize() {
         // Set window width/height to state
         setWindowSize({
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            width: window.innerWidth,
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            height: window.innerHeight,
         });
      }

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
   }, []); // Empty array ensures that effect is only run on mount
   return windowSize;
}

export default function Home() {
   const size = useWindowSize();
   const [locale, setLocale] = useState("en");
   useEffect(() => {
      setLocale(navigator.language.split(/[-_]/)[0]);
   }, []);
   const [isSelectBoxOpen, setIsSelectBoxOpen] = useState(false);

   return (
      <div className={styles.container}>
         <Head>
            <title>
               {locale === "en"
                  ? "Home"
                  : locale === "tr"
                  ? "Ana Sayfa"
                  : "Accueil"}
            </title>
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
                  <div
                     className={styles.selectLanguage}
                     onClick={() => setIsSelectBoxOpen(!isSelectBoxOpen)}
                  >
                     <span>
                        {locale === "en"
                           ? "🇬🇧 English"
                           : locale === "tr"
                           ? "🇹🇷 Türkçe"
                           : "🇫🇷 Français"}
                     </span>
                     {isSelectBoxOpen && (
                        <div className={styles.languageOptions}>
                           <span
                              className={styles.languageOption}
                              onClick={() => {
                                 setLocale("en");
                              }}
                           >
                              🇬🇧 English
                           </span>
                           <span
                              className={styles.languageOption}
                              onClick={() => {
                                 setLocale("tr");
                              }}
                           >
                              🇹🇷 Türkçe
                           </span>
                           <span
                              className={styles.languageOption}
                              onClick={() => {
                                 setLocale("fr");
                              }}
                           >
                              🇫🇷 Français
                           </span>
                        </div>
                     )}
                  </div>
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
                  <h1 className={styles.mainTitle}>
                     {locale === "en"
                        ? "CORTEX"
                        : locale === "tr"
                        ? "KORTEKS"
                        : "CORTEX"}
                  </h1>
                  <h2 className={styles.mainText}>
                     {locale === "en"
                        ? "Cranial Operational Radiologic Training and Examination Systems"
                        : locale === "tr"
                        ? "Kranial Operasyonlarda Radyolojik Teşhis ve Eksizyonda Konvolüsyonel Sistemler"
                        : "Intelligence artificielle en neurochirurgie"}
                  </h2>
                  <button
                     onClick={() => {
                        window.scroll({
                           top: size.height + 10,
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
                  title={
                     locale === "en"
                        ? sections[3].title.en
                        : locale === "tr"
                        ? sections[3].title.tr
                        : sections[3].title.fr
                  }
                  detail={
                     locale === "en"
                        ? sections[3].detail.en
                        : locale === "tr"
                        ? sections[3].detail.tr
                        : sections[3].detail.fr
                  }
                  reverse={size.width > 1000 ? true : false}
                  width={"30vw"}
               />
               <Section
                  title={
                     locale === "en"
                        ? sections[0].title.en
                        : locale === "tr"
                        ? sections[0].title.tr
                        : sections[0].title.fr
                  }
                  detail={
                     locale === "en"
                        ? sections[0].detail.en
                        : locale === "tr"
                        ? sections[0].detail.tr
                        : sections[0].detail.fr
                  }
                  img="https://medcitynews.com/uploads/2019/09/GettyImages-1015934084-600x337.jpg"
                  width={"30vw"}
               />

               <Section
                  title={
                     locale === "en"
                        ? sections[1].title.en
                        : locale === "tr"
                        ? sections[1].title.tr
                        : sections[1].title.fr
                  }
                  detail={
                     locale === "en"
                        ? sections[1].detail.en
                        : locale === "tr"
                        ? sections[1].detail.tr
                        : sections[1].detail.fr
                  }
                  img="https://i.guim.co.uk/img/media/6bc84a95a5284426a64e2f36c080adb92310b9cb/158_72_3423_2054/master/3423.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=8e76dceba0d8a530205e182ee6647af4"
                  reverse={size.width > 1000 ? true : false}
                  width={"30vw"}
               />
               <Section
                  title={
                     locale === "en"
                        ? sections[2].title.en
                        : locale === "tr"
                        ? sections[2].title.tr
                        : sections[2].title.fr
                  }
                  detail={
                     locale === "en"
                        ? sections[2].detail.en
                        : locale === "tr"
                        ? sections[2].detail.tr
                        : sections[2].detail.fr
                  }
                  img="https://i0.wp.com/sciencemediahub.eu/wp-content/uploads/2021/11/Artificial-intelligence-in-smart-healthcare-hospital-technology-concept.-Doctor-point-pen-to-AI-biomedical-screen-machine-learning-detect-brain-cancer-cell.jpg?fit=925%2C694&ssl=1"
                  width={"30vw"}
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
                     width={40}
                     height={40}
                  />
               </span>
            </a>
         </footer>
      </div>
   );
}
