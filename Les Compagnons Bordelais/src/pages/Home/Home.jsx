import video from "../../../public/video/video-acceuil-1.mp4";
import Carousel from "../../component/Carousel/Carousel";
import Footer from "../../component/Footer/Footer";
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
            <div className="marg-top text-bienvenue">
              <p>
                Chez nous, le bonheur de vos adorables compagnons est notre
                priorité ! Du toilettage stylé aux promenades excitantes, en
                passant par l'agility délirante, nous mettons tout en œuvre pour
                chouchouter vos poilus !
              </p>
              <p>
                Notre équipe est passionnée et dévouée, des dog-lovers acharnés
                ! Vos toutous sont entre de bonnes mains, car nous les aimons
                comme s'ils étaient les nôtres !
              </p>
              <p>
                Alors, n'hésitez pas à nous contacter pour offrir à vos poilus
                des moments inoubliables chez Les Compagnons Bordelais ! 🐶💕
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="pad-top">
        <Carousel />
      </div>
      <Footer />
    </div>
  );
}
