import dogSitter from "../../../public/png/dog-sitter.png";
import Card from "../../component/Card/Card";
import Presentation from "../../component/Presentation/Presentation";
import img1 from "../../../public/img/garderie1.jpg";
import img2 from "../../../public/img/garderie2.jpg";
import "./Dogsitter.scss";

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
      text1: <b>Garderie formule personnalisé</b>,
      text2:
        "Ce programme s'adresse aux chiens qui privilégient une approche personnalisée et qui prospèrent au sein de petits groupe.",
    },
    groupe: {
      img: img2,
      text1: <b>Garderie formule de groupe</b>,
      text2:
        "Ce programme est conçu pour les jeunes chiens ainsi que pour les chiens adultes actifs et sociables, affichant un niveau d'énergie élevé.",
    },

    btn: "Réserver",
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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M269.4 2.9C265.2 1 260.7 0 256 0s-9.2 1-13.4 2.9L54.3 82.8c-22 9.3-38.4 31-38.3 57.2c.5 99.2 41.3 280.7 213.6 363.2c16.7 8 36.1 8 52.8 0C454.7 420.7 495.5 239.2 496 140c.1-26.2-16.3-47.9-38.3-57.2L269.4 2.9zM160.9 286.2c4.8 1.2 9.9 1.8 15.1 1.8c35.3 0 64-28.7 64-64V160h44.2c12.1 0 23.2 6.8 28.6 17.7L320 192h64c8.8 0 16 7.2 16 16v32c0 44.2-35.8 80-80 80H272v50.7c0 7.3-5.9 13.3-13.3 13.3c-1.8 0-3.6-.4-5.2-1.1l-98.7-42.3c-6.6-2.8-10.8-9.3-10.8-16.4c0-2.8 .6-5.5 1.9-8l15-30zM160 160h40 8v32 32c0 17.7-14.3 32-32 32s-32-14.3-32-32V176c0-8.8 7.2-16 16-16zm128 48a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z" />
          </svg>
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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z" />
          </svg>
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
