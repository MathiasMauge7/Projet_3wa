import spa from "../../../../public/png/spa.png";
import fitness from "../../../../public/background/fitness.jpg";
import promenade from "../../../../public/background/promenade.jpg";

import Presentation from "../../../component/Presentation/Presentation";
import PreviousNext from "../../../component/PreviousNext/PreviousNext";

export default function Spa() {
  const presentation = {
    title: "Découvrez nos différents services",
    text: "Nous pouvons également vous proposer des offres personnalisés pour optimisé l'expérience de votre compagnon !",
    btn: "Contactez-nous",
    img: spa,
  };
  return (
    <div className="container">
      <Presentation
        title={presentation.title}
        text={presentation.text}
        btn={presentation.btn}
        img={presentation.img}
      />

      <PreviousNext
        img1={promenade}
        text1={"Promenade"}
        click1={"/services/promenade"}
        img2={fitness}
        text2={"Fitness"}
        click2={"/services/fitness"}
      />
    </div>
  );
}
