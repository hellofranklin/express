import React from "react";
import { ReactComponent as Logo } from "../static/logo.svg";
import { ReactComponent as Card } from "../static/card.svg";
import { ReactComponent as DeleteBoxIcon } from "../static/delete.svg";

const SVGUtils = (props) => {
  switch (props.name) {
    case "logo":
      return <Logo />;
    case "card":
      return <Card />;
    case "delete":
      return <DeleteBoxIcon />;
    default:
      return <></>;
  }
};

export default SVGUtils;
