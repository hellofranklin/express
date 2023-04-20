import React from "react";
import "./SideBar.css";

function SideBar({ handleAddElement }) {
  return (
    <div className="dropdown">
      <button className="dropbtn">Add Element</button>
      <div className="dropdown-content">
        <button onClick={() => handleAddElement("text", "text", "Text Input")}>
          Text
        </button>
        <button
          onClick={() => handleAddElement("checkbox", "checkbox", "Checkbox")}
        >
          Choice
        </button>
        <button onClick={() => handleAddElement("button", "button", "Button")}>
          Button
        </button>
        <button
          onClick={() => handleAddElement("textarea", "textarea", "Text Area")}
        >
          Text Area
        </button>
        <button
          onClick={() => handleAddElement("radio", "radio", "Radio Button")}
        >
          Radio Button
        </button>
        <button
          onClick={() => handleAddElement("select", "select", "Select Box")}
        >
          Select
        </button>
      </div>
    </div>
  );
}

export default SideBar;
