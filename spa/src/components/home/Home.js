import React, { useEffect, useState } from "react";
import WithAuth from "../../WithAuth";
import FormBuilder from "../formbuilder/FormBuilder";
import Header from "../header/Header";
import SideBar from "../sidebar/SideBar";
import WithLoadingSpinner from "../spinner/WithLoadingSpinner";
import TitlePanel from "../titlepanel/TitlePanel";
import "./Home.css";

function Home(props) {
  const [formElements, setFormElements] = useState([]);
  const [formTitle, setFormTitle] = useState("");

  useEffect(() => {
    setFormElements(props.formElements || []);
  }, [props.formElements]);

  const addElement = (type) => {
    const newComponent = {
      elementId: formElements.length,
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
      (element) => element.elementId === updatedElement.elementId
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
    const data = formElements.map(({ elementId, ...rest }) => {
      rest.Options = "";
      rest.Name = rest.Label;
      return rest;
    });

    const email = localStorage.getItem("email");
    const response = await postFranklinFormData(data, email, formTitle);
    const cachedData = JSON.parse(localStorage.getItem("data"));
    cachedData.push({title: formTitle});
    localStorage.setItem("data", JSON.stringify(cachedData));
    window.location.href = "/app/myforms";
  };

  const postFranklinFormData = async (data, userEmail, formTitle) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "text/plain;charset=utf-8");

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(data),
      redirect: "follow",
    };

    const URL =
      process.env.REACT_APP_BACKEND_URL +
      `?requestType=createform&formTitle=${formTitle}&email=${userEmail}`;

    const { handleApiCall } = props;
    return handleApiCall(() => fetch(encodeURI(URL), requestOptions));
  };

  const updateFormTitle = (title) => {
    setFormTitle(title);
  };

  return (
    <>
      <Header />
      <div className="form-panel">
        <div className="mainPanel">
          <TitlePanel updateFormTitle={updateFormTitle}/>
          <FormBuilder
            formElements={formElements}
            onUpdateElement={updateElement}
            createFormButtonHandler={createFormButtonHandler}
          />
        </div>
        <SideBar onAddElement={addElement} />
      </div>
    </>
  );
}

export default WithAuth(WithLoadingSpinner(Home));
