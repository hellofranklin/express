import React, { useState } from "react";
import "./MyForms.css";

const MyForms = () => {
  const forms = [
    { id: 1, name: "Form 1", description: "This is form 1" },
    { id: 2, name: "Form 2", description: "This is form 2" },
    { id: 3, name: "Form 3", description: "This is form 3" },
    { id: 4, name: "Form 4", description: "This is form 4" },
    { id: 5, name: "Form 5", description: "This is form 5" },
    { id: 6, name: "Form 6", description: "This is form 6" },
  ];

  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (formId) => {
    setOpenMenus((prevState) => ({
      ...prevState,
      [formId]: !prevState[formId],
    }));
  };

  return (
    <div className="my-forms-container">
      {forms.map((form) => (
        <div className="my-form-card" key={form.id}>
          <div className="my-form-card-header">{form.name}</div>
          <div className="my-form-card-body">{form.description}</div>
          <div className="my-form-card-footer">
            <div className="my-form-card-menu"  onClick={() => toggleMenu(form.id)} >
              <div className="my-form-card-menu-dots">
                &#8226;&#8226;&#8226;
              </div>
              {openMenus[form.id] && (
                <div className="my-form-card-menu-items">
                  <div className="my-form-card-menu-item">Edit</div>
                  <div className="my-form-card-menu-item">Delete</div>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyForms;
