import "./Profil.scss";
import pp from "../../../../public/img/pp.jpg";
import pdDog from "../../../../public/img/pp-dog.jpg";
import { useSelector } from "react-redux";

export default function Profil() {
  const clientInfos = useSelector((state) => state.client);

  return (
    <div className="container marg-top">
      <div className="client-container">
        <div className="pp-container">
          <img src={pp} alt="photo de profil" className="photo-profil" />
        </div>
        <div className="client-content sectionContainer">
          <p>
            Nom: <span>{clientInfos.name}</span>
          </p>
          <p>
            Prenom: <span>{clientInfos.lastname}</span>
          </p>
          <p>
            Mail: <span>{clientInfos.mail}</span>
          </p>
          <p>
            Adresse postal: <span>{clientInfos.address}</span>
          </p>
          <p>
            Téléphone: <span>{clientInfos.tel}</span>
          </p>
          <p>
            <i>Modifier mon profil</i>
          </p>
        </div>
      </div>
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
            Date de naissance: <span>21/11/2019</span>
          </p>
          <p>
            Age: <span>3</span>ans
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
          <p>
            <i>Modifier le profil de Pablo</i>
          </p>
        </div>
      </div>
    </div>
  );
}
