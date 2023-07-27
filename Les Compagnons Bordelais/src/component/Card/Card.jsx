import "./Card.scss";

export default function Card({ img, text1, text2, btn }) {
  return (
    <div className="card">
      <img className="img" src={img} alt="card img" />
      <div className="text-container">
        <p>{text1}</p>
        <p>{text2}</p>
      </div>
      <button className="button">{btn}</button>
    </div>
  );
}
