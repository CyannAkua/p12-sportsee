import icon from "../icons/icon.svg";
import icon1 from "../icons/icon-1.svg";
import icon2 from "../icons/icon-2.svg";
import icon3 from "../icons/icon-3.svg";
import logo from "../icons/logo (1).svg";
import "../style/header.css";

/**
 * @description those function are the components header and side bar
 */
export default function Header() {
  return (
    <div className="header">
      <img src={logo} />
      <p>Accueil</p>
      <p>Profil</p>
      <p>Réglage</p>
      <p>Communauté</p>
    </div>
  );
}
export function SideBar() {
  return (
    <div className="sideBar">
      <img src={icon} />
      <img src={icon1} />
      <img src={icon2} />
      <img src={icon3} />
      <p>Copiryght, SportSee 2020</p>
    </div>
  );
}
