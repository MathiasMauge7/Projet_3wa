import promenade from "../../../../public/png/promenade1.png";
import Presentation from "../../../component/Presentation/Presentation";
import fitness from "../../../../public/background/fitness.jpg";
import spa from "../../../../public/background/spa.jpg";
import PreviousNext from "../../../component/PreviousNext/PreviousNext";

export default function DogWalker() {
  const presentation = {
    title: "Découvrez nos différents services",
    text: "Nous pouvons également vous proposer des offres personnalisés pour optimisé l'expérience de votre compagnon !",
    btn: "Contactez-nous",
    img: promenade,
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
        img1={fitness}
        text1={"Fitness"}
        click1={"/services/fitness"}
        img2={spa}
        text2={"Spa"}
        click2={"/services/spa"}
      />
    </div>
  );
}
