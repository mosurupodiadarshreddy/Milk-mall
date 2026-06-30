import React from "react";
import Login from "./components/Login";
import Header from "./components/Header";
import Signin from "./components/Signin";
import "./style.css";
import i18n from "./i18n/i18n";

const App = () => {
  return (
  <>
    <Header />
    <Login />
  </>
  )
};

export default App;