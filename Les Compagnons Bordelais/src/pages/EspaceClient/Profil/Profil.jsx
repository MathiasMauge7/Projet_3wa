import "./Profil.scss";
import pp from "../../../../public/img/pp.jpg";
import pdDog from "../../../../public/img/pp-dog.jpg";

export default function Profil() {
  const DogProfil = () => {
    return (
      <div className="dog-container pad-top ">
        <div className="background"></div>
        <div className="dog-pp ">
          <img src={pdDog} alt="photo de profil chien" className="pp-dog" />
        </div>
        <div className="dog-content">
          <p>
            Prénom: <span>Pablo</span>
          </p>
          <p>
            Age: <span>3</span> ans
          </p>
          <p>
            Sexe: <span>Mâle</span>
          </p>
          <p>
            Race: <span>Samoyède</span>
          </p>
          <p>
            Pucé: <span>Oui</span>
          </p>
          <p>
            Vacciné: <span>Oui</span>
          </p>
          <p>
            Traitement médical: <span>Aucun</span>
          </p>
          <p>
            Particularité à nous spécifier:{" "}
            <span>Oui des trucs mais je sais pas quoi encore.</span>
          </p>
        </div>
      </div>
    );
  };
  return (
    <div className="container marg-top">
      <div className="client-container">
        <div className="pp-container">
          <img src={pp} alt="photo de profil" className="photo-profil" />
        </div>
        <div className="client-content sectionContainer">
          <p>
            Nom: <span>Maugé</span>
          </p>
          <p>
            Prenom: <span>Mathias</span>
          </p>
          <p>
            Mail: <span>mathias.mauge@hotmail.fr</span>
          </p>
          <p>
            Adresse postal: <span>30 rue de bigeau 33290 parempuyre</span>
          </p>
          <p>
            Téléphone: <span>06 66 50 84 07</span>
          </p>
        </div>
      </div>
      <DogProfil />
    </div>
  );
}
