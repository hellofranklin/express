import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserForms } from "../../api";
import formtemplates from "../../sampleform/sampledata";
import WithAuth from "../../WithAuth";
import Header from "../header/Header";
import WithLoadingSpinner from "../spinner/WithLoadingSpinner";
import "./MyForms.css";
import Card from "../card/card";
import SVGUtils from "../card/svgbox";

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

  const templatesDataJson = formtemplates;
  return (
    <div>
      <Header />
     
      <div className="container sample-forms">
      <div className="container-heading">
       <h3> Form Templates</h3>
      </div>

      <div class="form-cards-list">
        {formtemplates.map((form) => (<Card formdata={form}/>))}
      </div>
      </div>
     
      <div className="container my-forms">
        <div className="container-heading">
          <h3> Form Templates</h3>
        </div>

        <div className="form-cards-list">
          {Object.entries(templatesDataJson).map(([key, template]) => (
            <div
              className="form-card"
              key={key}
              onClick={() => clickchandler(template.elements)}
            >
              <div className="form-card-image">
                <SVGUtils width="200" height="200" />
              </div>
              <div className="form-card-header">{template.title}</div>
              <div className="form-card-body">{template.description}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="container my-forms">
        <div className="container-heading">
          <h3> My Forms</h3>
        </div>

        <div className="form-cards">
          {forms.map((form) => (
            <div className="form-card" key={form.id}>
              <div className="form-card-header">{form.title}</div>
              <div className="form-card-body">{form.description}</div>
              <div className="form-card-footer">
                <div
                  className="form-card-menu"
                  onClick={() => toggleMenu(form.id)}
                >
                  <div className="form-card-menu-dots">
                    &#8226;&#8226;&#8226;
                  </div>
                  {openMenus[form.id] && (
                    <div className="form-card-menu-items">
                      <div className="form-card-menu-item">Edit</div>
                      <div className="form-card-menu-item">Delete</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WithAuth(WithLoadingSpinner(MyForms));
