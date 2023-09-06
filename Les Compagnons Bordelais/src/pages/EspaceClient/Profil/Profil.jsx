import "./Profil.scss";
import pp from "../../../../public/img/pp.jpg";
import pdDog from "../../../../public/img/pp-dog.jpg";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

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
          <NavLink to="./info" className="edit-profil">
            Modifier mon profil
          </NavLink>
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
            Age: <span>calcul </span>ans
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
            Particularité à nous spécifier: <span>Oui quelques trucs..</span>
          </p>
          <NavLink to="./chiens-info" className="edit-profil">
            Modifier le profil de {clientDogInfos.lastname}
          </NavLink>
        </div>
      </div>
    </div>
  );
}
