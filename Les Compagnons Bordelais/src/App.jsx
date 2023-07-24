import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import Navbar from "./component/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/rendez-vous" element={<rendezVous />}></Route>
        <Route path="*" element={<p>Page not found</p>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
