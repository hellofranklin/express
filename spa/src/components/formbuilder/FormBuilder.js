import React, { Component } from "react";
import TextInput from "../formcomponents/TextInput";
import SelectInput from "../formcomponents/SelectInput";
import CheckBoxInput from "../formcomponents/CheckBoxInput";
import TextAreaInput from "../formcomponents/TextAreaInput";
import RadioInput from "../formcomponents/RadioInput";
import SideBar from "../sidebar/SideBar";
import WithLoadingSpinner from "../spinner/WithLoadingSpinner";
import TitlePanel from "../titlepanel/TitlePanel";

import { createForm } from "../../api/index";

class FormBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formElements: [],
      formTitle: this.props.formTitle,
      formDesc: this.props.formDescription,
    };
  }

  componentMap = {
    Text: TextInput,
    Select: SelectInput,
    Checkbox: CheckBoxInput,
    Textarea: TextAreaInput,
    Radio: RadioInput,
  };

  handleUpdateElement = (updatedElement) => {
    const index = this.state.formElements.findIndex(
      (element) => element.Id === updatedElement.Id
    );
    if (index !== -1) {
      const updatedElements = [
        ...this.state.formElements.slice(0, index),
        updatedElement,
        ...this.state.formElements.slice(index + 1),
      ];
      this.setState({
        formElements: updatedElements,
      });
    }
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

  addElement = (type) => {
    const newComponent = {
      Id: this.state.formElements.length,
      Name: "",
      Type: type,
      Label: "Question",
      Mandatory: false,
      Min: "",
      Max: "",
      Options: [],
    };
    this.setState({
      ...this.state,
      formElements: [...this.state.formElements, newComponent],
    });
  };

  createFormButtonHandler = async () => {
    const data = this.state.formElements.map(({ Id, ...rest }) => {
      rest.Options = "";
      rest.Name = rest.Label;
      return rest;
    });

    const email = localStorage.getItem("email");

    const { formTitle, formDesc } = this.state;

    console.log(data);
    console.log(formTitle)
    console.log(formDesc);
    if (this.validateData(data, email, formTitle, formDesc)) {
      const response = await createForm(
        data,
        email,
        formTitle,
        formDesc,
        this.props.handleApiCall
      );
      const cachedData = JSON.parse(localStorage.getItem("data"));
      cachedData.push({ title: formTitle });
      localStorage.setItem("data", JSON.stringify(cachedData));
      window.location.href = "/app/myforms";
    }
  };

  validateData = () => {
    return false;
  };

  updateFormTitle = (title) => {
    this.setState({ ...this.state, formTitle: title });
  };

  updateFormDescription = (desc) => {
    this.setState({ ...this.state, formDesc: desc });
  };

  render() {
    const { formElements } = this.state;
    return (
      <div className="formbuilder-container">
        <div className="form-panel">
          <TitlePanel
            updateFormTitle={this.updateFormTitle}
            updateFormDescription={this.updateFormDescription}
          />
          <div className="form-components">
            {this.state.formElements.map((element, index) =>
              this.renderFormElement(element, index)
            )}
            {formElements.length > 0 && (
              <button
                className="createButton"
                onClick={this.createFormButtonHandler}
              >
                Create
              </button>
            )}
          </div>
        </div>
        <div className="add-element-sidebar">
          <SideBar onAddElement={this.addElement} />
        </div>
      </div>
    );
  }
}

export default WithLoadingSpinner(FormBuilder);
