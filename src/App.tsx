import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Login  from "./views/Login";
// import SignUpSide from "./SignUpSide";
import Register from "./views/Register";

import Home from "./views/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        {/* <Route path="/" element={<div>hola</div>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
