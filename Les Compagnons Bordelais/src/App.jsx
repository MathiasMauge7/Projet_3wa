import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import Navbar from "./component/Navbar/Navbar";
import Services from "./pages/Services/Services";
import RendezVous from "./pages/rendez-vous/rendezVous";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/rendez-vous" element={<RendezVous />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<p>Page not found</p>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
