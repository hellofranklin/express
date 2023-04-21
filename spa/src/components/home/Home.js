import React, { useState, useEffect } from "react";
import Header from "../header/Header";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import FormCreator from "../formcreator/FormCreator";

function Home(props) {
  const email = localStorage.getItem("email");
  const code = localStorage.getItem("code");
  const navigate = useNavigate();

  const [redirecting, setRedirecting] = useState(false);

  useEffect(() => {
    if (!email || !code) {
      setRedirecting(true);

      const timeoutId = setTimeout(() => {
        navigate("/login");
      }, 1000);

      return () => clearTimeout(timeoutId);
    }
  }, [email, code, navigate]);

  if (redirecting) {
    return (
      <div className="redirecting-message">Redirecting to login page...</div>
    );
  }

  return (
    <div>
      <Header />
      <FormCreator />
    </div>
  );
}

export default Home;
