import React from "react";
import "./SideBar.css";

function SideBar({ onAddElement }) {
  return (
    <div className="dropdown">
      <button className="dropbtn">Add Element</button>
      <div className="dropdown-content">
        <button onClick={() => onAddElement("text")}>
          Text
        </button>
        <button onClick={() => onAddElement("select")}>
          Select
        </button>
      </div>
    </div>
  );
}

export default SideBar;
