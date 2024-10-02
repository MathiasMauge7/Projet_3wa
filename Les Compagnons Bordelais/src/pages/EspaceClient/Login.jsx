import { useState } from "react";
import BackgroundText from "../../component/BackgroungText/BackgroundText";
import login from "../../../public/background/login.jpg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import "./style.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = {};

    // Validation de l'adresse e-mail
    if (!email) {
      validationErrors.email = "L'adresse e-mail est requise.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "L'adresse e-mail n'est pas valide.";
    }

    // Validation du mot de passe
    if (!password) {
      validationErrors.password = "Le mot de passe est requis.";
    }

    // Si des erreurs sont trouvées, les afficher
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        const response = await axios.post("http://localhost:5000/api/login", {
          email: email,
          password: password,
        });
        const data = response.data;
        if (response.status === 200) {
          const userId = data.user._id;
          console.log(response);
          navigate(`/espace-client/profil/${userId}`);
        } else {
          console.error("Erreur de connexion: ", data.message);
        }
      } catch (error) {
        console.error("Erreur lors de la connexion:", error);
      }
    }
  };

  return (
    <div className="container">
      <BackgroundText text={"Formulaire d'inscription"} img={login} />
      <Link to={"/espace-client/inscription"} className="link pad">
        Vous n'êtes pas encore inscrit ? Cliquez ici !
      </Link>
      <form onSubmit={handleSubmit} className="contact-form pad">
        {errors.email && <p className="error">{errors.email}</p>}
        <label htmlFor="email">Adresse e-mail:</label>
        <input
          className="input"
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />

        {errors.password && <p className="error">{errors.password}</p>}
        <label htmlFor="password">Mot de passe:</label>
        <input
          className="input"
          type="text"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />

        <button type="submit" className="button">
          CONNEXION
        </button>
      </form>
    </div>
  );
}
