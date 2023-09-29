import { useState } from "react";
import "./Contact.scss";
import bgContact from "../../../public/background/bgContact.jpg";
import BackgroundText from "../../component/BackgroungText/BackgroundText";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ScroolToTheTop from "../../component/ScrollToTheTop/ScroolToTheTop";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    mail: "",
    tel: "",
    sujet: "",
    message: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = fetch("http://127.0.0.1:5173/api/formulaire-contact", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          mail: formData.mail,
          tel: formData.tel,
          sujet: formData.sujet,
          message: formData.message,
        }),
      }).then((response) => {
        console.log(response);
        console.log("Formulaire de contact soumie");
        navigate("/");
      });
      // const response = await axios.post(
      //   "http://localhost:5173/api/formulaire-contact",
      //   {
      //     name: formData.name,
      //     mail: formData.mail,
      //     tel: formData.tel,
      //     sujet: formData.sujet,
      //     message: formData.message,
      //   }
      // );
      if (response.status === 200) {
        console.log("Formulaire de contact soumie");
        navigate("/");
      }
    } catch (error) {
      console.log("Erreur lors de l'envoi du formulaire de contact", error);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="container">
      <ScroolToTheTop />
      <BackgroundText img={bgContact} text={<h2>FORMULAIRE DE CONTACT</h2>} />
      <div className="background"></div>
      <form method="post" className="contact-form pad" onSubmit={handleSubmit}>
        <label htmlFor="name" />
        Nom
        <input
          className="input"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="mail" />
        Mail
        <input
          className="input"
          type="text"
          name="mail"
          value={formData.mail}
          onChange={handleChange}
        />
        <label htmlFor="tel" />
        Téléphone
        <input
          className="input"
          type="text"
          name="tel"
          value={formData.tel}
          onChange={handleChange}
        />
        <label htmlFor="sujet">Sujet :</label>
        <select
          className="input"
          name="sujet"
          value={formData.sujet}
          onChange={handleChange}
        >
          <option value="Garderie">Garderie</option>
          <option value="Promenade">Promenade</option>
          <option value="Fitness">Fitness</option>
          <option value="Toilettage">Toilettage</option>
          <option value="Autre">Autre</option>
        </select>
        <label htmlFor="message" />
        Message
        <textarea
          className="input"
          type="text"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        <button type="submit" className="button">
          ENVOYER
        </button>
      </form>
    </div>
  );
}
