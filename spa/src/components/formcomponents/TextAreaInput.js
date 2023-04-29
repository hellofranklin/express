import React, { Component } from "react";
import FormElement from "./FormElement";

class TextAreaInput extends FormElement {
  constructor(props) {
    super(props);
  }

  renderInput() {
    return (
      <div className="textareainput-component">
        <textarea readOnly={true}></textarea>
      </div>
    );
  }
}

export default TextAreaInput;
