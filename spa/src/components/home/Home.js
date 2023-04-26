import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormBuilder from "../formbuilder/FormBuilder";
import Header from "../header/Header";
import SideBar from "../sidebar/SideBar";
import TitlePanel from "../titlepanel/TitlePanel";
import "./Home.css";

function Home(props) {
  const email = localStorage.getItem("email");
  const code = localStorage.getItem("code");
  const navigate = useNavigate();

  const [formElements, setFormElements] = useState([]);

  const [redirecting, setRedirecting] = useState(false);

  useEffect(() => {
    if (!email || !code) {
      setRedirecting(true);

      const timeoutId = setTimeout(() => {
        navigate("/login");
      }, 1000);

      return () => clearTimeout(timeoutId);
    }
  }, [email, code, navigate]);

  if (redirecting) {
    return (
      <div className="redirecting-message">Redirecting to login page...</div>
    );
  }

  const addElement = (type) => {
    var elementId = formElements.length;
    var newComponent = {
      elementId,
      Name: "",
      Type: type,
      Label: "",
      Mandatory: "",
      Min: "",
      Max: "",
      Options: [],
    };

    const updatedFormElements = [...formElements, newComponent];
    setFormElements(updatedFormElements);
  };

  const updateElement = (updatedElement) => {
    const elementIndex = formElements.findIndex(
      (element) => element.elementId === updatedElement.elementId
    );
    if (elementIndex !== -1) {
      const updatedFormElements = [
        ...formElements.slice(0, elementIndex),
        updatedElement,
        ...formElements.slice(elementIndex + 1),
      ];
      setFormElements(updatedFormElements);
    }
    console.log(formElements);
  };

  const createFormButtonHandler = () => {
    const data = formElements.map((obj) => {
      const { ["elementId"]: value, ...rest } = obj;
      rest['Options'] = "";
      return rest;
    });

    var email = "neerajadobe93@gmail.com";
    var formTitle = "testingngform";
    postFranklinFormData(data, email, formTitle);
  };

  const postFranklinFormData = async (data, userEmail, formTitle) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "text/plain;charset=utf-8");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(data),
      // mode: 'no-cors',
      redirect: "follow",
    };

    let URL =
      process.env.REACT_APP_BACKEND_URL +
      `?requestType=createform&formTitle=${formTitle}&email=${userEmail}`;

    fetch(encodeURI(URL), requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Header />
      <div className="form-panel">
        <div className="mainPanel">
          <TitlePanel />
          <FormBuilder
            formElements={formElements}
            onUpdateElement={updateElement}
            createFormButtonHandler={createFormButtonHandler}
          />
        </div>
        <SideBar onAddElement={addElement} />
      </div>
    </div>
  );
}

export default Home;
