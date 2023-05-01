import React from "react";
import "./SideBar.css";

function SideBar({ onAddElement }) {
  const elements = ["Text", "Select", "Textarea", "Radio", "Checkbox"];
  return (
    <div className="sidebar-container">
      <div className="dropdown">
        <button className="dropbtn">Add Element</button>
        <div className="dropdown-content">
          {elements.map((element, index) => {
            return (
              <button key={index} onClick={() => onAddElement(element)}>
                {element}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
