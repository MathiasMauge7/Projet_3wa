import Slider from "react-slick";
import "./Carousel.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import photoCarouselSpa from "../../../public/photo-carousel/spa.jpg";
import photoCarouselPromenade from "../../../public/photo-carousel/promenade.jpg";
import photoCarouselPromenade2 from "../../../public/photo-carousel/promenade2.jpg";
import photoCarouselFitness from "../../../public/photo-carousel/fitness.jpg";
import { NavLink } from "react-router-dom";

export default function Carousel() {
  const carouselContent = [
    {
      photo: photoCarouselSpa,
      redirect: "/services/spa",
      texte:
        "Offrez à votre animal de compagnie une séance dans notre Spa de qualité pour qu'il soit propre, soigné et tout simplement adorable!",
    },
    {
      photo: photoCarouselPromenade,
      redirect: "/services/promenade",
      texte:
        "Confiez la promenade de votre chien à nos professionnels attentionnés qui lui offriront l'exercice et l'affection dont il a besoin en toute sécurité.",
    },
    {
      photo: photoCarouselPromenade2,
      redirect: "/garderie",
      texte:
        "Confiez la promenade de votre chien à nos professionnels attentionnés qui lui offriront l'exercice et l'affection dont il a besoin en toute sécurité.",
    },
    {
      photo: photoCarouselFitness,
      redirect: "/services/fitness",
      texte:
        "Initiez votre chien à l'agilité avec nos entraîneurs spécialisés, pour des séances amusantes qui stimuleront son esprit et renforceront votre complicité.",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 4000,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <Slider {...settings} style={{ width: "660px" }}>
        {carouselContent.map((content, i) => (
          <div key={i} className="carousel-card">
            <img
              className="carousel-img"
              src={content.photo}
              alt="carousel img"
            />
            <p>{content.texte}</p>
            <button className="button">
              <NavLink to={content.redirect} className="navLink-style">
                Information
              </NavLink>
            </button>
          </div>
        ))}
      </Slider>
    </div>
  );
}
