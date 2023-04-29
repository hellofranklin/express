import React from "react";
import { useNavigate } from "react-router-dom";
import SVGUtils from "./svgbox";

const Card = (props)=> {

    const navigate = useNavigate();

    const clickchandler = (formelements) => {
        navigate({
          pathname: "/home",
          state: { formelements },
        });
      };

    return(
       <div className="form-card" onClick={() => clickchandler(props.formdata.elements)} >
            <div className="form-card-image"> <SVGUtils type="basic"/></div>
            <div className="form-card-header">{props.formdata.title}</div>
            <div className="form-card-body">{props.formdata.description}</div>
        </div>
       
    )
}

export  default Card;