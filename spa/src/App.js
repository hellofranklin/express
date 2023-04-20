import React from "react";
import LoginBox from "./components/login/LoginBox";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import NoPage from "./components/nopage/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<LoginBox />} />
          <Route path="home" element={<Home />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
