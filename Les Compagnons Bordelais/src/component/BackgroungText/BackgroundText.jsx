import "./BackgroundText.scss";

export default function BackgroundText({ img, text }) {
  return (
    <div className="container-bg-text">
      <img src={img} alt="background image" />
      <h2>{text}</h2>
    </div>
  );
}
