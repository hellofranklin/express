import React, { Component } from "react";
import "./FormComponents.css";

class FormElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Id: "1",
      Name: "",
      Type: "",
      Label: "",
      Mandatory: "false",
      Min: "",
      Max: "",
      Options: [],
    };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  changeMandStatus = (event) => {
    this.setState({ ...this.state, Mandatory: event.target.checked });
  };

  render() {
    return (
      <div className="form-component">
        {this.renderInput()}
        <div className="footer">
          <div className="left-footer"> </div>
          <div className="right-footer">
            <label className="switch">
              <input
                type="checkbox"
                onChange={(event) => this.changeMandStatus(event)}
              />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default FormElement;
