import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  const handleLogout = () => {
    console.log("logout clicked");
  };

  const getLogo = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="-5 -5 250 244" width="40" height="40">
        <rect height="240" rx="42.5" width="240" fill="#fa0f00"/>
        <path d="M186.617 175.95h-28.506a6.243 6.243 0 0 1-5.847-3.769l-30.947-72.359a1.364 1.364 0 0 0-2.611-.034L99.42 145.731a1.635 1.635 0 0 0 1.506 2.269h21.2a3.27 3.27 0 0 1 3.01 1.994l9.281 20.655a3.812 3.812 0 0 1-3.507 5.301H53.734a3.518 3.518 0 0 1-3.213-4.904l49.09-116.902A6.639 6.639 0 0 1 105.843 50h28.314a6.628 6.628 0 0 1 6.232 4.144l49.43 116.902a3.517 3.517 0 0 1-3.202 4.904z" data-name="256" fill="#fff"/>
      </svg>
    );
  };

  function handlclick() {
    navigate("/home");
  }

  return (
    <div className="header-container">
      <div className="navigation-container">
        <div className="left-navigation-container" >
          <div className="logo-container" onClick={handlclick}>
            <div className="logo">{getLogo()}</div>
            <div className="sitetitle">Forms Express</div> 
      
          </div>
        </div>

        <div className="right-navigation-container">
          <div className="header-menu">
            <button className="header-profile-btn" onClick={toggleMenu}>
              <div id="profileImage"> A</div>
              <span className="header-profile-arrow">&#9660;</span>
            </button>
            {isMenuOpen && (
              <ul className="header-profile-menu">
                <li className="header-profile-menu-item" onClick={handleLogout}>My Forms</li>
                <li className="header-profile-menu-item" onClick={handleLogout}>My Profile</li>
                <li className="header-profile-menu-item" onClick={handleLogout}>Logout</li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
