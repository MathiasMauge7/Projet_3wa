import Presentation from "../../../component/Presentation/Presentation";
import fitness from "../../../../public/png/fitness.png";

export default function Fitness() {
  const presentation = {
    title: "Découvrez nos différents services",
    text: "Vous prenez-vous soin de votre corps et de votre santé en vous entraînant régulièrement ? C'est une excellente habitude ! Pourquoi ne pas faire de même pour votre chien en lui proposant des séances de conditionnement physique ? Offrez-lui un programme spécialement conçu pour renforcer ses muscles, améliorer son équilibre, sa flexibilité, son endurance cardiovasculaire, stimuler son esprit et développer sa conscience corporelle.",
    btn: "Contactez-nous",
    img: fitness,
  };
  return (
    <div className="container">
      <Presentation
        title={presentation.title}
        text={presentation.text}
        btn={presentation.btn}
        img={presentation.img}
      />
    </div>
  );
}
