import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Counter from "./Counter";
import Contact from "./Contact";
import "./styles.css";
import contact from "./redux/ducks/contact";

export default function App() {
  return (
    <div className="App">
      <h1>Redux made easy</h1>
      <Contact />
    </div>
  );
}
