import React, { Component } from "react";
import FormElement from "./FormElement";

class RadioInput extends FormElement {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const defaultState = { Type: "Radio", Options: ["", ""] };
    this.updateState(defaultState);
  }

  updateState = (updatedElements) => {
    this.setState((prevState) => ({
      ...prevState,
      ...updatedElements,
    }));
  };

  handleOptionChange = (event) => {
    const index = event.target.dataset.index;
    let options = this.state.Options;
    options[index] = event.target.value;
    this.handleChange({ Options: options });
  };

  addOption = () => {
    let options = this.state.Options;
    options[this.state.Options.length] = `Option ${
      this.state.Options.length + 1
    }`;

    this.handleChange({ Options: options });
  };

  deleteOption = (event) => {
    const deletedIndex = event.target.dataset.index;
    let options = [...this.state.Options]; // create a copy of the array
    options.splice(deletedIndex, 1); 
    this.handleChange({ Options: options });
  };

  renderInput() {
    const { Options } = this.state;
    return (
      <div className="radioinput-component">
        {Options.map((option, index) => (
          <div key={index} className="option-container">
            <input type={"radio"} readOnly={true}></input>
            <input
              type="text"
              placeholder={`Option ${index + 1}`}
              data-index={index}
              onChange={this.handleOptionChange}
            />
            {index > 1 && (
              <span
                className="cross-btn"
                data-index={index}
                onClick={this.deleteOption}
              />
            )}
          </div>
        ))}
        {this.state.Options.length < 4 && (
          <div key={this.state.Options.length} className="option-container">
            <input
              type="text"
              placeholder="Add Option"
              onFocus={this.addOption}
              readOnly={true}
            />
            <span></span>
          </div>
        )}
      </div>
    );
  }
}

export default RadioInput;
