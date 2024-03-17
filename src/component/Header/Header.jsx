import "./Header.scss";
import logo from "../../assets/Logo/InStock-Logo.svg";
import { NavLink } from "react-router-dom";


export default function Header() {
  return (
    <nav className="header">
      <img className="header__logo" src={logo} alt="InStock Logo" />
      <ul className="header__list">
        <NavLink
          to="/warehouses"
          as="li"
          className="header__list-item"
        >Warehouses</NavLink>
        <NavLink
          to="/inventory"
          as="li"
          className="header__list-item"
        >Inventory</NavLink>
      </ul>
    </nav>
  );
}