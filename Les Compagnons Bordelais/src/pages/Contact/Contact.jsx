import { useState } from "react";
import "./Contact.scss";
import bgContact from "../../../public/background/bgContact.jpg";
import BackgroundText from "../../component/BackgroungText/BackgroundText";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    mail: "",
    tel: "",
    sujet: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulaire soumie: ", formData);
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
        <label htmlFor="sujet" />
        Sujet
        <input
          className="input"
          type="text"
          name="sujet"
          value={formData.sujet}
          onChange={handleChange}
        />
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
