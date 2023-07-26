import video from "../../../public/video/video-acceuil-1.mp4";
import Carousel from "../../component/Carousel/Carousel";
import "./Home.scss";

export default function Home() {
  return (
    <div>
      <div>
        <video className="video" autoPlay muted>
          <source src={video} type="video/mp4" />
        </video>
        <div className="text-video">
          <h1 className="titleH1">Paw-sitivement élégant</h1>
          <h3 className="titleH3">Nos services font aboyer de bonheur !</h3>
        </div>
      </div>

      <section>
        <div className="pad-top sectionContainer">
          <div className="card">
            <h3 className="titleH3">
              Bienvenue chez <br />
              <span>Les compagnons bordelais !</span>
            </h3>
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
