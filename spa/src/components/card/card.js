import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SVGUtils from "../../utils/SVGUtils";
import "./card.css";

const Card = (props) => {
  const navigate = useNavigate();
  const [openMenus, setOpenMenus] = useState({});

  const clickchandler = (formelements) => {
    navigate({
      pathname: "/create",
      state: { formelements },
    });
  };
  const toggleMenu = (formId) => {
    setOpenMenus((prevState) => ({
      ...prevState,
      [formId]: !prevState[formId],
    }));
  };

  if (props.type === "userform") {
    return (
      <div className="form-card" key={props.formdata.id}>
        <div className="form-card-image">
          {" "}
          <SVGUtils name={props.formdata.svg ? props.formdata.svg : "myform"} />
        </div>
        <div className="form-card-header">{props.formdata.title}</div>

        <div className="form-card-footer">
          <div
            className="form-card-menu"
            onClick={() => toggleMenu(props.formdata.id)}
          >
            <div className="form-card-menu-dots"> &#8942;</div>
            {openMenus[props.formdata.id] && (
              <div className="form-card-menu-items">
                <div className="form-card-menu-item">Edit</div>
                <div className="form-card-menu-item">Preview</div>
                <div className="form-card-menu-item">Publish</div>
                <div className="form-card-menu-item">Delete</div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="form-card"
          key={props.formdata.id}
          onClick={() => clickchandler(props.formdata.elements)}>
       
        <div className="form-card-image">
          <SVGUtils name={props.formdata.svg ? props.formdata.svg : "myform"} />
        </div>
        <div className="form-card-header">{props.formdata.title}</div>
       
      </div>
    );
  }
};

export default Card;
