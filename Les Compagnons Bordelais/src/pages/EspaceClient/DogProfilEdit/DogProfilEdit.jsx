import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateDogInfo } from "../../../store/dogSlice";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./DogProfilEdit.scss";
import ScroolToTheTop from "../../../component/ScrollToTheTop/ScroolToTheTop";
import moment from "moment";

export default function DogProfilEdit() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userId, dogName } = useParams();
  const dogInfos = useSelector((state) => state.dog);

  const [editedDogInfos, setEditedDogInfos] = useState({
    ...dogInfos,
  });

  useEffect(() => {
    try {
      axios
        .get(`http://localhost:5000/api/user-dog-infos/${userId}/${dogName}`)
        .then((response) => {
          const data = response.data;

          dispatch(updateDogInfo(data));
          setEditedDogInfos(data);
        });
    } catch (error) {
      console.error("Erreur lors de la requete:", error);
    }
  }, [dispatch, userId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedDogInfos((prevInfos) => ({
      ...prevInfos,
      [name]: value || "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!dogInfos._id) {
      console.error("dogInfos._id est undefined");
      return;
    }

    try {
      const response = await axios.patch(
        `http://localhost:5000/api/infos-dog/${dogInfos._id}`,
        editedDogInfos,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Réponse de la mise à jour :", response.data);
      if (response.status === 200) {
        dispatch(updateDogInfo(response.data.createDogInfos));
        navigate("/espace-client/profil");
        console.log("modificaion reussi");
      }
    } catch (error) {
      console.log(
        "Erreur lors de la modification des informations du chien",
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
            name="birthDate"
            value={moment(editedDogInfos.birthDate).format("DD-MM-YYYY")}
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
              name="tatoo"
              value="Oui"
              checked={editedDogInfos.tatoo === "Oui"}
              onChange={handleInputChange}
            />
            <label htmlFor="oui">Oui</label>

            <input
              type="radio"
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
              name="microchip"
              value="Oui"
              checked={editedDogInfos.microchip === "Oui"}
              onChange={handleInputChange}
            />
            <label htmlFor="oui">Oui</label>
            <input
              type="radio"
              name="microchip"
              value="Non"
              checked={editedDogInfos.microchip === "Non"}
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
              checked={editedDogInfos.medical === "Oui"}
              onChange={handleInputChange}
            />
            <label htmlFor="oui">Oui</label>
            <input
              type="radio"
              name="medical"
              value="Non"
              checked={editedDogInfos.medical === "Non"}
              onChange={handleInputChange}
            />
            <label htmlFor="non">Non</label>
          </div>
          <button type="submit" className="button">
            MODIFIER
          </button>
        </form>
      </div>
    </div>
  );
}
