import Slider from "react-slick";
import "./Carousel.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import photoCarouselToilettage from "../../../public/photo-carousel/toilettage.jpg";
import photoCarouselPromenade from "../../../public/photo-carousel/promenade.jpg";
import photoCarouselPromenade2 from "../../../public/photo-carousel/promenade2.jpg";
import photoCarouselAgility from "../../../public/photo-carousel/agility.jpg";

export default function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
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
        <div className="carousel-card">
          <img
            className="carousel-img"
            src={photoCarouselToilettage}
            alt="carousel img"
          />
          <p>Texte</p>
          <button>Button</button>
        </div>
        <div className="carousel-card">
          <img
            className="carousel-img"
            src={photoCarouselPromenade}
            alt="carousel img"
          />
          <p>Texte</p>
          <button>Button</button>
        </div>
        <div className="carousel-card">
          <img
            className="carousel-img"
            src={photoCarouselAgility}
            alt="carousel img"
          />
          <p>Texte</p>
          <button>Button</button>
        </div>
        <div className="carousel-card">
          <img
            className="carousel-img"
            src={photoCarouselPromenade2}
            alt="carousel img"
          />
          <p>Texte</p>
          <button>Button</button>
        </div>
      </Slider>
    </div>
  );
}
