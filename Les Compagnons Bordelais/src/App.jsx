import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import Navbar from "./component/Navbar/Navbar";
import Services from "./pages/Services/Services";
import RendezVous from "./pages/rendez-vous/rendezVous";
import Contact from "./pages/Contact/Contact";
import Footer from "./component/Footer/Footer";
import Fitness from "./pages/Services/Fitness/Fitness";
import DogWalker from "./pages/Services/DogWalker/DogWalker";
import Spa from "./pages/Services/Spa/Spa";
import DogSitter from "./pages/Dog-sitter/DogSitter";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/garderie" element={<DogSitter />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/services/fitness" element={<Fitness />}></Route>
        <Route path="/services/promenade" element={<DogWalker />}></Route>
        <Route path="/services/spa" element={<Spa />}></Route>
        <Route path="/rendez-vous" element={<RendezVous />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route
          path="*"
          element={<div className="container">Page not found</div>}
        ></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
