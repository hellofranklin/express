import React, { Component } from "react";
import FormElement from "./FormElement";

class TextAreaInput extends FormElement {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.setState({
      Id: this.props.elementState.Id,
      Name: this.props.elementState.Name,
      Type: this.props.elementState.Type,
      Label: this.props.elementState.Label,
      Mandatory: this.props.elementState.Mandatory,
      Min: this.props.elementState.Min,
      Max: this.props.elementState.Max,
      Options: this.props.elementState.Options,
    });
  }

  handleChange = (updatedData) => {
    let updatedState = { ...this.state, ...updatedData };
    this.setState(updatedState);
    this.props.onUpdate(this.state);
  };

  renderInput() {
    return (
      <div className="textinput-component">
        <input
          type="text"
          value={this.state.Label}
          onChange={(event) => this.handleChange({ Label: event.target.value })}
        />
        <input type="text" value="Answer" disabled />
      </div>
    );
  }
}

export default TextAreaInput;
