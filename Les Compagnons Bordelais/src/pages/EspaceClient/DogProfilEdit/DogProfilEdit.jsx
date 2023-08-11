import React from "react";

export default function DogProfilEdit() {
  return (
    <div className="container">
      <div className="client-infos-container pad">
        <h1>Infos du profil</h1>
        <label>Prénom:</label>
        <input
          className="input"
          type="text"
          name="lastname"
          value={editedClientInfos.lastname}
          onChange={handleInputChange}
        />
        <label>Date de naissance:</label>
        <input
          className="input"
          type="text"
          name="birth-date"
          value={editedClientInfos.birthDate}
          onChange={handleInputChange}
        />
        <label>Age:</label>
        <input
          className="input"
          type="text"
          name="age"
          value={editedClientInfos.age}
          onChange={handleInputChange}
        />
        <label>Sexe:</label>
        <input
          className="input"
          type="text"
          name="sex"
          value={editedClientInfos.sex}
          onChange={handleInputChange}
        />
        <label>Race:</label>
        <input
          className="input"
          type="text"
          name="breed"
          value={editedClientInfos.breed}
          onChange={handleInputChange}
        />
        <label>Tatouage:</label>
        <input
          className="input"
          type="text"
          name="tatoo"
          value={editedClientInfos.tatoo}
          onChange={handleInputChange}
        />
        <label>Puce:</label>
        <input
          className="input"
          type="text"
          name="microchip"
          value={editedClientInfos.microchip}
          onChange={handleInputChange}
        />
        <label>Traitement médical:</label>
        <input
          className="input"
          type="text"
          name="medical"
          value={editedClientInfos.medical}
          onChange={handleInputChange}
        />
        <button onClick={handleSave} className="button">
          MODIFIER
        </button>
      </div>
    </div>
  );
}
