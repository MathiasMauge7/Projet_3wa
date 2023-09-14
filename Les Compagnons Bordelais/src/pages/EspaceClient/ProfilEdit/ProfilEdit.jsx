import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateClientInfo } from "../../../store/clientSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./ProfilEdit.scss";

export default function ProfilEdit() {
  const clientInfos = useSelector((state) => state.client);
  const [editedClientInfos, setEditedClientInfos] = useState({
    ...clientInfos,
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedClientInfos((prevInfos) => ({
      ...prevInfos,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(updateClientInfo(editedClientInfos));
    console.log(editedClientInfos);
    try {
      const response = await axios.post(
        "http://127.0.0.1:5173/api/infos-client",
        {
          editedClientInfos,
        }
      );
      if (response.status === 200) {
        dispatch(updateClientInfo(response.data.createdInfosClient));
        console.log("modification reussi");
        navigate("/espace-client/profil");
      }
    } catch (error) {
      console.log(
        "Erreur lors de la modifications des informations du profil client",
        error
      );
    }
  };
  return (
    <div className="container">
      <div className="client-infos-container pad">
        <form onSubmit={handleSubmit} className="contact-form pad">
          <h1>Infos du profil</h1>
          <label>Nom:</label>
          <input
            className="input"
            type="text"
            name="name"
            value={editedClientInfos.name}
            onChange={handleInputChange}
          />
          <label>Prénom:</label>
          <input
            className="input"
            type="text"
            name="lastname"
            value={editedClientInfos.lastname}
            onChange={handleInputChange}
          />
          <label>Mail:</label>
          <input
            className="input"
            type="text"
            name="mail"
            value={editedClientInfos.mail}
            onChange={handleInputChange}
          />
          <label>Adresse postal:</label>
          <input
            className="input"
            type="text"
            name="address"
            value={editedClientInfos.address}
            onChange={handleInputChange}
          />
          <label>Téléphone:</label>
          <input
            className="input"
            type="text"
            name="tel"
            value={editedClientInfos.tel}
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
