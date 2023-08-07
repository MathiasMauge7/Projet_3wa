import {
  faCircleLeft,
  faCircleRight,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./PreviousNext.scss";
import { Link, NavLink } from "react-router-dom";

export default function PreviousNext({
  img1,
  title1,
  text1,
  click1,
  img2,
  title2,
  text2,
  click2,
}) {
  return (
    <div className="p-n-container">
      <Link to={click1} className="card-p-n-container">
        <img src={img1} alt="background" />
        <h3>{title1}</h3>
        <p>{text1}</p>
        <FontAwesomeIcon icon={faCircleLeft} />
      </Link>
      <Link to={click2} className="card-p-n-container">
        <img src={img2} alt="background" />
        <h3>{title2}</h3>
        <p>{text2}</p>
        <FontAwesomeIcon icon={faCircleRight} />
      </Link>
    </div>
  );
}
