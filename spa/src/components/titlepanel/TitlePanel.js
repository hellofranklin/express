import React, { Component } from "react";
import "./TitlePanel.css";

class TitlePanel extends Component {
  render() {
    return (
      <div className="title-container">
        <input
          type="text"
          className="form-title"
          placeholder="Untitled Form"
          onChange={(evt) => this.props.updateFormTitle(evt.target.value)}
          required={true}
        />
        <input type="text" className="form-description" placeholder="Form description" />
      </div>
    );
  }
}

export default TitlePanel;
