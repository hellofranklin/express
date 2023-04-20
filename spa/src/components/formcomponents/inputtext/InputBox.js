import React from "react";
import "./InputBox.css";

function InputBox(props) {
  return (
    <div className="rectangle-box">
      <div className="delete-button">
        <i classNameName="fa fa-trash"></i>
      </div>
      <div classNameName="input-box">
        <input type={Text} placeholder="Type your question here" />
      </div>
      <div className="answer-box">
        <input type={Text} readOnly />
      </div>
    </div>
  );
}

export default InputBox;
