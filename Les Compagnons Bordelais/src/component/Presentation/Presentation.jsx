import { NavLink } from "react-router-dom";
import "./presentation.scss";

export default function Presentation({ title, text, btn, img }) {
  return (
    <>
      <div className="pad">
        <h2>{title}</h2>
        <p>{text}</p>
        <button className="button">
          <NavLink to="/contact" className="navLink-style">
            {btn}
          </NavLink>
        </button>
      </div>
      <div className="background"></div>
      <div className="img-png-container">
        <img src={img} alt="image" className="img-png" />
      </div>
    </>
  );
}
