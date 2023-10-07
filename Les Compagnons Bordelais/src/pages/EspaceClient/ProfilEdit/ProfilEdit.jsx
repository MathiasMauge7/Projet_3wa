import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateClientInfo } from "../../../store/clientSlice";
import { useNavigate } from "react-router-dom";
import "./ProfilEdit.scss";
import ScroolToTheTop from "../../../component/ScrollToTheTop/ScroolToTheTop";

export default function ProfilEdit() {
  const clientInfos = useSelector((state) => state.client);
  const [editedClientInfos, setEditedClientInfos] = useState({
    ...clientInfos,
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
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
}, [third])



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
      const response = await fetch("http://127.0.0.1:5173/api/infos-client", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ editedClientInfos }),
      });
      if (response.status === 200) {
        const responseData = await response.json();
        console.log(responseData);
        // dispatch(updateClientInfo(responseData.createdInfosClient));
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
      <ScroolToTheTop />

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
          <input
            type="hidden"
            name="clientId"
            value={editedClientInfos.clientId}
          />
          <button type="submit" className="button">
            MODIFIER
          </button>
        </form>
      </div>
    </div>
  );
}
