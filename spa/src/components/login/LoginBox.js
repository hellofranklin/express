import React, { Component } from "react";
import { generateLoginCodeApi, login } from "../../api";
import WithLoadingSpinner from "../spinner/WithLoadingSpinner";
import "./LoginBox.css";

class LoginBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      url: "",
      code: "",
      loading: false,
    };
  }

  updateState = (key, value) => {
    this.setState({
      ...this.state,
      [key]: value,
    });
  };

  handleEmailChange = (event) => {
    this.updateState("email", event.target.value);
  };

  generateLoginCode = async () => {
    this.state.setIsLoading(true);
    const responseJson = await generateLoginCodeApi(
      this.state.email,
      this.props.handleApiCall
    );
    this.state.setUrl(responseJson.LoginPageURL);
    this.updateState("loading", false);
  };

  handleSubmissionClick = async () => {
    const { code, email } = this.state;
    const responseJson = await login(email, code, this.props.handleApiCall);
    const { loginStatus } = responseJson;
    if (loginStatus === "Success") {
      localStorage.setItem("email", email);
      localStorage.setItem("code", code);
      window.location.href = "/home";
    } else {
      alert("Unauthorized Acces");
    }
  };

  handleBackButton = () => {
    this.state.setUrl("");
  };

  render() {
    const { url, email, code, loading } = this.state;
    return (
      <div className="login-container">
        <section
          id="section_uname"
          className={"section_uname " + (url === "" ? "d-show" : "d-none")}
        >
          <div className="auth-wrapper">
            <img
              src="/spa/build/adobe_logo.png"
              alt=""
              height={20}
              width={20}
            />
            <span className="titlename"> Forms Express</span>
            <h2 className="title mb-16 mt-16">Sign in</h2>
            <div className="mb-16">
              <p id="error_uname" className="error"></p>
              <input
                id="inp_uname"
                type="email"
                name="uname"
                className="input"
                placeholder="Enter your Gmail"
                value={email}
                onChange={this.handleEmailChange}
              />
            </div>
            <div className={"loading-dots " + (loading ? "d-show" : "d-none")}>
              <div className="loading-dot"></div>
              <div className="loading-dot"></div>
              <div className="loading-dot"></div>
            </div>
            <div className="mt-16">
              <button
                className="btn"
                id="btn_next"
                onClick={this.generateLoginCode}
              >
                Next
              </button>
            </div>
          </div>
        </section>

        <section
          id="section_pwd"
          className={"section_pwd " + (url === "" ? "d-none" : "d-show")}
        >
          <div className="auth-wrapper">
            <img
              src="/spa/build/adobe_logo.png"
              alt=""
              height={20}
              width={20}
            />
            <span className="titlename"> Forms Express</span>
            <div className="identity w-100 mt-16 mb-16">
              <button className="back" onClick={this.handleBackButton}>
                <img src="/spa/build/back.png" />
              </button>
              <span id="user_identity">{email}</span>
            </div>
            <h2 className="title mb-16">Enter Login Code</h2>

            <div className="mb-16">
              <p id="error_pwd" className="error"></p>
              <input
                id="inp_pwd"
                type="text"
                name="pass"
                className="input code-input"
                placeholder="Enter your code"
                value={code}
                onChange={(evt) => {
                  this.state.setCode(evt.target.value);
                }}
              />
            </div>

            <div className="login-code-label">
              <p className="mb-16">
                Get your login code from{"  "}
                <a href={url} className="link fs-13" target="_blank">
                  here
                </a>
              </p>
            </div>
            <div>
              <button
                className="btn"
                id="btn_sig"
                onClick={this.handleSubmissionClick}
              >
                Sign in
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default WithLoadingSpinner(LoginBox);
