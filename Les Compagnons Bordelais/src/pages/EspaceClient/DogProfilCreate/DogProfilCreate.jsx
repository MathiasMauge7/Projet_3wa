import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import ScroolToTheTop from "../../../component/ScrollToTheTop/ScroolToTheTop";
import "./DogProfilCreate.scss";

export default function DogProfilCreate() {
  const navigate = useNavigate();
  const { userId } = useParams();

  const [editedDogInfos, setEditedDogInfos] = useState({
    client_id: userId,
    lastname: "",
    birthDate: moment().format("DD-MM-YYYY"),
    breed: "",
    sex: "",
    tatoo: "",
    microchip: "",
    medical: "",
    img: "",
  });

  // Mettre à jour les informations en fonction des champs modifiés
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedDogInfos((prevInfos) => ({
      ...prevInfos,
      [name]: value, // Met à jour la propriété correspondante
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost:5000/api/add-dog/`,
        editedDogInfos,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Réponse de l'ajout:", response.data);
      if (response.status === 200) {
        navigate("/espace-client/profil");
        console.log("Ajout reussi");
      }
    } catch (error) {
      console.log("Erreur lors de l'ajout du nouveau chien", error);
    }
  };

  return (
    <div className="container">
      <ScroolToTheTop />
      <div className="client-infos-container pad">
        <form onSubmit={handleSubmit} className="contact-form pad">
          <h1>Infos du profil</h1>
          <label>Prénom:</label>
          <input
            className="input"
            type="text"
            name="lastname"
            onChange={handleInputChange}
          />
          <label>Date de naissance:</label>
          <input
            className="input"
            type="date"
            name="birthDate"
            value={editedDogInfos.birthDate}
            onChange={handleInputChange}
          />
          <label>Race:</label>
          <input
            className="input"
            type="text"
            name="breed"
            onChange={handleInputChange}
          />
          <label>Sexe:</label>
          <div className="radio-container">
            <input
              type="radio"
              id="male"
              name="sex"
              value="Male"
              onChange={handleInputChange}
            />
            <label htmlFor="male">Mâle</label>

            <input
              type="radio"
              id="female"
              name="sex"
              value="Femelle"
              onChange={handleInputChange}
            />
            <label htmlFor="female">Femelle</label>
          </div>
          <label>Tatouage:</label>
          <div className="radio-container">
            <input
              type="radio"
              name="tatoo"
              value="Oui"
              onChange={handleInputChange}
            />
            <label htmlFor="oui">Oui</label>

            <input
              type="radio"
              name="tatoo"
              value="Non"
              onChange={handleInputChange}
            />
            <label htmlFor="non">Non</label>
          </div>
          <label>Puce:</label>
          <div className="radio-container">
            <input
              type="radio"
              name="microchip"
              value="Oui"
              onChange={handleInputChange}
            />
            <label htmlFor="oui">Oui</label>
            <input
              type="radio"
              name="microchip"
              value="Non"
              onChange={handleInputChange}
            />
            <label htmlFor="non">Non</label>
          </div>
          <label>Traitement médical:</label>
          <div className="radio-container" style={{ marginBottom: "20px" }}>
            <input
              type="radio"
              name="medical"
              value="Oui"
              onChange={handleInputChange}
            />
            <label htmlFor="oui">Oui</label>
            <input
              type="radio"
              name="medical"
              value="Non"
              onChange={handleInputChange}
            />
            <label htmlFor="non">Non</label>
          </div>
          <button type="submit" className="button">
            AJOUTER
          </button>
        </form>
      </div>
    </div>
  );
}
