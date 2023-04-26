import React, { Component } from "react";
import "./FormComponents.css";

class FormElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Type: "",
      Label: "",
      Mandatory: "",
      Min: "",
      Max: "",
      Options: [],
    };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  getState = () => {
    const { value } = this.state;
    return { value };
  };

  render() {
    return <div className="form-component">{this.renderInput()}</div>;
  }
}

export default FormElement;
