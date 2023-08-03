import dogSitter from "../../../public/png/dog-sitter.png";
import Card from "../../component/Card/Card";
import Presentation from "../../component/Presentation/Presentation";
import img1 from "../../../public/img/garderie1.jpg";
import img2 from "../../../public/img/garderie2.jpg";
import "./Dogsitter.scss";
import paw from "../../../public/logo/paw-solid.svg";
import shieldDog from "../../../public/logo/shield-dog-solid.svg";

export default function DogSitter() {
  const presentation = {
    title: "Découvrez nos différents services",
    text: "Nous pouvons également vous proposer des offres personnalisés pour optimisé l'expérience de votre compagnon !",
    btn: "Contactez-nous",
    img: dogSitter,
  };

  const cardContent = {
    personnalise: {
      img: img1,
      text1: "Garderie formule personnalisé",
      text2:
        "Ce programme s'adresse aux chiens qui privilégient une approche personnalisée et qui prospèrent au sein de petits groupe.",
    },
    groupe: {
      img: img2,
      text1: "Garderie formule de groupe",
      text2:
        "Ce programme est conçu pour les jeunes chiens ainsi que pour les chiens adultes actifs et sociables, affichant un niveau d'énergie élevé.",
    },

    btn: "reserver right now",
    redirect: "/contact",
  };
  return (
    <div className="container">
      <Presentation
        title={presentation.title}
        text={presentation.text}
        btn={presentation.btn}
        img={presentation.img}
      />
      <section>
        <Card
          img={cardContent.personnalise.img}
          text1={cardContent.personnalise.text1}
          text2={cardContent.personnalise.text2}
          redirect={cardContent.redirect}
          btn={cardContent.btn}
        />
        <Card
          img={cardContent.groupe.img}
          text1={cardContent.groupe.text1}
          text2={cardContent.groupe.text2}
          redirect={cardContent.redirect}
          btn={cardContent.btn}
        />
      </section>
      <section>
        <div className="card">
          <img className="tarif-logo" src={shieldDog} alt="shieldDog" />
          <div className="text-container">
            <h3>Formule personnalisé</h3>
            <h4>A la carte</h4>
            <p>
              50€ la journée <br /> 35€ la demi-journée
            </p>
            <h4>Au forfait</h4>
            <p>430€ / 10 jours</p>
          </div>
        </div>
        <div className="card">
          <img className="tarif-logo" src={paw} alt="paw" />

          <div className="text-container">
            <h3>Formule de groupe</h3>
            <h4>A la carte</h4>
            <p>
              35€ la journée <br /> 25€ la demi-journée
            </p>
            <h4>Au forfait</h4>
            <p>300€ / 10 jours</p>
          </div>
        </div>
      </section>
    </div>
  );
}
