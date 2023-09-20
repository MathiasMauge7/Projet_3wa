import Card from "../../component/Card/Card";
import fitness from "../../../public/photo-carousel/fitness.jpg";
import promenade2 from "../../../public/photo-carousel/promenade.jpg";
import promenade from "../../../public/png/promenade.png";
import spa from "../../../public/photo-carousel/spa.jpg";
import club from "../../../public/photo-carousel/club.jpg";
import "./services.scss";
import Presentation from "../../component/Presentation/Presentation";

export default function Services() {
  const text = [
    {
      img: fitness,
      txt1: "Fitness Canin",
      txt2: "Conditionnement physique",
      redirect: "/services/fitness",
    },
    {
      img: promenade2,
      txt1: "Balade",
      txt2: "Chemin de fôret, parc",
      redirect: "/services/promenade",
    },
    {
      img: spa,
      txt1: "Toilettage",
      txt2: "Soins et mise en beauté",
      redirect: "/services/spa",
    },
    {
      img: club,
      txt1: "Garderie pour chien",
      txt2: "Formules personnalisés",
      redirect: "/garderie",
    },
  ];
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

      {text.map((text, i) => (
        <Card
          key={i}
          img={text.img}
          text1={text.txt1}
          text2={text.txt2}
          redirect={text.redirect}
          btn="En savoir plus"
        />
      ))}
    </div>
  );
}
