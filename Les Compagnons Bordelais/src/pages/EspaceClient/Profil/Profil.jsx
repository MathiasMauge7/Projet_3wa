import "./Profil.scss";
import pp from "../../../../public/img/pp.jpg";
import pdDog from "../../../../public/img/pp-dog.jpg";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Profil() {
  const [usersInfos, setUsersInfos] = useState([]);
  const [users, setUsers] = useState([]);
  const [usersDogInfos, setUsersDogInfos] = useState([]);
  // const clientInfos = useSelector((state) => state.client);
    const clientDogInfos = useSelector((state) => state.dog);

    useEffect(() => {

      fetch("http://127.0.0.1:4200/api/users", { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
  
        if (data.length > 0) {
          fetch(`http://127.0.0.1:4200/api/users-infos/${selectId}`, {
            method: "GET",
          })
            .then((response) => response.json())
            .then((data) => {
              setUsersInfos([data]);
            })
            .catch((error) => {
              console.log(
                "Erreur lors de la récupération des informations des utilisateurs :",
                error
              );
            });
  
          fetch(`http://127.0.0.1:4200/api/users-dog-infos/${selectId}`, {
            method: "GET",
          })
            .then((response) => response.json())
            .then((data) => {
              setUsersDogInfos([data]);
            })
            .catch((error) => {
              console.log(
                "Erreur lors de la récupération des informations des chien des utilisateurs :",
                error
              );
            });
        }
      })
      .catch((error) => {
        console.log("Erreur lors de la récupération des utilisateurs :", error);
      });
          },[])  
   
  

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
