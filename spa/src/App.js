import React from "react";
import LoginBox from "./components/login/LoginBox";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import NoPage from "./components/nopage/NoPage";

function App() {
  return (
    <BrowserRouter basename="/app">
      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="login" element={<LoginBox />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
