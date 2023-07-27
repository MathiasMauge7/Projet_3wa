import Card from "../../component/Card/Card";
import fitness from "../../../public/photo-carousel/fitness.jpg";
import promenade from "../../../public/photo-carousel/promenade2.jpg";
import spa from "../../../public/photo-carousel/spa.jpg";
import club from "../../../public/photo-carousel/club.jpg";

export default function Services() {
  const text = [
    {
      img: fitness,
      txt1: "Fitness Canin",
      txt2: "Conditionnement physique",
    },
    {
      img: promenade,
      txt1: "Balade",
      txt2: "Chemin de fôret, parc",
    },
    {
      img: spa,
      txt1: "Toilettage",
      txt2: "Soins et mise en beauté",
    },
    {
      img: club,
      txt1: "Garderie pour chien",
      txt2: "Formules personnalisés",
    },
  ];
  return (
    <div className="top20vh">
      {text.map((text, i) => (
        <Card
          key={i}
          img={text.img}
          text1={text.txt1}
          text2={text.txt2}
          btn="En savoir plus"
        />
      ))}
    </div>
  );
}
