import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserForms } from "../../api";
import formtemplates from "../../sampleform/sampledata";
import WithAuth from "../../WithAuth";
import Header from "../header/Header";
import WithLoadingSpinner from "../spinner/WithLoadingSpinner";
import "./MyForms.css";

const MyForms = (props) => {
  const [openMenus, setOpenMenus] = useState({});
  const [forms, setForms] = useState([]);
  const navigate = useNavigate();

  const toggleMenu = (formId) => {
    setOpenMenus((prevState) => ({
      ...prevState,
      [formId]: !prevState[formId],
    }));
  };

  const clickchandler = (formelements) => {
    navigate({
      pathname: "/home",
      state: { formelements },
    });
  };

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
      <div className="sample-forms-container">
        {formtemplates.map((form) => (
          <div
            className="my-form-card"
            key={form.id}
            onClick={() => clickchandler(form.elements)}
          >
            <div className="my-form-card-header">{form.title}</div>
            <div className="my-form-card-body">{form.description}</div>
          </div>
        ))}
      </div>
      <hr />
      <div className="my-forms-container">
        {forms.map((form) => (
          <div className="my-form-card" key={form.id}>
            <div className="my-form-card-header">{form.title}</div>
            <div className="my-form-card-body">{form.description}</div>
            <div className="my-form-card-footer">
              <div
                className="my-form-card-menu"
                onClick={() => toggleMenu(form.id)}
              >
                <div className="my-form-card-menu-dots">
                  &#8226;&#8226;&#8226;
                </div>
                {openMenus[form.id] && (
                  <div className="my-form-card-menu-items">
                    <div className="my-form-card-menu-item">Edit</div>
                    <div className="my-form-card-menu-item">Delete</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WithAuth(WithLoadingSpinner(MyForms));
