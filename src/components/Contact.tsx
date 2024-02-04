import React from "react";

const Contact: React.FC = () => {
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
      } else {
        console.error("Error al enviar el correo");
      }
    } catch (error) {
      console.error("Error de red:", error);
    }
  };
  return (
    <div className="flex flex-col mt-20 lg:flex-row bg-neutral-800">
      <div className="w-full lg:w-1/2 mx-auto">
        <div className="mt-10 lg:mt-36 text-3xl font-bold leading-7 text-white max-w-full">
          ¿Colaboramos?
        </div>
        <div className="text-white mt-8 lg:mt-12">
          Explícanos tu proyecto o contáctanos para resolver cualquier duda.
        </div>
        <form id="contact_form" className="w-full mt-8" onSubmit={handleSubmit}>
          <div className="flex flex-col lg:flex-row mb-5">
            <div className="mr-2 w-full lg:w-1/2">
              <label
                htmlFor="first_name_field"
                className="block text-white mb-2"
              >
                Nombre:
              </label>
              <input
                className="rounded border-gray-400 w-full h-8"
                type="text"
                name="first_name"
                id="first_name_field"
              />
            </div>
            <div className="mr-2 w-full lg:w-1/2 mt-4 lg:mt-0">
              <label htmlFor="email_field" className="block text-white mb-2">
                Correo electrónico:
              </label>
              <input
                className="rounded border-gray-400 w-full h-8"
                type="email"
                name="email"
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
              name="message"
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
      </div>
      <div className="w-full lg:w-1/2 mx-auto lg:mt-36 lg:ml-20 mt-20  text-white text-center">
        <a
          href="https://www.instagram.com/dronic_fpv/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d805c03a4fbf9ed4ca60166146dad11d8e90dac486b00c722bd3f0cd6eada3e3?apiKey=cb64ec633b284e4e8639ccb536993816&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d805c03a4fbf9ed4ca60166146dad11d8e90dac486b00c722bd3f0cd6eada3e3?apiKey=cb64ec633b284e4e8639ccb536993816&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d805c03a4fbf9ed4ca60166146dad11d8e90dac486b00c722bd3f0cd6eada3e3?apiKey=cb64ec633b284e4e8639ccb536993816&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d805c03a4fbf9ed4ca60166146dad11d8e90dac486b00c722bd3f0cd6eada3e3?apiKey=cb64ec633b284e4e8639ccb536993816&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d805c03a4fbf9ed4ca60166146dad11d8e90dac486b00c722bd3f0cd6eada3e3?apiKey=cb64ec633b284e4e8639ccb536993816&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d805c03a4fbf9ed4ca60166146dad11d8e90dac486b00c722bd3f0cd6eada3e3?apiKey=cb64ec633b284e4e8639ccb536993816&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d805c03a4fbf9ed4ca60166146dad11d8e90dac486b00c722bd3f0cd6eada3e3?apiKey=cb64ec633b284e4e8639ccb536993816&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d805c03a4fbf9ed4ca60166146dad11d8e90dac486b00c722bd3f0cd6eada3e3?apiKey=cb64ec633b284e4e8639ccb536993816&"
            className="w-full rounded-full aspect-square max-h-[300px] max-w-[300px] mx-auto"
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

export default Contact;
