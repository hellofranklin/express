import React, { useState } from "react";
import "./FormBuilder.css";
import InputBox from "./../formcomponents/inputtext/InputBox";

const FormBuilder = ({ formFields, setFormFields }) => {
  const handleDragStart = (event, element) => {
    event.dataTransfer.setData("element", JSON.stringify(element));
  };

  const handleDrop = (event) => {
    const element = JSON.parse(event.dataTransfer.getData("element"));
    setFormFields([...formFields, element]);
  };

  return (
    <div className="form-builder">
      <div className="form-fields" onDrop={handleDrop}>
        {formFields.length === 0 ? (
          <div> No elements </div>
        ) : (
          formFields.map((field) => {
            if (
              field.type === "text" ||
              field.type === "password" ||
              field.type === "email"
            ) {
              return <InputBox />;
            } else if (field.type === "checkbox") {
              return <InputBox />;
            } else if (field.type === "button") {
              return <InputBox />;
            } else if (field.type === "textarea") {
              return <InputBox />;
            } else if (field.type === "radio") {
              return <InputBox />;
            } else if (field.type === "select") {
              return <InputBox />;
            } else {
              return null;
            }
          })
        )}
      </div>
    </div>
  );
};

export default FormBuilder;
