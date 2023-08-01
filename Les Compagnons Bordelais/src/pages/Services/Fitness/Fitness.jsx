import Presentation from "../../../component/Presentation/Presentation";
import fitness from "../../../../public/png/fitness.png";
import BackgroundText from "../../../component/BackgroungText/BackgroundText";
import "./fitness.scss";
import CardTarif from "../../../component/Card/CardTarif";

export default function Fitness() {
  const presentation = {
    title: "Fitness",
    text: "Vous prenez-vous soin de votre corps et de votre santé en vous entraînant régulièrement ? C'est une excellente habitude ! Pourquoi ne pas faire de même pour votre chien en lui proposant des séances de conditionnement physique ? Offrez-lui un programme spécialement conçu pour renforcer ses muscles, améliorer son équilibre, sa flexibilité, son endurance cardiovasculaire, stimuler son esprit et développer sa conscience corporelle.",
    btn: "Contactez-nous",
    img: fitness,
  };

  const tarif = {
    title: "Tarifs",
    price: "250 €",
    text: "Vous prenez-vous soin de votre corps et de votre santé en vous entraînant régulièrement ? C'est une excellente habitude ! Pourquoi ne pas faire de même pour votre chien en lui proposant des séances de conditionnement physique ? Offrez-lui un programme spécialement conçu pour renforcer ses muscles, améliorer son équilibre, sa flexibilité, son endurance cardiovasculaire, stimuler son esprit et développer sa conscience corporelle.",
    redirect: "/reservation",
    btn: "Réservez",
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
        title={tarif.title}
        price={tarif.price}
        text={tarif.text}
        redirect={tarif.redirect}
        btn={tarif.btn}
      />
    </div>
  );
}
