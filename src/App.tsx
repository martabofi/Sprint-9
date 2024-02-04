import HomePage from "./components/HomePage";
import LogosCarousel from "./components/LogosCarousel";
import Drones from "./components/Drones";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactPage from "./components/ContactPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HomePage />
                <div className="flex flex-col items-stretch pb-12 bg-neutral-800">
                  <LogosCarousel />
                  <div className="flex flex-col items-stretch self-center px-5 w-full max-w-[1228px] max-md:mt-10 max-md:max-w-full">
                    <Drones />
                    <Contact />
                    <Footer />
                  </div>
                </div>
              </>
            }
          ></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
