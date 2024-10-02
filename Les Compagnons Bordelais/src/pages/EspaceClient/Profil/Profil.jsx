import "./Profil.scss";
import pp from "../../../../public/img/pp.jpg";
import pdDog from "../../../../public/img/pp-dog.jpg";
import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios"; // Importation d'Axios

export default function Profil() {
  const { userId } = useParams();
  const [usersInfos, setUsersInfos] = useState({});
  const [usersDogInfos, setUsersDogInfos] = useState({});

  // Fonction pour récupérer les infos utilisateur
  const fetchUserInfos = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:5000/api/users-infos/${userId}`
      );
      setUsersInfos(response.data);
      console.log(response);
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des informations de l'utilisateur:",
        error
      );
    }
  };

  // Fonction pour récupérer les infos du chien
  const fetchDogInfos = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:5000/api/users-dog-infos/${userId}`
      );
      setUsersDogInfos(response.data);
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des informations du chien:",
        error
      );
    }
  };

  // Utilisation de useEffect pour appeler les fonctions dès le chargement du composant
  useEffect(() => {
    fetchUserInfos();
    fetchDogInfos();
  }, [userId]); // L'effet se déclenche à chaque fois que l'ID utilisateur change

  return (
    <div className="container marg-top">
      <div className="client-container">
        <div className="pp-container">
          <img src={pp} alt="photo de profil" className="photo-profil" />
        </div>
        <div className="client-content sectionContainer">
          <p>
            Nom: <span>{usersInfos.name}</span>
          </p>
          <p>
            Prenom: <span>{usersInfos.lastname}</span>
          </p>
          <p>
            Mail: <span>{usersInfos.mail}</span>
          </p>
          <p>
            Adresse postal: <span>{usersInfos.address}</span>
          </p>
          <p>
            Téléphone: <span>{usersInfos.tel}</span>
          </p>
          <NavLink to="./info" className="edit-profil">
            Modifier mon profil
          </NavLink>
        </div>
        {/* <div className="client-content sectionContainer">
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
        </div> */}
      </div>
      <div className="dog-container pad-top ">
        <div className="background"></div>
        <div className="dog-pp ">
          <img src={pdDog} alt="photo de profil chien" className="pp-dog" />
        </div>
        <div className="dog-content">
          <p>
            Prénom: <span>{usersDogInfos.lastname}</span>
          </p>
          <p>
            Date de naissance: <span>{usersDogInfos.birthDate}</span>
          </p>
          <p>
            Age: <span>calcul </span>ans
          </p>
          <p>
            Sexe: <span>{usersDogInfos.sex}</span>
          </p>
          <p>
            Race: <span>{usersDogInfos.breed}</span>
          </p>
          <p>
            Tatouage: <span>{usersDogInfos.tatoo}</span>
          </p>
          <p>
            Puce: <span>{usersDogInfos.microchip}</span>
          </p>
          <p>
            Traitement médical: <span>{usersDogInfos.medical}</span>
          </p>
          <p>
            Particularité à nous spécifier: <span>Oui quelques trucs..</span>
          </p>
          <NavLink to="./chiens-info" className="edit-profil">
            Modifier le profil de {usersDogInfos.lastname}
          </NavLink>
        </div>
      </div>
    </div>
  );
}
