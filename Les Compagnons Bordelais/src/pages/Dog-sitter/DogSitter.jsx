import dogSitter from "../../../public/png/dog-sitter.png";
import Presentation from "../../component/Presentation/Presentation";

export default function DogSitter() {
  const presentation = {
    title: "Découvrez nos différents services",
    text: "Nous pouvons également vous proposer des offres personnalisés pour optimisé l'expérience de votre compagnon !",
    btn: "Contactez-nous",
    img: dogSitter,
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
