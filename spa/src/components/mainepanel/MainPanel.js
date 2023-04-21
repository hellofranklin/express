import React, { Component, useState } from "react";
import FormBuilder from "../formbuilder/FormBuilder";
import WelcomePanel from "../welcomepanel/WelcomePanel";
import MyForms from "../myforms/MyForms";
import "./MainPanel.css";
import SideBar from "../sidebar/SideBar";

function MainPanel() {
  const [tabIndex, setTabIndex] = useState(0);

  const [formFields, setFormFields] = useState([]);

  const handleAddElement = (name, type, label) => {
    const id = formFields.length + 1;
    const newElement = { id, name, type, label };
    setFormFields([...formFields, newElement]);
  };

  const handleTabChange = (index) => {
    setTabIndex(index);
  };

  return (
    <div className="form-panel">
      <div className="mainPanel">
        <WelcomePanel />
        <FormBuilder formFields={formFields} setFormFields={setFormFields} />
      </div>
      {tabIndex == 0 ? <SideBar handleAddElement={handleAddElement} /> : ""}
    </div>
  );
}

export default MainPanel;
