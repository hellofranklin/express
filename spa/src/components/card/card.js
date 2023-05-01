import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SVGUtils from "../../utils/SVGUtils";
import "./card.css";

const Card = (props) => {
  const navigate = useNavigate();
  const [openMenus, setOpenMenus] = useState({});

  const clickchandler = (formdata) => {
    let urlParams = formdata.svg === "add" ? "" : `?sample=${formdata.svg}`;
    navigate(`/create${urlParams}`);
  };

  const toggleMenu = (formId) => {
    setOpenMenus((prevState) => ({
      ...prevState,
      [formId]: !prevState[formId],
    }));
  };

  const editForm = (formId) => {
    alert("Edit Form" + formId);
    console.log(formId);
  };

  const previewForm = (formId) => {
    alert("Preview Form" + formId);
  };

  const publishForm = (formId) => {
    alert("Publish Form" + formId);
  };

  const deleteForm = (formId) => {
    alert("Delete Form" + formId);
  };

  if (props.type === "userform") {
    return (
      <div className="form-card" key={props.id}>
        <div className="form-card-image">
          <SVGUtils name={props.formdata.svg ? props.formdata.svg : "myform"} />
        </div>
        <div className="form-card-header">{props.formdata.title}</div>

        <div className="form-card-footer">
          <div className="form-card-menu" onClick={() => toggleMenu(props.id)}>
            <div className="form-card-menu-dots"> &#8942;</div>
            {openMenus[props.id] && (
              <div className="form-card-menu-items">
                <a
                  className="form-card-menu-item"
                  href={`/form-authoring/create?action=update&title=${props.formdata.title}`}
                >
                  Edit
                </a>
                <a className="form-card-menu-item">Preview</a>
                <a className="form-card-menu-item">Publish</a>
                <a className="form-card-menu-item">Delete</a>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="form-card sample-card"
        key={props.id}
        onClick={() => clickchandler(props.formdata)}
      >
        <div className="form-card-image">
          <SVGUtils name={props.formdata.svg ? props.formdata.svg : "myform"} />
        </div>
        <div className="form-card-header">{props.formdata.title}</div>
      </div>
    );
  }
};

export default Card;
