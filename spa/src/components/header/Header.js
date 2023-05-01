import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import SVGUtils from "../../utils/SVGUtils";
import "./Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const email = localStorage.getItem("email");

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  function handleLogoClick() {
    navigate("/home");
  }

  return (
    <div className="header-container">
      <div className="navigation-container">
        <div className="left-navigation-container">
          <div className="logo-container" onClick={handleLogoClick}>
            <div className="logo">
              <SVGUtils name="logo" />
            </div>
            <div className="sitetitle">Forms Express</div>
          </div>
        </div>

        <div className="right-navigation-container">
          <div className="header-menu">
            <div className="profile-icon-container" onClick={toggleMenu}>
              <button className="header-profile-btn" >
                <div id="profileImage"> {email.charAt(0).toUpperCase()} </div>
                <span className="header-profile-arrow">&#9660;</span>
              </button>
              {isMenuOpen && (
                <ul className="header-profile-menu">
                  <li className="header-profile-menu-item">
                    <Link to="/myforms">My Forms</Link>{" "}
                  </li>
                  <li
                    className="header-profile-menu-item"
                    onClick={handleLogout}
                  >
                    Logout
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
