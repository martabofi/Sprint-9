import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cupra from "../assets/cupra.png";
import ferrari from "../assets/ferrari.png";
import netflix from "../assets/netflix.png";
import rakuten from "../assets/rakuten.png";
import seat from "../assets/seat.png";

const LogosCarousel = () => {
  const Logos = [
    { logo: cupra, sizeClass: "max-w-30" },
    { logo: ferrari, sizeClass: "max-w-30" },
    { logo: netflix, sizeClass: "max-w-34" },
    { logo: rakuten, sizeClass: "max-w-26" },
    { logo: seat, sizeClass: "max-w-30" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 8000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 6,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    arrows: false,
  };

  return (
    <>
      <div className="self-center mt-28 text-center text-white w-[1228px] max-md:max-w-full">
        <div className="mx-4 text-lg md:text-xl leading-8 md:leading-10">
          <span className="text-white">En Dronic Films llevamos</span>
          <span className="font-bold text-white"> más de 5 años</span>
          <span className="text-white">
            {" "}
            logrando todo aquello que nuestros clientes desean.{" "}
          </span>
          <br />
          <span className="text-white">
            Contamos con distintos equipos que nos permiten captar un{" "}
          </span>
          <span className="font-bold text-white">
            enfoque único y personalizado
          </span>
          <span className="text-white"> para cada momento.</span>
        </div>
      </div>
      <div className="w-full overflow-hidden justify-center items-center gap-4 mt-12">
        <Slider {...settings}>
          {Logos.map((logoObj, index) => (
            <div key={index} className="inline-block mx-16 mt-16">
              <img
                src={logoObj.logo}
                alt={`Logo ${index + 1}`}
                className={logoObj.sizeClass}
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default LogosCarousel;
