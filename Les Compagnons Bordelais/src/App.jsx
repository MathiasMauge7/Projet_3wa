import "./App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/home";
import Navbar from "./component/Navbar/Navbar";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import Footer from "./component/Footer/Footer";
import Fitness from "./pages/Services/Fitness/Fitness";
import DogWalker from "./pages/Services/DogWalker/DogWalker";
import Spa from "./pages/Services/Spa/Spa";
import DogSitter from "./pages/Dog-sitter/DogSitter";
import SignIn from "./pages/EspaceClient/SignIn";
import Login from "./pages/EspaceClient/Login";
import Profil from "./pages/EspaceClient/Profil/Profil";
import ProfilEdit from "./pages/EspaceClient/ProfilEdit/ProfilEdit";
import DogProfilEdit from "./pages/EspaceClient/DogProfilEdit/dogProfilEdit";
import DogProfilCreate from "./pages/EspaceClient/DogProfilCreate/DogProfilCreate";
import Dashbord from "./pages/Dashbord/Dashbord";
import Booking from "./pages/Booking/Booking";

function App() {
  const isAuthenticated = true; // cookie de session

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/reservation" element={<Booking />}></Route>
        <Route path="/garderie" element={<DogSitter />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/services/fitness" element={<Fitness />}></Route>
        <Route path="/services/promenade" element={<DogWalker />}></Route>
        <Route path="/services/spa" element={<Spa />}></Route>
        <Route path="/espace-client/inscription" element={<SignIn />}></Route>
        <Route path="/espace-client/connexion" element={<Login />}></Route>
        <Route
          path="/espace-client/profil/:userId"
          element={
            isAuthenticated ? (
              <Profil />
            ) : (
              <Navigate to={"/espace-client/connexion"} />
            )
          }
        ></Route>
        <Route
          path="/espace-client/profil/:userId/info"
          element={
            isAuthenticated ? (
              <ProfilEdit />
            ) : (
              <Navigate to={"/espace-client/connexion"} replace />
            )
          }
        ></Route>
        <Route
          path="/espace-client/profil/:userId/:dogName"
          element={
            isAuthenticated ? (
              <DogProfilEdit />
            ) : (
              <Navigate to={"/espace-client/connexion"} replace />
            )
          }
        ></Route>
        <Route
          path="/espace-client/profil/:userId/nouveau-chien"
          element={
            isAuthenticated ? (
              <DogProfilCreate />
            ) : (
              <Navigate to={"/espace-client/connexion"} replace />
            )
          }
        ></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route
          path="*"
          element={<div className="container">Page not found</div>}
        ></Route>
        <Route path="/tableau-de-bord" element={<Dashbord />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
