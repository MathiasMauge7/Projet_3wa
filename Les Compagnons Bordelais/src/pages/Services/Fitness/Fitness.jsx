import Presentation from "../../../component/Presentation/Presentation";
import fitness from "../../../../public/png/fitness.png";
import BackgroundText from "../../../component/BackgroungText/BackgroundText";
import "./fitness.scss";
import CardTarif from "../../../component/Card/CardTarif";
import spa from "../../../../public/background/spa.jpg";
import promenade from "../../../../public/background/promenade.jpg";
import PreviousNext from "../../../component/PreviousNext/PreviousNext";

export default function Fitness() {
  const presentation = {
    title: "Fitness",
    text: "Vous prenez-vous soin de votre corps et de votre santé en vous entraînant régulièrement ? C'est une excellente habitude ! Pourquoi ne pas faire de même pour votre chien en lui proposant des séances de conditionnement physique ? Offrez-lui un programme spécialement conçu pour renforcer ses muscles, améliorer son équilibre, sa flexibilité, son endurance cardiovasculaire, stimuler son esprit et développer sa conscience corporelle.",
    btn: "Contactez-nous",
    img: fitness,
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
      <Presentation
        title={presentation.title}
        text={presentation.text}
        btn={presentation.btn}
        img={presentation.img}
      />
      <BackgroundText />
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
        img1={spa}
        title1={"Toilettage"}
        text1={"text"}
        click1={"/services/spa"}
        img2={promenade}
        title2={"Balade"}
        text2={"text"}
        click2={"/services/promenade"}
      />
    </div>
  );
}
