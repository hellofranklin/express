import React from "react";
import { ReactComponent as Logo } from "../../static/logo.svg";
import { ReactComponent as Card } from "../../static/card.svg";

const SVGUtils = (props) => {
  switch (props.name) {
    case "logo":
      return <Logo />;
    case "card":
      return <Card />;
    default:
        return <></>;
  }
};

export default SVGUtils;
