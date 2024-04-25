import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./component/Register";
import SignIn from "./component/SignIn";
import Home from "./component/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<SignIn />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
