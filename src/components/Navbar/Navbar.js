import logo from "assets/icons/logo.svg";
import { ReactComponent as ArrowIcon } from "assets/icons/arrow.svg";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Navbar_logo">
        <img src={logo} alt="logo" className="logo" />
        <span className="logo-name">Insignia</span>
      </div>
      <div className="Navbar_links">
        <a href="/about" className="nav-item active">
          About
        </a>
        <a href="/help" className="nav-item">
          Help
        </a>
        <a href="/features" className="nav-item">
          Features
        </a>
        <a href="/signup" className="nav-item">
          Signup
        </a>
        <button className="request-btn">
          Request Demo
          <ArrowIcon />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
