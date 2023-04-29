import React, { Component } from "react";
import TextInput from "../formcomponents/TextInput";
import SelectInput from "../formcomponents/SelectInput";
import CheckBoxInput from "../formcomponents/CheckBoxInput";
import TextAreaInput from "../formcomponents/TextAreaInput";
import RadioInput from "../formcomponents/RadioInput";

class FormBuilder extends Component {
  constructor(props) {
    super(props);
  }

  componentMap = {
    Text: TextInput,
    Select: SelectInput,
    Checkbox: CheckBoxInput,
    Textarea: TextAreaInput,
    Radio: RadioInput,
  };

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
    const ElementComponent = this.componentMap[element.Type];
    if (!ElementComponent) {
      return null;
    }
    return (
      <ElementComponent
        key={index}
        elementState={element}
        onUpdate={this.handleUpdateElement}
        onRemove={() => this.handleRemoveElement(index)}
      />
    );
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
