import promenade from "../../../../public/png/promenade1.png";
import Presentation from "../../../component/Presentation/Presentation";
import fitness from "../../../../public/background/fitness.jpg";
import spa from "../../../../public/background/spa.jpg";
import PreviousNext from "../../../component/PreviousNext/PreviousNext";
import BackgroundText from "../../../component/BackgroungText/BackgroundText";

import bgText from "../../../../public/background/bgTextPromenade.jpg";
import CardTarif from "../../../component/Card/CardTarif";
import ScroolToTheTop from "../../../component/ScrollToTheTop/ScroolToTheTop";

export default function DogWalker() {
  const presentation = {
    title: "Découvrez nos différents services",
    text: "Nous pouvons également vous proposer des offres personnalisés pour optimisé l'expérience de votre compagnon !",
    btn: "Contactez-nous",
    img: promenade,
  };

  const tarif = {
    pack: {
      title: "Tarifs",
      price: "250 €",
      text: "Vous prenez soin de votre corps et de votre santé en vous entraînant régulièrement ? C'est une excellente habitude ! Et si vous faisiez profiter votre chien d'un traitement similaire en lui offrant des séances de conditionnement physique ? Proposez-lui un programme de 10 séances spécialement conçu pour renforcer ses muscles, améliorer son équilibre, sa flexibilité, son endurance cardiovasculaire, stimuler son esprit et développer sa conscience corporelle.",
      redirect: "/reservation",
      btn: "Réservez",
    },
    seance: {
      title: "Tarifs",
      price: "30 €",
      text: "Proposez-lui une séance unique, spécialement conçue pour renforcer ses muscles, améliorer son équilibre, sa flexibilité, son endurance cardiovasculaire, stimuler son esprit et développer sa conscience corporelle.",
      redirect: "/reservation",
      btn: "Réservez",
    },
  };
  return (
    <div className="container">
      <ScroolToTheTop />
      <Presentation
        title={presentation.title}
        text={presentation.text}
        btn={presentation.btn}
        img={presentation.img}
      />

      <BackgroundText
        img={bgText}
        text={"plein de truc je sais pas encore quoi mettre"}
      />

      <CardTarif
        title={tarif.pack.title}
        price={tarif.pack.price}
        text={tarif.pack.text}
        redirect={tarif.pack.redirect}
        btn={tarif.pack.btn}
      />
      <CardTarif
        title={tarif.seance.title}
        price={tarif.seance.price}
        text={tarif.seance.text}
        redirect={tarif.seance.redirect}
        btn={tarif.seance.btn}
      />

      <PreviousNext
        img1={fitness}
        title1={"Fitness"}
        text1={"Conscience corporelle"}
        click1={"/services/fitness"}
        img2={spa}
        title2={"Spa"}
        text2={"Salon de toilettage"}
        click2={"/services/spa"}
      />
    </div>
  );
}
