import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Slideshow from "./components/Slideshow";
// import { getDogs } from "./dogapi";
// import "./styles.css";

// TODO replace with your slideshow App
const App = () => {
  
  return (
    <section>
      <h1>HELLO</h1>
      <Slideshow />
    </section>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
