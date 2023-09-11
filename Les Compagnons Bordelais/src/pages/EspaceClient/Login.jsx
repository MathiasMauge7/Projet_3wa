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
        const response = await axios.post("http://127.0.0.1:5173/api/login", {
          email,
          password,
        });

        navigate("/espace-client/profil");
        console.log(response.data);
      } catch (error) {
        console.error(error);
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
          type="password"
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
