import "./Profil.scss";
import pp from "../../../../public/img/pp.jpg";
import pdDog from "../../../../public/img/pp-dog.jpg";
import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios"; // Importation d'Axios
import moment from "moment";

export default function Profil() {
  const { userId } = useParams();
  const [userInfos, setUserInfos] = useState({});
  const [userDogInfos, setUserDogInfos] = useState([]);

  // Fonction pour récupérer les infos utilisateur
  const fetchUserInfos = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/users-infos/${userId}`
      );
      setUserInfos(response.data);
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
        `http://localhost:5000/api/user-dog-infos/${userId}`
      );
      setUserDogInfos(response.data);
      console.log(response);
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
            Nom: <span>{userInfos.name}</span>
          </p>
          <p>
            Prenom: <span>{userInfos.lastname}</span>
          </p>
          <p>
            Mail: <span>{userInfos.email}</span>
          </p>
          <p>
            Adresse postal: <span>{userInfos.address}</span>
          </p>
          <p>
            Téléphone: <span>{userInfos.tel}</span>
          </p>
          <NavLink to="./info" className="edit-profil">
            Modifier mon profil
          </NavLink>
        </div>
      </div>
      {userDogInfos.length !== 0 &&
        userDogInfos.map((dog, index) => (
          <div key={index}>
            <div className="dog-container pad-top ">
              <div className="background"></div>
              <div className="dog-pp ">
                <img
                  src={pdDog}
                  alt="photo de profil chien"
                  className="pp-dog"
                />
              </div>
              <div className="dog-content">
                <p>
                  Prénom: <span>{dog.lastname}</span>
                </p>
                <p>
                  Date de naissance:{" "}
                  <span>{moment(dog.birthDate).format("DD-MM-YYYY")}</span>
                </p>
                <p>
                  Age:{" "}
                  <span>
                    {moment().diff(moment(dog.birthDate), "years") < 1
                      ? `${moment().diff(moment(dog.birthDate), "months")} mois`
                      : `${moment().diff(moment(dog.birthDate), "years")} ans`}
                  </span>
                </p>
                <p>
                  Sexe: <span>{dog.sex}</span>
                </p>
                <p>
                  Race: <span>{dog.breed}</span>
                </p>
                <p>
                  Tatouage: <span>{dog.tatoo}</span>
                </p>
                <p>
                  Puce: <span>{dog.microchip}</span>
                </p>
                <p>
                  Traitement médical: <span>{dog.medical}</span>
                </p>
                <NavLink to={`./${dog.lastname}`} className="edit-profil">
                  Modifier le profil de {dog.lastname}
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      <NavLink to={`./nouveau-chien`} className="button">
        Ajouter un chien
      </NavLink>
    </div>
  );
}
