import React, { useEffect, useRef, useState } from "react";
import "./BottomNavigation.css";

const BottomNavigation = ({ onAddElement }) => {
  const [showOptions, setShowOptions] = useState(false);
  const optionsRef = useRef(null);
  const elements = ["Text", "Email", "Select", "Textarea", "Radio", "Checkbox"];

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleOptionClick = ( elementOption ) => {
    setShowOptions(false);
    onAddElement(elementOption.toLowerCase());
  };

  const handleClickOutside = (event) => {
    if (optionsRef.current && !optionsRef.current.contains(event.target)) {
      setShowOptions(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bottom-navigation-container">
      {/* Bottom Navigation */}
      <div className="bottom-navigation">
        <button className="nav-item">
          <span>Home</span>
        </button>
        <button className="nav-item create-plus-button" onClick={toggleOptions}>
          <span className="create-plus-span">+</span>
        </button>
        <button className="nav-item">
          <span>My Forms</span>
        </button>
      </div>

      {/* Options Panel */}
      {showOptions && (
        <div className="options-panel" ref={optionsRef}>
          {elements.map((element, index) => {
            return (
              <button
                key={index}
                className="option-item"
                onClick={() => handleOptionClick(element)}
              >
                {element}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default BottomNavigation;
