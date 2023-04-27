import React, { Component } from "react";
import "./TitlePanel.css";

class TitlePanel extends Component {
  render() {
    return (
      <div className="title-container">
        <input
          type="text"
          placeholder="Form Title"
          onChange={(evt) => this.props.updateFormTitle(evt.target.value)}
          required={true}
        />
        <input type="text" placeholder="Form Description" />
      </div>
    );
  }
}

export default TitlePanel;
