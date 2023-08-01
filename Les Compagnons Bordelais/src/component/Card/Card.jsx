import { NavLink } from "react-router-dom";
import "./Card.scss";

export default function Card({ img, text1, text2, btn, redirect }) {
  return (
    <div className="card">
      <img className="img" src={img} alt="card img" />
      <div className="text-container">
        <p>{text1}</p>
        <p>{text2}</p>
      </div>

      <button className="button">
        <NavLink to={redirect} className="navLink-style">
          {btn}
        </NavLink>
      </button>
    </div>
  );
}
