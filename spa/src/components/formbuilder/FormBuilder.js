import React, { useState } from "react";
import "./FormBuilder.css";
import CreateForm from "./CreateForm.js";

const FormBuilder = ({formFields, setFormFields}) => {
  return (
    <>
      <div className="formbuilder-container">
        <CreateForm formFields={formFields} setFormFields={setFormFields} />
      </div>
    </>
  );
};

export default FormBuilder;
