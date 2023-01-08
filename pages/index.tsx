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
         One of the diseases that cause the most deaths is malignant tumors, that is, cancer. In 2018, 18.1 million people were diagnosed with cancer and 9.6 million people died because of this. According to the International Agency for Research on Cancer, 2.9% of cancer cases in our country in 2018 are cancers related to the brain and central nervous system. Studies show that 5 out of every 100,000 people develop a brain tumor. Early and accurate diagnosis is very important for tumor treatment. While the tumor segmentation process from the MR image, which is mostly done manually by the doctors, takes weeks, this time is reduced to seconds using artificial intelligence, thanks to the system built with the deep learning network developed entirely by ourselves. CORTEX is not just a tumor segmentation system. Thanks to the developed desktop application, doctors can log in with their accounts, review and edit patient records or create new patient records. MR images loaded with the created records can be examined in detail in the same application with our embedded MR imaging system, so that some parts that cannot be noticed by the human eye are shown to the doctor with the help of computer systems. In this way, human-induced errors are largely avoided during tumor segmentation and surgical planning. After the MR images of the patients are analyzed by the application and artificial intelligence system, they are transferred to the virtual reality surgery simulation that we have created where the patient's brain's 3D modeling is made, and in the same way, the entire cranial surgery is simulated in virtual reality before the actual surgery. This artificial intelligence system makes surgery planning together with tumor segmentation and classification. The planned surgery is shown in the simulation. Thus, surgeons can practice with the exact modeling of the patient's brain before surgery. All these systems are combined in a single application and are easy to use, thus minimizing human-induced errors in very risky surgeries such as cranial operations.
         `,
         tr: `
         En çok ölüme neden olan hastalıklardan biri de kötü huylu tümörler yani kanserdir. 2018 yılında 18,1 milyon kişiye kanser teşhisi kondu ve bu nedenle 9,6 milyon kişi hayatını kaybetti. Uluslararası Kanser Araştırma Ajansı'na göre 2018 yılında ülkemizdeki kanser vakalarının %2,9'unu beyin ve merkezi sinir sistemi ile ilgili kanserler oluşturmaktadır. Araştırmalar, her 100.000 kişiden 5'inde beyin tümörü geliştiğini gösteriyor. Tümör tedavisi için erken ve doğru teşhis çok önemlidir. Çoğunlukla doktorların manuel olarak yaptığı MR görüntüsünden tümör bölütleme işlemi haftalar sürerken, tamamen kendi geliştirdiğimiz derin öğrenme ağı ile kurguladığımız sistem sayesinde bu süre yapay zeka kullanılarak saniyelere indiriliyor. KORTEKS sadece bir tümör segmentasyon sistemi değildir. Geliştirilen masaüstü uygulaması sayesinde doktorlar hesapları ile giriş yapabilir, hasta kayıtlarını inceleyip düzenleyebilir veya yeni hasta kayıtları oluşturabilir. Oluşturulan kayıtlarla yüklenen MR görüntüleri gömülü MR görüntüleme sistemimiz ile aynı uygulama içerisinde detaylı olarak incelenebilmekte ve böylece insan gözünün göremediği bazı kısımlar bilgisayar sistemleri yardımıyla doktora gösterilebilmektedir. Bu şekilde, tümör segmentasyonu ve cerrahi planlama sırasında insan kaynaklı hatalardan büyük ölçüde kaçınılır. Hastaların MR görüntüleri uygulama ve yapay zeka sistemi tarafından analiz edildikten sonra hastanın beyninin 3D modellemesinin yapıldığı kendi oluşturduğumuz sanal gerçeklik ameliyat simülasyonuna aktarılır ve aynı şekilde tüm kranial cerrahi de yapılır. gerçek ameliyattan önce sanal gerçeklikte simüle edildi. Bu yapay zeka sistemi, tümör segmentasyonu ve sınıflandırması ile cerrahi planlamayı birlikte yapıyor. Planlanan ameliyat simülasyonda gösterilir. Böylece cerrahlar, ameliyattan önce hastanın beyninin tam olarak modellenmesi ile pratik yapabilirler. Tüm bu sistemlerin tek bir uygulamada birleştirilmesi ve kolay kullanımı sayesinde kraniyal operasyonlar gibi çok riskli ameliyatlarda insan kaynaklı hataları en aza indirmektedir.
         `,
         fr: `L'une des maladies qui causent le plus de décès est les tumeurs malignes, c'est-à-dire le cancer. En 2018, 18,1 millions de personnes ont reçu un diagnostic de cancer et 9,6 millions de personnes en sont décédées. Selon le Centre international de recherche sur le cancer, 2,9 % des cas de cancer dans notre pays en 2018 sont des cancers liés au cerveau et au système nerveux central. Des études montrent que 5 personnes sur 100 000 développent une tumeur au cerveau. Un diagnostic précoce et précis est très important pour le traitement des tumeurs. Alors que le processus de segmentation tumorale à partir de l'image IRM, qui est principalement effectué manuellement par les médecins, prend des semaines, ce temps est réduit à quelques secondes grâce à l'intelligence artificielle, grâce au système construit avec le réseau d'apprentissage en profondeur entièrement développé par nous-mêmes. CORTEX n'est pas seulement un système de segmentation tumorale. Grâce à l'application de bureau développée, les médecins peuvent se connecter avec leurs comptes, consulter et modifier les dossiers des patients ou créer de nouveaux dossiers de patients. Les images RM chargées avec les enregistrements créés peuvent être examinées en détail dans la même application avec notre système d'imagerie RM intégré, de sorte que certaines parties qui ne peuvent pas être remarquées par l'œil humain sont montrées au médecin à l'aide de systèmes informatiques. De cette façon, les erreurs induites par l'homme sont largement évitées lors de la segmentation tumorale et de la planification chirurgicale. Une fois les images IRM des patients analysées par l'application et le système d'intelligence artificielle, elles sont transférées vers la simulation de chirurgie en réalité virtuelle que nous avons créée où la modélisation 3D du cerveau du patient est réalisée, et de la même manière, toute la chirurgie crânienne est simulé en réalité virtuelle avant la chirurgie proprement dite. Ce système d'intelligence artificielle permet la planification de la chirurgie ainsi que la segmentation et la classification des tumeurs. La chirurgie prévue est montrée dans la simulation. Ainsi, les chirurgiens peuvent s'exercer avec la modélisation exacte du cerveau du patient avant la chirurgie. Tous ces systèmes sont combinés en une seule application et sont faciles à utiliser, minimisant ainsi les erreurs induites par l'homme dans les chirurgies très risquées telles que les opérations crâniennes.`,
      },
   },
];

function useWindowSize() {
   // Initialize state with undefined width/height so server and client renders match
   // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
   const [windowSize, setWindowSize] = useState({
      width: 0,
      height: 0,
   });

   useEffect(() => {
      // only execute all the code below in client side
      // Handler to call on window resize

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
