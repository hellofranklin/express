import React, { useEffect, useState } from "react";
import WithAuth from "../../WithAuth";
import FormBuilder from "../formbuilder/FormBuilder";
import Header from "../header/Header";
import SideBar from "../sidebar/SideBar";
import WithLoadingSpinner from "../spinner/WithLoadingSpinner";
import TitlePanel from "../titlepanel/TitlePanel";
import { createForm } from "./../../api/index";
import "./Home.css";

function Home(props) {
  const [formElements, setFormElements] = useState([]);
  const [formTitle, setFormTitle] = useState("");
  const { handleApiCall } = props;

  useEffect(() => {
    setFormElements(props.formElements || []);
  }, [props.formElements]);

  const addElement = (type) => {
    const newComponent = {
      Id: formElements.length,
      Name: "",
      Type: type,
      Label: "Question",
      Mandatory: "",
      Min: "",
      Max: "",
      Options: [],
    };
    setFormElements([...formElements, newComponent]);
  };

  const updateElement = (updatedElement) => {
    const index = formElements.findIndex(
      (element) => element.Id === updatedElement.Id
    );
    if (index !== -1) {
      setFormElements([
        ...formElements.slice(0, index),
        updatedElement,
        ...formElements.slice(index + 1),
      ]);
    }
  };

  const createFormButtonHandler = async () => {
    const data = formElements.map(({ Id, ...rest }) => {
      rest.Options = "";
      rest.Name = rest.Label;
      return rest;
    });

    const email = localStorage.getItem("email");
    const response = await createForm(data, email, formTitle, handleApiCall);
    const cachedData = JSON.parse(localStorage.getItem("data"));
    cachedData.push({ title: formTitle });
    localStorage.setItem("data", JSON.stringify(cachedData));
    window.location.href = "/app/myforms";
  };

  const updateFormTitle = (title) => {
    setFormTitle(title);
  };

  return (
    <>
      <Header />
      <div className="form-panel">
        <div className="mainPanel">
          <TitlePanel updateFormTitle={updateFormTitle} />
          <FormBuilder
            formElements={formElements}
            onUpdateElement={updateElement}
            createFormButtonHandler={createFormButtonHandler}
          />
        </div>
        <div className="add-element-sidebar">
          <SideBar onAddElement={addElement} />
        </div>
      </div>
    </>
  );
}

export default WithAuth(WithLoadingSpinner(Home));
