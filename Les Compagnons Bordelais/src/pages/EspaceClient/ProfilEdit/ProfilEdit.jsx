import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateClientInfo } from "../../../store/clientSlice";
import { useNavigate, useParams } from "react-router-dom";
import "./ProfilEdit.scss";
import ScroolToTheTop from "../../../component/ScrollToTheTop/ScroolToTheTop";
import axios from "axios";

export default function ProfilEdit() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userId } = useParams(); // Récupère l'ID de l'utilisateur depuis l'URL
  const clientInfos = useSelector((state) => state.client);

  const [editedClientInfos, setEditedClientInfos] = useState({
    ...clientInfos,
  });

  useEffect(() => {
    try {
      axios
        .get(`http://localhost:5000/api/users-infos/${userId}`)
        .then((response) => {
          const data = response.data;

          dispatch(updateClientInfo(data));
          setEditedClientInfos(response.data);
        });
    } catch (error) {
      console.log(
        "Erreur lors de la récupération des informations de l'utilisateur :",
        error
      );
    }
  }, [dispatch, userId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedClientInfos((prevInfos) => ({
      ...prevInfos,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userId) {
      console.error("User ID est undefined");
      return;
    }

    try {
      const response = await axios.patch(
        `http://localhost:5000/api/infos-client/${clientInfos._id}`,
        editedClientInfos,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Réponse de la mise à jour :", response.data);
      if (response.status === 200) {
        dispatch(updateClientInfo(response.data.updatedInfosClient)); // Mise à jour du store Redux
        navigate("/espace-client/profil"); // Redirige vers le profil après succès
        console.log("Modification réussie");
      }
    } catch (error) {
      console.error(
        "Erreur lors de la requête PATCH :",
        error.response ? error.response.data : error.message
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
            value={editedClientInfos.name || ""}
            onChange={handleInputChange}
          />
          <label>Prénom:</label>
          <input
            className="input"
            type="text"
            name="lastname"
            value={editedClientInfos.lastname || ""}
            onChange={handleInputChange}
          />
          <label>Mail:</label>
          <input
            className="input"
            type="text"
            name="mail"
            value={editedClientInfos.email || ""}
            onChange={handleInputChange}
          />
          <label>Adresse postal:</label>
          <input
            className="input"
            type="text"
            name="address"
            value={editedClientInfos.address || ""}
            onChange={handleInputChange}
          />
          <label>Téléphone:</label>
          <input
            className="input"
            type="text"
            name="tel"
            value={editedClientInfos.tel || ""}
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
