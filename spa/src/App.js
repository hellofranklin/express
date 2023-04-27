import React from "react";
import LoginBox from "./components/login/LoginBox";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import NoPage from "./components/nopage/NoPage";
import MyForms from "./components/myforms/MyForms";

function App() {
  return (
    <BrowserRouter basename="/app">
      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="myforms" element={<MyForms />} />
          <Route path="login" element={<LoginBox />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
