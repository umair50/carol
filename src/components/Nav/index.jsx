import "./index.css";
import Logo from "../../assets/logo.png";
// import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="main-nav-conatainer">
      <div className="sec-nav-conatainer">
        <div className="logo-imagess">
          <img src={Logo} alt="logo.icon" className="logo-image" />
        </div>
        <div className="nav-menus">
          <a href="/" className="nav-menu">
            Home
          </a>
          <a href="/" className="nav-menu">
            About
          </a>
          <a href="/" className="nav-menu">
            Collection
          </a>
          <a href="/" className="nav-menu">
            {" "}
            Roadmap{" "}
          </a>
          <a href="/" className="nav-menu-mint">
            Mint
          </a>
          <a href="/" className="nav-menu">
            Contact
          </a>
          <button className="nav-menu-btn">Connect Wallet</button>
        </div>
      </div>
    </div>
  );
};
export default Nav;
