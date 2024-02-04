import { Link } from "react-router-dom";

const Footer: React.FC = () => {
    return (
      <footer className="dark:bg-gray-800 mt-40 border-t w-full flex items-center">
        <div className="w-full flex flex-col items-center mx-auto max-w-screen-xl p-4 md:flex md:items-center justify-between md:text-left sm:text-center mt-8">
          <p className="text-gray-200 sm:text-center dark:text-gray-400">
            © 2023 DronicFPV™. All Rights Reserved.
          </p>
          <ul className="flex flex-wrap mt-4 font-medium text-gray-200 dark:text-gray-400 sm:mt-8 sm:text-center">
            <li>
              <a href="#" className="hover:underline hover:text-violet-600 me-4 md:me-6">
                Política de privacidad
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-violet-600 me-4 md:me-6">
                Aviso legal
              </a>
            </li>
            <li>
              <Link to="contact" className="hover:underline hover:text-violet-600">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  