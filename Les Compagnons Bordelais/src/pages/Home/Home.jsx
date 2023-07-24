import video from "../../../public/video/video-acceuil-1.mp4";
import Carousel from "../../component/Carousel/Carousel";
import "./Home.scss";

export default function Home() {
  return (
    <div>
      <video className="video" autoPlay muted>
        <source src={video} type="video/mp4" />
      </video>

      <section>
        <div className="pad-top sectionContainer">
          <div className="card">
            <h2>Bienvenue chez Les compagnons bordelais</h2>
            <p className="marg-top">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae iste ipsum labore quo magni unde praesentium atque,
              sapiente culpa blanditiis dolore, non, ducimus soluta! Fugit sed
              corporis cum quas sapiente, aperiam reprehenderit similique
              aliquid officiis voluptas corrupti sint doloremque numquam magni.
              Vel iusto praesentium magni magnam deserunt iste, ab, vitae quia
              repudiandae, facere sunt doloremque incidunt? Velit, dolore,
              similique ullam dolorum sequi deserunt dolor culpa, assumenda nisi
              recusandae vitae consequatur.
            </p>
          </div>
        </div>
      </section>

      <div className="pad-top">
        <Carousel />
      </div>
    </div>
  );
}
