import { useState } from "react";
import BackgroundText from "../../component/BackgroungText/BackgroundText";
import signIn from "../../../public/background/signin.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import "./style.scss";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
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
    } else if (password.length < 6) {
      validationErrors.password =
        "Le mot de passe doit comporter au moins 6 caractères.";
    } else if (!/(?=.*[A-Z])(?=.*\d)/.test(password)) {
      validationErrors.password =
        "Le mot de passe doit contenir au moins une majuscule et un chiffre.";
    }

    // Validation de la confirmation du mot de passe
    if (!confirmPassword) {
      validationErrors.confirmPassword =
        "La confirmation du mot de passe est requise.";
    } else if (confirmPassword !== password) {
      validationErrors.confirmPassword = "Le mot de passe ne correspond pas.";
    }

    // Si des erreurs sont trouvées, les afficher
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        const response = await axios.post("http://localhost:5173/register", {
          email,
          password,
        });
        if (response.status === 201) {
          console.log("Inscription réussie front");
        } else {
          console.log(response);
        }
      } catch (error) {
        console.log("Erreur lors de l'inscription", error);
      }
    }
  };

  return (
    <div className="container">
      <BackgroundText text={"Formulaire d'inscription"} img={signIn} />
      <Link to={"/espace-client/connexion"} className="link pad">
        Vous êtes déjà inscrit ? Connectez-vous en cliquant ici !
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
          value={password} // attention ! il s'affiche dans l'inspecteur
          onChange={handlePasswordChange}
        />
        {errors.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}
        <label htmlFor="confirmPassword">Confirmer le mot de passe:</label>
        <input
          className="input"
          type="text"
          id="confirmPassword"
          value={confirmPassword} // attention ! il s'affiche dans l'inspecteur
          onChange={handleConfirmPasswordChange}
        />

        <button type="submit" className="button">
          INSCRIPTION
        </button>
      </form>
    </div>
  );
}
