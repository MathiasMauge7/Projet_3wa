import { NavLink } from "react-router-dom";
import "./CardTarif.scss";

export default function CardTarif({ title, price, text, redirect, btn }) {
  return (
    <div className="card">
      <div className="text-container">
        <h3>{title}</h3>
        <p>{price}</p>
        <p>{text}</p>
      </div>
      <button className="button">
        <NavLink to={redirect} className="navLink-style">
          {btn}
        </NavLink>
      </button>
    </div>
  );
}
