import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SVGUtils from "../../utils/SVGUtils";
import "./card.css";
import WithLoadingSpinner from "../spinner/WithLoadingSpinner";
import { publishFranklinForm, stageFranklinForm } from "../../api";

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

  const handlPreviewFormAction = (formtitle) => {
    stageFranklinForm(
      formtitle,
      localStorage.getItem("email"),
      props.handleApiCall
    );
  };

  const handlPublishFormAction = (formtitle) => {
    publishFranklinForm(
      formtitle,
      localStorage.getItem("email"),
      props.handleApiCall
    );
  };

  const handleEditButton = (formtitle) => {
    navigate(`/create?action=update&title=${formtitle}`);
  }

  if (props.type === "userform") {
    return (
      <div className="form-card" key={props.id}>
        <div className="form-card-image">
          <SVGUtils name={props.formdata.svg ? props.formdata.svg : "myform"} />
        </div>
        <div className="form-card-header">{props.formdata.title}</div>

        <div className="form-card-footer">
          <div className="form-card-menu">
            <div
              className="form-card-menu-dots"
              onClick={() => toggleMenu(props.id)}
            >
              &#8942;
            </div>
            {
              <div
                className={`form-card-menu-items ${
                  openMenus[props.id] ? "show" : ""
                }`}
              >
                <a
                  className="form-card-menu-item"
                  href="#"
                  onClick={() => handleEditButton(props.formdata.title)}
                >
                  Edit Form
                </a>
                <a
                  className="form-card-menu-item"
                  href={props.formdata.publishUrl.replace("live", "page")}
                  target="_blank"
                >
                  Open Preview Page
                </a>
                <a
                  className="form-card-menu-item"
                  href={props.formdata.publishUrl}
                  target="_blank"
                >
                  Open Live Page
                </a>
                <a
                  className="form-card-menu-item"
                  href={props.formdata.resultSheetUrl}
                  target="_blank"
                >
                  Result Sheet
                </a>
                <a
                  className="form-card-menu-item"
                  href={props.formdata.folderUrl}
                  target="_blank"
                >
                  Forms Folder
                </a>
                <a
                  className="form-card-menu-item"
                  href="#"
                  onClick={() => handlPreviewFormAction(props.formdata.title)}
                >
                  Preview Form data
                </a>
                <a
                  className="form-card-menu-item"
                  href="#"
                  onClick={() => handlPublishFormAction(props.formdata.title)}
                >
                  Publish Form data
                </a>
              </div>
            }
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

export default WithLoadingSpinner(Card);
