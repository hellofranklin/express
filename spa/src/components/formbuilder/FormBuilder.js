import React, { Component } from "react";
import TextInput from "../formcomponents/TextInput";
import SelectInput from "../formcomponents/SelectInput";

class FormBuilder extends Component {
  constructor(props) {
    super(props);
  }

  handleUpdateElement = (newState) => {
    const { onUpdateElement } = this.props;

    onUpdateElement(newState);
  };

  handleRemoveElement = (index) => {
    const { formElements, onUpdateElement } = this.props;
    const updatedElements = [
      ...formElements.slice(0, index),
      ...formElements.slice(index + 1),
    ];
    onUpdateElement(index, "remove", true);
    updatedElements.forEach((element, index) => {
      onUpdateElement(index, "index", index);
    });
  };

  renderFormElement = (element, index) => {
    switch (element.Type) {
      case "text":
        return (
          <TextInput
            key={index}
            elementState={element}
            onUpdate={this.handleUpdateElement}
            onRemove={() => this.handleRemoveElement(index)}
          />
        );
      case "select":
        return (
          <SelectInput
            key={index}
            elementState={element}
            onUpdate={this.handleUpdateElement}
            onRemove={() => this.handleRemoveElement(index)}
          />
        );
      default:
        return null;
    }
  };

  render() {
    const { formElements } = this.props;
    return (
      <div className="form-components">
        {formElements.map((element, index) =>
          this.renderFormElement(element, index)
        )}
        {formElements.length > 0 && (
          <button
            className="createButton"
            onClick={this.props.createFormButtonHandler}
          >
            {" "}
            Create{" "}
          </button>
        )}
      </div>
    );
  }
}

export default FormBuilder;
