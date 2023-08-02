import {
  faCircleLeft,
  faCircleRight,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./PreviousNext.scss";

export default function PreviousNext({
  img1,
  text1,
  click1,
  img2,
  text2,
  click2,
}) {
  return (
    <div className="p-n-container">
      <div
        className="card-p-n-container"
        onClick={() => (window.location.href = click1)}
      >
        <img src={img1} alt="background" />
        <h3>{text1}</h3>
        <p>Précedent</p>
        <FontAwesomeIcon icon={faCircleLeft} />
      </div>
      <div
        className="card-p-n-container"
        onClick={() => (window.location.href = click2)}
      >
        <img src={img2} alt="background" />
        <h3>{text2}</h3>
        <p>Suivant</p>
        <FontAwesomeIcon icon={faCircleRight} />
      </div>
    </div>
  );
}
