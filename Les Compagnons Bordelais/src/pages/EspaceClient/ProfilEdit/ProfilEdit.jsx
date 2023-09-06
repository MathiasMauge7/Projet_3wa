import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateClientInfo } from "../../../store/clientSlice";
import "./ProfilEdit.scss";

export default function ProfilEdit() {
  const clientInfos = useSelector((state) => state.client);
  const [editedClientInfos, setEditedClientInfos] = useState({
    ...clientInfos,
  });
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedClientInfos((prevInfos) => ({
      ...prevInfos,
      [name]: value,
    }));
  };

  const handleSave = () => {
    dispatch(updateClientInfo(editedClientInfos));
  };
  return (
    <div className="container">
      <div className="client-infos-container pad">
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
        <button onClick={handleSave} className="button">
          MODIFIER
        </button>
      </div>
    </div>
  );
}
