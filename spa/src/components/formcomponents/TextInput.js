import React, { Component } from "react";
import FormElement from "./FormElement";

class TextInput extends FormElement {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.setState({
      elementId: this.props.elementState.elementId,
      Name: this.props.elementState.Name,
      Type: this.props.elementState.Type,
      Label: this.props.elementState.Label,
      Mandatory: this.props.elementState.Mandatory,
      Min: this.props.elementState.Min,
      Max: this.props.elementState.Max,
      Options: this.props.elementState.Options,
    });
  }

  handleChange = ( value ) => {
    let updatedState = {...this.state, Label: value}
    this.setState(updatedState);
    this.props.onUpdate( this.state );
  };

  renderInput() {
    return (
      <div className="textinput-component">
        <input
          type="text"
          value={this.state.Label}
          onChange={ (event) =>  this.handleChange(event.target.value)}
        />
        <input type="text" value="Answer" disabled />
      </div>
    );
  }
}

export default TextInput;
