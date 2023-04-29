import React, { Component } from "react";
import FormElement from "./FormElement";
import "./RadioInput.css"

class RadioInput extends FormElement {
  constructor(props) {
    super(props);
    this.state = {
      options: ["hello", "fdsfsdfsd"],
    };
  }

  handleOptionChange = (index, value) => {
    const updatedOptions = [...this.state.options];
    updatedOptions[index] = { ...updatedOptions[index], value };
    this.setState({ options: updatedOptions });
  };

  handleAddOption = () => {
    const newOption = { value: "" };
    this.setState((prevState) => ({
      options: [...prevState.options, newOption],
    }));
  };

  handleOptionFocus = (index) => {
    if (index === this.state.options.length - 1) {
      this.handleAddOption();
    }
  };

  renderInput() {
    return (
      <div className="radio-container">
        {this.state.options.map((option, index) => (
          <div key={index} className="radio-option">
            <input
              type="radio"
              name={this.props.name}
              value={option.value}
              onChange={(e) => this.handleOptionChange(index, e.target.value)}
              onFocus={() => this.handleOptionFocus(index)}
            />
            <label className="radio-label">
              <input
                type="text"
                value={option.value}
                onChange={(e) => this.handleOptionChange(index, e.target.value)}
              />
            </label>
          </div>
        ))}
      </div>
    );
  }
}

export default RadioInput;
