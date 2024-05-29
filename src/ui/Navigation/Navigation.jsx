import { useState } from "react";
import { NavLink } from "react-router-dom";
import Hamburger from "../../assets/tablet/icon-hamburger.svg";
import "./Navigation.scss";

const Navigation = ({ isInFooter }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav
      className={`navigation ${isNavOpen && "navigation--mobile-open"} ${
        isInFooter && "navigation--footer"
      }`}
    >
      <span
        onClick={() => setIsNavOpen((isNavOpen) => !isNavOpen)}
        className={`navigation__toggle ${
          isNavOpen && "navigation__toggle--mobile-open"
        } ${isInFooter && "navigation__toggle--footer"}`}
      >
        {isNavOpen ? "X" : <img src={Hamburger} alt="Menu hamburger" />}
      </span>

      <ul
        className={`navigation__list ${
          !isNavOpen && !isInFooter ? "hidden" : ""
        } ${isInFooter && "navigation__list--footer"}`}
        onClick={() => setIsNavOpen(false)}
      >
        <li className="navigation__item">
          <NavLink to="/" className="navigation__link">
            Home
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink to="/headphones" className="navigation__link">
            Headphones
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink to="/speakers" className="navigation__link">
            Speakers
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink to="/earphones" className="navigation__link">
            Earphones
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
