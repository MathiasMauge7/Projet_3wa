import backgroundText from "../../../public/background/background-text.jpg";
import "./BackgroundText.scss";

export default function BackgroundText() {
  return (
    <div className="container-bg-text">
      <img src={backgroundText} alt="background image" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis neque
        nemo maxime voluptatibus earum reprehenderit, voluptatum quibusdam quae!
        At nam commodi nulla architecto illo labore dolorem non praesentium
        laborum iste!
      </p>
    </div>
  );
}
