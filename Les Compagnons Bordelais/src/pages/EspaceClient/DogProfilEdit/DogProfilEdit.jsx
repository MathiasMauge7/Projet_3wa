import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateDogInfo } from "../../../store/dogSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./DogProfilEdit.scss";
import ScroolToTheTop from "../../../component/ScrollToTheTop/ScroolToTheTop";

export default function DogProfilEdit() {
  const DogInfos = useSelector((state) => state.dog);
  const [editedDogInfos, setEditedDogInfos] = useState({
    ...DogInfos,
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedDogInfos((prevInfos) => ({
      ...prevInfos,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(editedDogInfos);
    dispatch(updateDogInfo(editedDogInfos));
    try {
      const response = await axios.post("http://127.0.0.1:5173/api/infos-dog", {
        editedDogInfos,
      });
      if (response.status === 200) {
        dispatch(updateDogInfo(response.data.createDogInfos));
        console.log("modificaion reussi");
        navigate("/espace-client/profil");
      }
    } catch (error) {
      console.log(
        "Erreur lors de la modification des informations du chien",
        error
      );
    }
  };

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Obtient le mois (de 0 à 11), En utilisant la méthode padStart, nous nous assurons que la chaîne de caractères résultante a une longueur minimale de 2 caractères. Si le mois est inférieur à 10, un zéro sera ajouté au début de la chaîne pour le faire passer à deux caractères.
  const day = String(currentDate.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;

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
            value={editedDogInfos.lastname}
            onChange={handleInputChange}
          />
          <label>Date de naissance:</label>
          <input
            className="input"
            type="date"
            name="birth-date"
            value={editedDogInfos.birthDate}
            max={formattedDate}
            onChange={handleInputChange}
          />
          <label>Race:</label>
          <input
            className="input"
            type="text"
            name="breed"
            value={editedDogInfos.breed}
            onChange={handleInputChange}
          />
          <label>Sexe:</label>
          <div className="radio-container">
            <input
              type="radio"
              id="male"
              name="sex"
              value="Male"
              checked={editedDogInfos.sex === "Male"}
              onChange={handleInputChange}
            />
            <label htmlFor="male">Mâle</label>

            <input
              type="radio"
              id="female"
              name="sex"
              value="Femelle"
              checked={editedDogInfos.sex === "Femelle"}
              onChange={handleInputChange}
            />
            <label htmlFor="female">Femelle</label>
          </div>
          <label>Tatouage:</label>
          <div className="radio-container">
            <input
              type="radio"
              id="male"
              name="tatoo"
              value="Oui"
              checked={editedDogInfos.tatoo === "Oui"}
              onChange={handleInputChange}
            />
            <label htmlFor="oui">Oui</label>

            <input
              type="radio"
              id="female"
              name="tatoo"
              value="Non"
              checked={editedDogInfos.tatoo === "Non"}
              onChange={handleInputChange}
            />
            <label htmlFor="non">Non</label>
          </div>
          <label>Puce:</label>
          <div className="radio-container">
            <input
              type="radio"
              id="male"
              name="microchip"
              value="Oui"
              checked={editedDogInfos.microchip === "Oui"}
              onChange={handleInputChange}
            />
            <label htmlFor="oui">Oui</label>

            <input
              type="radio"
              id="female"
              name="microchip"
              value="Non"
              checked={editedDogInfos.microchip === "Non"}
              onChange={handleInputChange}
            />
            <label htmlFor="non">Non</label>
          </div>
          <label>Traitement médical:</label>
          <input
            className="input"
            type="text"
            name="medical"
            value={editedDogInfos.medical}
            onChange={handleInputChange}
          />
          <button type="submit" className="button">
            MODIFIER
          </button>
        </form>
      </div>
    </div>
  );
}
