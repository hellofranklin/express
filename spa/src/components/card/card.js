import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SVGUtils from "../../utils/SVGUtils";

const Card = (props)=> {

    const navigate = useNavigate();
    const [openMenus, setOpenMenus] = useState({});

    const clickchandler = (formelements) => {
        navigate({
          pathname: "/home",
          state: { formelements },
        }); 
      };  

      const toggleMenu = (formId) => {
        setOpenMenus((prevState) => ({
          ...prevState,
          [formId]: !prevState[formId],
        }));
      };

    return(
       <div className="form-card" key={props.formdata.id}>
            <div className="form-card-image"> <SVGUtils name={props.formdata.svg ? props.formdata.svg : "card"}/></div>
            <div className="form-card-header">{props.formdata.title}</div>
            <div className="form-card-body">{props.formdata.description}</div>

            <div className="form-card-footer">
                  <div
                    className="form-card-menu"
                    onClick={() => toggleMenu(props.formdata.id)}>
                    <div className="form-card-menu-dots"> &#8226;&#8226;&#8226;</div>
                    {openMenus[props.formdata.id] && (
                      <div className="form-card-menu-items">
                        <div className="form-card-menu-item">Edit</div>
                        <div className="form-card-menu-item">Delete</div>
                      </div>
                    )}
                  </div>
                </div>
        </div>
       
    )
}

export default Card;