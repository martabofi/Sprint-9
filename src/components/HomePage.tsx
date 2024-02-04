import React, { useState } from "react";
import homeVideo from "../assets/Video Cabecera 2022 HD 2_1.mp4";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <div className="video-background">
      <div className="video-overlay"></div>
      <video
        autoPlay
        loop
        muted
        width="100vw"
        height="100%"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
          objectFit: "cover",
        }}
      >
        <source src={homeVideo} type="video/mp4" />
      </video>

      <div className="absolute w-full mt-5 px-4 md:px-20 mx-auto gap-2">
        <div className="flex items-center md:text-left">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/26f6eaee6ef7be700d5c46fa67d3069570bf7d133b738fbe93b0c08ade3c2a9c?apiKey=cb64ec633b284e4e8639ccb536993816&"
            className="object-contain object-center shrink-0 aspect-[2.33] fill-white w-[60px]"
          />
          <div className="grow text-3xl tracking-widest text-white whitespace-nowrap">
            <span className="font-bold text-white">DRONIC</span>
            <span className="font-light text-white">FPV</span>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center px-16 my-28 md:my-6 w-full max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col items-center w-full max-w-[1228px] max-md:my-10 max-md:max-w-full">
            <div className="mt-48 text-6xl font-bold text-center drop-shadow-md text-white max-md:mt-10 max-md:max-w-full max-md:text-4xl">
              Filmación profesional con drones
            </div>
            <div className="mt-6 text-2xl text-center drop-shadow-md text-white max-md:max-w-full">
              Lleva tus producciones al siguiente nivel
            </div>
            <div className="my-2 md:my-0"></div>
            <div className="justify-center items-stretch px-7 py-4 mt-24 md:mt-16 text-xl drop-shadow-lg leading-7 text-gray-200 hover:text-white bg-gradient-to-t from-violet-600 to-indigo-300 rounded-xl max-md:px-5 max-md:mt-10">
              <button>
                <Link to="/contact">Contáctanos</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
