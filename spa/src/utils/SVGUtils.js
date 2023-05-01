import React from "react";
import { ReactComponent as Logo } from "../static/logo.svg";
import { ReactComponent as Card } from "../static/card.svg";
import { ReactComponent as Feedback } from "../static/feedback.svg";
import { ReactComponent as Contact } from "../static/contact.svg";
import { ReactComponent as Add } from "../static/add.svg";
import { ReactComponent as MyForm } from "../static/myform.svg";
import { ReactComponent as DeleteBoxIcon } from "../static/delete.svg";

const SVGUtils = (props) => {
  switch (props.name) {
    case "logo":
      return <Logo />;
    case "card":
      return <Card />;
    case "add":
      return <Add />;
    case "contact":
        return <Contact />;
    case "feedback":
        return <Feedback />;
    case "myform":
        return <MyForm />;
    case "delete":
      return <DeleteBoxIcon />;
    default:
      return <></>;
  }
};

export default SVGUtils;
