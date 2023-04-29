import React, { Component } from "react";
import FormElement from "./FormElement";

class TextInput extends FormElement {
  constructor(props) {
    super(props);
  }

  renderInput() {
    return (
      <div className="textinput-component">
        <input type="text" value="Answer" disabled />
      </div>
    );
  }
}

export default TextInput;
