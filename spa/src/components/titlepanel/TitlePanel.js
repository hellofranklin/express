import React, { Component } from "react";
import "./TitlePanel.css";

class TitlePanel extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   formTitle: ( this.props.formTitle === undefined || this.props.formTitle === null ) ? "" : this.props.formTitle,
    //   formDesc: ( this.props.formDesc === undefined || this.props.formDesc === null ) ? "" : this.props.formDesc,
    // };
  }

  render() {
    const formTitle =
      this.props.formTitle === undefined || this.props.formTitle === null
        ? ""
        : this.props.formTitle;
    const formDesc =
      this.props.formDesc === undefined || this.props.formDesc === null
        ? ""
        : this.props.formDesc;

    return (
      <div className="title-container">
        <input
          type="text"
          className="form-title"
          placeholder="Untitled Form"
          onChange={(evt) =>
            this.props.updateFormBuilderState({ formTitle: evt.target.value })
          }
          value={formTitle}
          required={true}
        />
        <input
          type="text"
          className="form-description"
          placeholder="Form description"
          onChange={(evt) =>
            this.props.updateFormBuilderState({ formDesc: evt.target.value })
          }
          value={formDesc}
        />
      </div>
    );
  }
}

export default TitlePanel;
