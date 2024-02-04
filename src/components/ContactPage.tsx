import React, { useState } from "react";
import { Link } from "react-router-dom";

const ContactPage: React.FC = () => {
  const [isEmailSent, setIsEmailSent] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("http://localhost:3001/enviar-correo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: formData.get("nombre"),
          correo: formData.get("correo"),
          mensaje: formData.get("mensaje"),
        }),
      });

      const data = await response.json();

      if (data.success) {
        console.log("Correo enviado con éxito");
        setIsEmailSent(true);
      } else {
        console.error("Error al enviar el correo");
      }
    } catch (error) {
      console.error("Error de red:", error);
    }
  };

  return (
    <div className="mx-auto md:mx-auto w-full flex flex-col bg-neutral-800 mb-0 max-h-full px-4 md:px-20 gap-2">
      <div className="mx-auto md:mx-auto w-full mt-5 px-4 md:px-20 gap-2 flex items-center justify-between">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/26f6eaee6ef7be700d5c46fa67d3069570bf7d133b738fbe93b0c08ade3c2a9c?apiKey=cb64ec633b284e4e8639ccb536993816&"
          className="object-contain object-center shrink-0 aspect-[2.33] fill-white w-[60px]"
        />
        <div className="mx-auto md:mx-auto grow text-3xl tracking-widest text-white whitespace-nowrap">
          <button>
            <Link to="/">
              <span className="font-bold text-white tracking-widest">
                DRONIC
              </span>
              <span className="font-light text-white tracking-widest">FPV</span>
            </Link>
          </button>
        </div>
      </div>
      <div className="mx-auto md:mx-auto">
        <div className="mt-20 text-3xl text-center font-bold leading-7 text-white max-w-full">
          ¿Colaboramos?
        </div>
        <div className="text-white mt-8 lg:mt-12">
          Explícanos tu proyecto o contáctanos para resolver cualquier duda.
        </div>
        <form id="contact_form" className="w-full mt-8" onSubmit={handleSubmit}>
          <div className="flex flex-col lg:flex-row mb-5">
            <div className="mr-2 w-full">
              <label
                htmlFor="first_name_field"
                className="block text-white mb-2"
              >
                Nombre:
              </label>
              <input
                className="rounded border-gray-400 w-full h-8"
                type="text"
                name="nombre"
                id="first_name_field"
              />
            </div>
            <div className="mr-2 w-full mt-4 lg:mt-0">
              <label htmlFor="email_field" className="block text-white mb-2">
                Correo electrónico:
              </label>
              <input
                className="rounded border-gray-400 w-full h-8"
                type="email"
                name="correo"
                id="email_field"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="message_field" className="block text-white mb-2">
              Mensaje:
            </label>
            <textarea
              className="w-full rounded border-gray-400"
              name="mensaje"
              id="message_field"
            ></textarea>
          </div>
          <div className="flex justify-end lg:justify-center">
            <button
              type="submit"
              className="mx-auto bg-gradient-to-t from-violet-600 to-indigo-300 mt-6 text-xl leading-7 rounded-xl drop-shadow-lg text-gray-200 hover:text-white hover:bg-blue-800 px-7 py-4"
            >
              Enviar
            </button>
          </div>
        </form>

        {isEmailSent && (
          <div className="mt-4 text-green-500 text-center">
            Correo enviado con éxito. ¡Gracias por ponerte en contacto!
          </div>
        )}

      </div>

      <div className="w-full mx-auto lg:mt-20 mt-12 text-white text-center mb-20">
        <a
          href="https://www.instagram.com/dronic_fpv/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d805c03a4fbf9ed4ca60166146dad11d8e90dac486b00c722bd3f0cd6eada3e3?apiKey=cb64ec633b284e4e8639ccb536993816&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d805c03a4fbf9ed4ca60166146dad11d8e90dac486b00c722bd3f0cd6eada3e3?apiKey=cb64ec633b284e4e8639ccb536993816&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d805c03a4fbf9ed4ca60166146dad11d8e90dac486b00c722bd3f0cd6eada3e3?apiKey=cb64ec633b284e4e8639ccb536993816&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d805c03a4fbf9ed4ca60166146dad11d8e90dac486b00c722bd3f0cd6eada3e3?apiKey=cb64ec633b284e4e8639ccb536993816&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d805c03a4fbf9ed4ca60166146dad11d8e90dac486b00c722bd3f0cd6eada3e3?apiKey=cb64ec633b284e4e8639ccb536993816&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d805c03a4fbf9ed4ca60166146dad11d8e90dac486b00c722bd3f0cd6eada3e3?apiKey=cb64ec633b284e4e8639ccb536993816&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d805c03a4fbf9ed4ca60166146dad11d8e90dac486b00c722bd3f0cd6eada3e3?apiKey=cb64ec633b284e4e8639ccb536993816&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d805c03a4fbf9ed4ca60166146dad11d8e90dac486b00c722bd3f0cd6eada3e3?apiKey=cb64ec633b284e4e8639ccb536993816&"
            className="w-full rounded-full aspect-square max-h-[300px] max-w-[300px] mx-auto cursor-pointer"
          />
        </a>
        <div className="mt-4 text-center">
          <h2 className="text-xl font-bold mb-2">Información de contacto</h2>
          <div>
            <p className="mb-1">
              <p>dronicfpv@gmail.com</p>
            </p>
            <p className="mb-1">
              <p>+34 656 54 84 64</p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
