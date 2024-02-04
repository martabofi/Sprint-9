import Accordion from "./Accordion";
import djiInspire2 from "../assets/dji_inspire_2.png";
import cinelifter from "../assets/cinelifter.png";
import fpvRacing from "../assets/fpv_racing_drone.png";
import cinewhoop from "../assets/cinewhoop.png";
import djiMavic2 from "../assets/dji_mavic_2.png";
import cam1 from "../assets/cam1.png";
import cam2 from "../assets/cam2.png";
import cam3 from "../assets/cam3.png";
import cam4 from "../assets/cam4.png";
import cam5 from "../assets/cam5.png";

const Drones: React.FC = () => {
  return (
    <div className="text-white mt-32">
      <div className="text-center text-3xl font-bold leading-7 text-white whitespace-nowrap">
        Nuestros drones y cámaras
      </div>
      <div className="mt-20 text-2xl font-bold leading-7 text-white max-md:mt-10 max-md:max-w-full">
        <span className="text-white">DJI Inspire 2 · </span>
        <span className="text-white ">Super 35 Raw</span>
      </div>
      <div className="text-lg">
        <div className="mt-8 text-white max-md:mt-10 max-md:max-w-full">
          Obtén las mejores filmaciones aéreas con la mejor calidad
          cinematográfica. Máxima versatilidad en cualquier escenario y una
          estabilización inigualable.
        </div>
        <h3 className="my-3">Especificaciones:</h3>
        <ul className="list-disc ml-8">
          <li>Velocidad 94 km/h.</li>
          <li>Autonomía 20 minutos.</li>
          <li>Ópticas 16 – 24 – 35 – 50 mm.</li>
        </ul>
      </div>
      <Accordion title="Especificaciones Cámara DJI Inspire 2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
          <div>
            <p>
              La Zenmuse X7 es una cámara Super 35 compacta con un estabilizador
              integrado diseñada para filmaciones profesionales que ofrece una
              resolución y una calidad de imagen increíbles. Además, su
              rendimiento en condiciones de poca luz es excepcional.
            </p>
            <h3 className="my-3">Características técnicas:</h3>
            <ul className="list-disc ml-8">
              <li>Super sensor 35 RAW.</li>
              <li>Cinema DNG 6K.</li>
              <li>Apple ProRes 5.2K.</li>
              <li>Dinamic Range 14 steps.</li>
              <li>Snapshots 24 MP.</li>
            </ul>
          </div>
          <img src={cam1} alt="Cámara DJI Inspire 2" className="my-2" />
        </div>
      </Accordion>
      <div className="md:mt-11 max-md:pr-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch">
          <div className="flex flex-col items-stretch w-[47%] max-md:ml-0 max-md:w-full">
            <img
              src={djiInspire2}
              className="object-contain object-center self-stretch w-full aspect-[2.04] max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col items-stretch ml-5 w-[53%] max-md:ml-0 max-md:w-full">
            <div className="mt-5 md:mt-0 aspect-w-16 aspect-h-9 overflow-hidden">
              <iframe
                style={{ maxWidth: "100%" }}
                width="560"
                height="315"
                src="https://www.youtube.com/embed/N-2-nHwcwP4?si=QB8f0o6ODquYV-nS"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-4"></div>
      <div className="mt-28 text-2xl font-bold leading-7 text-white max-md:mt-28 max-md:max-w-full">
        <span className="text-white">Cinelifter · </span>
        <span className="text-white ">Cinema FPV</span>
      </div>
      <div className="mt-8 text-lg text-white max-md:mt-10 max-md:max-w-full">
        <p>
          Consigue tomas de velocidad y proximidad sin renunciar a la calidad de
          una cámara de cine. Grabar con una RED KOMODO en un drone de carreras
          les dará a tus producciones un punto de vista más subjetivo. Ideal
          para rodajes de acción, riesgo y adrenalina.
        </p>
        <h3 className="my-3">Especificaciones:</h3>
        <ul className="list-disc ml-8">
          <li>Velocidad 150 km/h.</li>
          <li>Autonomía 2-10 minutos.</li>
          <li>Alcance 1 km.</li>
        </ul>
      </div>
      <Accordion title="Especificaciones Cámara Cinelifter">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
          <div>
            <ul className="list-disc ml-8">
              <li>Sensor KOMODO 19.9 MP Super 35 MM Global Shutter CMOS.</li>
              <li>Píxeles efectivos 6144 X 3240.</li>
              <li>
                Tamaño del sensor 27,03 mm X 14,26 mm (Diagonal: 30,56 mm).
              </li>
              <li>Rango dinámico +16 paradas.</li>
              <li>Montura RF.</li>
              <li>Resolución 6K.</li>
              <li>Formato de grabación REDCODE RAW.</li>
              <li>Peso 0,95 kg.</li>
            </ul>
          </div>
          <img src={cam2} alt="Cámara Cinelifter" />
        </div>
      </Accordion>
      <div className="mt-11 max-md:pr-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch">
          <div className="flex flex-col items-stretch w-[47%] max-md:ml-0 max-md:w-full">
            <img
              src={cinelifter}
              className="object-contain object-center w-full aspect-[1.89] max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col items-stretch ml-5 w-[53%] max-md:ml-0 max-md:w-full">
            <div className="aspect-w-16 aspect-h-9 overflow-hidden mt-5 md:mt-0">
              <iframe
                style={{ maxWidth: "100%" }}
                width="560"
                height="315"
                src="https://www.youtube.com/embed/s7kdZgDavKo?si=LfpzfsAHBggs1WJG"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-32 text-2xl font-bold leading-7 text-white max-md:mt-32 max-md:max-w-full">
        <span className="text-white">FPV · </span>
        <span className="text-white ">Racing Drone</span>
      </div>
      <div className="text-lg">
        <div className="mt-8 text-white max-md:mt-10 max-md:max-w-full">
          Máximo control y versatilidad en cualquier sitio. Gracias a su
          potencia y precisión, estos drones son capaces de conseguir tomas que
          tiempo atrás eran inpensables. Deja volar tu imaginación y sorprende
          al espectador con tomas FPV.
        </div>
        <h3 className="my-3">Especificaciones:</h3>
        <ul className="list-disc ml-8">
          <li>Velocidad 150 km/h.</li>
          <li>Autonomía 2-10 minutos.</li>
          <li>Alcance 1 km.</li>
          <li>Resistente al agua.</li>
        </ul>
      </div>
      <Accordion title="Especificaciones Cámara FPV">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
          <div>
            <p>
              Compatibilidad con cualquier cámara de acción estilo GoPro.
              Capacidad de estabilización de vídeo en postproducción con un
              resultado inmejorable.
            </p>
            <p className="my-3">Características técnicas:</p>
            <ul className="list-disc ml-8">
              <li>
                Calidad de vídeo 5K 60FPS / 4K 120FPS / 2,7K 240FPS / 1080P
                240FPS.
              </li>
              <li>Resolución de foto 16,9MP de un vídeo 5K.</li>
              <li>Filtros ND 4/8/16/32.</li>
              <li>Estabilización en postproducción excelente.</li>
              <li>Resistente al agua.</li>
            </ul>
          </div>
          <img src={cam3} alt="Cámara FPV" />
        </div>
      </Accordion>
      <div className="mt-11 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch">
          <div className="flex flex-col items-stretch w-[48%] max-md:ml-0 max-md:w-full">
            <img
              src={fpvRacing}
              className="object-contain object-center self-stretch my-auto w-full aspect-[1.96] max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col items-stretch ml-5 w-[52%] max-md:ml-0 max-md:w-full">
            <div className="aspect-w-16 aspect-h-9 overflow-hidden mt-5 md:mt-0">
              <iframe
                style={{ maxWidth: "100%" }}
                width="560"
                height="315"
                src="https://www.youtube.com/embed/6vvP9QRW90E?si=gmTJIGe9Y3U4QVNR"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-28 text-2xl font-bold leading-7 text-white max-md:mt-28 max-md:max-w-full">
        <span className="text-white">Cinewhoop · </span>
        <span className="text-white ">Interior Drone</span>
      </div>
      <div className="text-lg">
        <div className="mt-8 text-white max-md:mt-10 max-md:max-w-full">
          Esta opción te va a permitir ofrecer puntos de vista completamente
          novedosos y sorprender al espectador. Debido a su reducido tamaño y
          agilidad, pasar por cualquier agujero será tarea fácil.
        </div>
        <h3 className="my-3">Especificaciones:</h3>
        <ul className="list-disc ml-8">
          <li>Velocidad 60 km/h.</li>
          <li>Autonomía 2-10 minutos.</li>
          <li>Alcance 1 km.</li>
          <li>Tamaño como la palma de una mano (85 mm).</li>
          <li>Absorción de choques.</li>
        </ul>
      </div>
      <Accordion title="Especificaciones Cámara Cinewhoop">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
          <div>
            <p>
              Modelo GoPro 6 ultraligero (29 gr). Conseguir una calidad
              excepcional con un peso reducido ahora es posible. Con esta cámara
              podrás lograr esas tomas que parecían impensables con una alta
              resolución. Además, con el sistema de estabilización de vídeo
              aplicado en postproducción, cualquier Steadicam se queda corto.
            </p>
            <p className="my-3">Características técnicas:</p>
            <ul className="list-disc ml-8">
              <li>Calidad de vídeo 4K 60FPS / 2.7K 120FPS / 1080p 240FPS.</li>
              <li>Sensor de 1/2.3″ 12MP con apertura f 2.8.</li>
              <li>Filtros ND 4/8/16/32.</li>
              <li>Excelente estabilización de postproducción.</li>
            </ul>
          </div>
          <img src={cam4} alt="Cámara Cinewhoop" />
        </div>
      </Accordion>
      <div className="mt-11 max-md:mt-10 max-md:mr-1 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch">
          <div className="flex flex-col items-stretch w-[46%] max-md:ml-0 max-md:w-full">
            <img
              src={cinewhoop}
              className="object-contain object-center grow w-full aspect-[1.79] max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col items-stretch ml-5 w-[54%] max-md:ml-0 max-md:w-full">
            <div className="aspect-w-16 aspect-h-9 overflow-hidden mt-5 md:mt-0">
              <iframe
                style={{ maxWidth: "100%" }}
                width="560"
                height="315"
                src="https://www.youtube.com/embed/CSrVDoQxeKY?si=K1e8_2EI_LdJRyDe"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-28 text-2xl font-bold leading-7 text-white max-md:mt-28 max-md:max-w-full">
        <span className="text-white">DJI Mavic 2 Pro · </span>
        <span className="text-white ">Portable Drone</span>
      </div>
      <div className="mt-8 text-lg text-white max-md:mt-10 max-md:max-w-full">
        <p>
          Consigue tomas profesionales de una forma fácil. Este drone consigue
          captar imágenes de muy alta calidad sin necesidad de una gran
          preparación. Muy cómodo y práctico tanto para eventos como para
          producciones más sofisticadas.
        </p>
        <p className="my-2">Especificaciones:</p>
        <ul className="list-disc ml-8">
          <li>Velocidad 60 km/h.</li>
          <li>Autonomía 20 minutos.</li>
          <li>Alcance 1 km.</li>
          <li>Plegado compacto.</li>
        </ul>
      </div>
      <Accordion title="Especificaciones Cámara DJI Mavic 2 Pro">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
          <div>
            <p>
              Esta cámara súper compacta es capaz de capturar imágenes a una
              resolución muy alta. Con un estabilizador integrado diseñado para
              inhibir cualquier tipo de vibración, el resultado que obtendrás
              será más que deseable.
            </p>
            <p className="my-3">Características técnicas:</p>
            <ul className="list-disc ml-8">
              <li>Resolución de vídeo 4K: 3840×2160 24/25/30p.</li>
              <li>2.7K: 2688x1512 24/25/30/48/50/60p.</li>
              <li>FHD: 1920×1080 24/25/30/48/50/60/120p.</li>
              <li>Sensor 1" CMOSPíxeles efectivos: 20 millones.</li>
              <li>Filtros ND 4/8/16/32.</li>
              <li>Estabilización en 3 ejes.</li>
            </ul>
          </div>
          <img src={cam5} alt="Cámara DJI Mavic 2 Pro" />
        </div>
      </Accordion>
      <div className="mt-11 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch">
          <div className="flex flex-col items-stretch w-[46%] max-md:ml-0 max-md:w-full">
            <img
              src={djiMavic2}
              className="object-contain object-center self-stretch my-auto w-full aspect-[2.38] max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col items-stretch ml-5 w-[54%] max-md:ml-0 max-md:w-full">
            <div className="aspect-w-16 aspect-h-9 overflow-hidden mt-5 md:mt-0">
              <iframe
                style={{ maxWidth: "100%" }}
                width="560"
                height="315"
                src="https://www.youtube.com/embed/1QtyWyTaT5w?si=TE5YSjV3kwcrR-jQ"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drones;
