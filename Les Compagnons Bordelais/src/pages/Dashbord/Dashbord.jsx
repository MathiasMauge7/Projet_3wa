import { useEffect, useState } from "react";
import "./Dashbord.scss";

export default function Dashbord() {
  const [users, setUsers] = useState([]);
  const [usersInfos, setUsersInfos] = useState([]);
  const [usersDogInfos, setUsersDogInfos] = useState([]);
  const [contactFormulaire, setContactFormulaire] = useState([]);
  const [selectId, setSelectId] = useState([]);

  console.log(usersInfos);

  console.log(selectId);
  useEffect(() => {
    fetch("http://127.0.0.1:4200/api/formulaire-contact", { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        setContactFormulaire(data);
      })
      .catch((error) => {
        console.log(
          "Erreur lors de la récupération des formualire de contact :",
          error
        );
      });

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
  }, [selectId]);

  return (
    <div className="container">
      <div className="pad card">
        <h3 className="marg-bottom">FORMULAIRE DE CONTACT</h3>
        {contactFormulaire.length >= 0 ? (
          contactFormulaire.map((formulaire) => (
            <ul className="marg-bottom" key={formulaire._id}>
              <li>Nom: {formulaire.name}</li>
              <li>Mail: {formulaire.mail}</li>
              <li>Numéro de téléphone: {formulaire.tel}</li>
              <li>Sujet: {formulaire.sujet}</li>
              <li>Message: {formulaire.message}</li>
            </ul>
          ))
        ) : (
          <p>Aucune formulaire de contact n'a été trouvée.</p>
        )}
      </div>
      <div className="card">
        <h3 className="marg-bottom">LISTE DES UTILISATEURS</h3>
        <ul>
          {users.length > 0 ? (
            users.map((user) => (
              <li
                className="marg-bottom pointerTransform"
                key={user._id}
                onClick={() => setSelectId(user._id)}
              >
                {user.email}
              </li>
            ))
          ) : (
            <p>Aucun utilisateur n'a été trouvée.</p>
          )}
        </ul>
      </div>
      <div className="card">
        <h3 className="marg-bottom">INFOS DES UTILISATEURS</h3>

        {usersInfos.length > 0 ? (
          usersInfos.map((infos) => (
            <ul className="marg-bottom" key={infos.client_id}>
              <li>Nom: {infos.name}</li>
              <li>Prénom: {infos.lastname}</li>
              <li>Adresse: {infos.address}</li>
              <li>Numéro de téléphone: {infos.tel}</li>
            </ul>
          ))
        ) : (
          <p>Aucune information sur les utilisateurs n'a été trouvée.</p>
        )}
      </div>
      <div className="card">
        <h3 className="marg-bottom">INFOS CHIEN DES UTILISATEURS</h3>
        {usersDogInfos.length > 0 ? (
          usersDogInfos.map((dogInfos) => (
            <ul className="marg-bottom" key={dogInfos.client_id}>
              <li>Nom: {dogInfos.lastname}</li>
              <li>Age: {dogInfos.birthDate}</li>
              <li>Râce: {dogInfos.breed}</li>
              <li>Sexe: {dogInfos.sex}</li>
              <li>Pucé: {dogInfos.microchip}</li>
              <li>Tatoué: {dogInfos.tatoo}</li>
              <li>Spécificité médiacale: {dogInfos.medical}</li>
            </ul>
          ))
        ) : (
          <p>Aucune information sur les utilisateurs n'a été trouvée.</p>
        )}
      </div>
    </div>
  );
}
