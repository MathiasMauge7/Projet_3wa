import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateClientDogInfo } from "../../../store/dogReducer";
import "./DogProfilEdit.scss";

export default function DogProfilEdit() {
  const clientDogInfos = useSelector((state) => state.dog);
  const [editedclientDogInfos, setEditedClientDogInfos] = useState({
    ...clientDogInfos,
  });

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { dogName, value } = e.target;
    setEditedClientDogInfos((prevInfos) => ({
      ...prevInfos,
      [dogName]: value,
    }));
  };

  const handleSave = () => {
    dispatch(updateClientDogInfo(editedclientDogInfos));
  };

  return (
    <div className="container">
      <div className="client-infos-container pad">
        <h1>Infos du profil</h1>
        <label>Prénom:</label>
        <input
          className="input"
          type="text"
          name="lastname"
          value={editedclientDogInfos.lastname}
          onChange={handleInputChange}
        />
        <label>Date de naissance:</label>
        <input
          className="input"
          type="text"
          name="birth-date"
          value={editedclientDogInfos.birthDate}
          onChange={handleInputChange}
        />
        <label>Sexe:</label>
        <input
          className="input"
          type="text"
          name="sex"
          value={editedclientDogInfos.sex}
          onChange={handleInputChange}
        />
        <label>Race:</label>
        <input
          className="input"
          type="text"
          name="breed"
          value={editedclientDogInfos.breed}
          onChange={handleInputChange}
        />
        <label>Tatouage:</label>
        <input
          className="input"
          type="text"
          name="tatoo"
          value={editedclientDogInfos.tatoo}
          onChange={handleInputChange}
        />
        <label>Puce:</label>
        <input
          className="input"
          type="text"
          name="microchip"
          value={editedclientDogInfos.microchip}
          onChange={handleInputChange}
        />
        <label>Traitement médical:</label>
        <input
          className="input"
          type="text"
          name="medical"
          value={editedclientDogInfos.medical}
          onChange={handleInputChange}
        />
        <button onClick={handleSave} className="button">
          MODIFIER
        </button>
      </div>
    </div>
  );
}
