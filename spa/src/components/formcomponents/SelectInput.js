import React, { Component } from "react";
import FormElement from "./FormElement";

class SelectInput extends FormElement {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.setState((prevState) => ({
      ...prevState,
      Type: "select",
      Options: ["option1", "option2"],
    }));
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleOptionChange = (event) => {
    const { options } = this.state;
    const index = parseInt(event.target.dataset.index);
    options[index] = event.target.value;
    this.setState({ options });
  };

  addOption = () => {
    const { options } = this.state;
    this.setState({ options: [...options, ""] });
  };

  renderInput() {
    const { value, Options } = this.state;
    return (
      <div className="selectinput-component">
        <select value={value} onChange={this.handleChange}>
          {Options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <button onClick={this.addOption}>Add Option</button>
        {Options.map((option, index) => (
          <div key={index}>
            <input
              type="text"
              value={option}
              data-index={index}
              onChange={this.handleOptionChange}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default SelectInput;
