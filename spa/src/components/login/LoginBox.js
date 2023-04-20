import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginBox.css";

function LoginBox() {
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");
  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleLoginClick = async () => {
    setIsLoading(true);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "text/plain;charset=utf-8");
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbx5RfFIRzYV-82VooENNTqXynFQ4vPqh7v5yAtYkvGr2EqXD3MLa29fJXZY0SgEdih6/exec?requestType=login",
      {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: myHeaders,
        redirect: "follow",
      }
    );
    const responseJson = await response.json();
    const url = responseJson.LoginPageURL;
    setUrl(url);
    setIsLoading(false);
  };

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  const handleSubmissionClick = async () => {
    setIsLoading(true);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "text/plain;charset=utf-8");
    console.log(code);
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbx5RfFIRzYV-82VooENNTqXynFQ4vPqh7v5yAtYkvGr2EqXD3MLa29fJXZY0SgEdih6/exec?requestType=verifylogin",
      {
        method: "POST",
        body: JSON.stringify({ email, code }),
        headers: myHeaders,
        redirect: "follow",
      }
    );
    const { Login } = await response.json();
    setIsLoading(false);
    console.log(Login);
    if (Login === "Success") {
      localStorage.setItem("email", email);
      localStorage.setItem("code", code);
      navigate("/home");
    } else {
      console.log("Unauthorized Acces");
    }
  };

  return (
    <div className="login-box-container">
      <div className="login-box">
        <h1 className="login-header">Login</h1>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          className="email-input"
        />
        {url && (
          <div className="url-container">
            <p className="url-label">
              Enter the code provided in{" "}
              <a href={url} target="_blank">
                URL
              </a>
            </p>

            <input
              type="text"
              value={code}
              onChange={handleCodeChange}
              className="code-input"
            />
            <br />
            <button
              onClick={handleSubmissionClick}
              disabled={isLoading}
              className="submit-button"
            >
              {isLoading ? "Submitting..." : "Submit"}
            </button>
          </div>
        )}
        {!url && (
          <button
            onClick={handleLoginClick}
            disabled={isLoading}
            className="login-button"
          >
            {isLoading ? "Loading..." : "Login"}
          </button>
        )}
      </div>
    </div>
  );
}

export default LoginBox;
