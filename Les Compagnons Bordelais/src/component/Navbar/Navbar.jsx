import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import logo from "../../../public/logo/logo.png";
import "./Navbar.scss";

export default function Navbar() {
  const [burgerMenu, setBurgerMenu] = useState(true);
  const [scrollIsAtTop, setScrollIsAtTop] = useState(true);

  const checkIsActive = ({ isActive }) => {
    return {
      color: isActive ? "#A9AF37" : "#ECEAE6",
    };
  };

  const handleBurgerStyle = () => {
    setBurgerMenu(!burgerMenu);
  };

  const handleScrollAtTop = () => {
    const scrollY = window.scrollY;
    if (scrollY === 0) {
      setScrollIsAtTop(true);
    } else {
      setScrollIsAtTop(false);
    }
  };

  const bgMenuStyleOnScrollIn = {
    backgroundColor: "#ECEAE6",
    transition: "all 500ms",
    borderBottom: "2px solid #A9AF37",
    zIndex: 1,
    opacity: 0.95,
  };
  const bgMenuStyleOnScrollOut = {
    transition: "all 500ms",
  };

  useEffect(() => {
    // window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScrollAtTop);
  }, []);

  return (
    <>
      <nav
        className={`menu ${!burgerMenu ? "open" : ""}`}
        style={!scrollIsAtTop ? bgMenuStyleOnScrollIn : bgMenuStyleOnScrollOut}
      >
        <img src={logo} alt="logo" className="logo" />
        {burgerMenu ? (
          <div className="burgerMenu">
            <FontAwesomeIcon
              icon={faBars}
              className="burgerIcon"
              onClick={handleBurgerStyle}
            />
          </div>
        ) : (
          <div className="burgerMenu">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="burgerIcon"
              onClick={handleBurgerStyle}
            />
          </div>
        )}
      </nav>

      <div className={`containerMenuList ${!burgerMenu ? "open" : ""}`}>
        <div className="menuList">
          <ul>
            <li>
              <NavLink style={checkIsActive} to="/" onClick={handleBurgerStyle}>
                Acceuil
              </NavLink>
            </li>
            <li>
              <NavLink
                style={checkIsActive}
                to="/services"
                onClick={handleBurgerStyle}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                style={checkIsActive}
                to="/rendez-vous"
                onClick={handleBurgerStyle}
              >
                Rendez-vous
              </NavLink>
            </li>
            <li>
              <NavLink
                style={checkIsActive}
                to="/contact"
                onClick={handleBurgerStyle}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
