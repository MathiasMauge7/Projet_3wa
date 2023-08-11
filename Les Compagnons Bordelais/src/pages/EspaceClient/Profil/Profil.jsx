import "./Profil.scss";
import pp from "../../../../public/img/pp.jpg";
import pdDog from "../../../../public/img/pp-dog.jpg";
import { useSelector } from "react-redux";

export default function Profil() {
  const clientInfos = useSelector((state) => state.client);
  const clientDogInfos = useSelector((state) => state.dog);

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
            Prénom: <span>{clientDogInfos.lastname}</span>
          </p>
          <p>
            Date de naissance: <span>{clientDogInfos.birthDate}</span>
          </p>
          <p>
            Age: <span>{clientDogInfos.age}</span>ans
          </p>
          <p>
            Sexe: <span>{clientDogInfos.sex}</span>
          </p>
          <p>
            Race: <span>{clientDogInfos.breed}</span>
          </p>
          <p>
            Tatouage: <span>{clientDogInfos.tatoo}</span>
          </p>
          <p>
            Puce: <span>{clientDogInfos.microchip}</span>
          </p>
          <p>
            Traitement médical: <span>{clientDogInfos.medical}</span>
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
