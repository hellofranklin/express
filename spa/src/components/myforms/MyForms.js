import React, { useEffect, useState } from "react";
import { getUserForms } from "../../api";
import Formtemplates from "../../sampleform/sampledata";
import WithAuth from "../../WithAuth";
import Card from "../card/card";
import Header from "../header/Header";
import WithLoadingSpinner from "../spinner/WithLoadingSpinner";

import "./MyForms.css";

const MyForms = (props) => {

  const [forms, setForms] = useState([]);

  useEffect(() => {
    const cachedData = localStorage.getItem("data");
    if (cachedData) {
      setForms(JSON.parse(cachedData));
    } else {
      const userEmail = localStorage.getItem("email");
      getUserForms(userEmail, props.handleApiCall).then((responseData) => {
        localStorage.setItem("data", JSON.stringify(responseData.forms));
        setForms(responseData.forms);
      });
    }
  }, []);

  return (
    <div>
      <Header />
      <div className="main-container">
      <div className="container sample-forms">
        <div className="container-heading">
          <h3> Form Templates</h3>
        </div>

        <div class="form-cards-list">


          {Object.values(Formtemplates).map((form, index) => {
            return <Card formdata={form} />;
          })}
        </div>
      </div>

      <div className="container my-forms">
        <div className="container-heading">
          <h3> My Forms</h3>
        </div>

        <div className="form-cards">
          {forms.length <= 0 ? (
            <p> No Forms Found </p>
          ) : (
            forms.map((form) => <Card formdata={form} />)
          )}
        </div>
      </div>
      </div>
    </div>
  );
};

export default WithAuth(WithLoadingSpinner(MyForms));
