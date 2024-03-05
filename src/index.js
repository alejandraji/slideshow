import React from "react";
import ReactDOM from "react-dom";
import Slideshow from "./components/Slideshow";
import "./style.css";

// TODO replace with your slideshow App
const App = () => {
  
  return (
    <section>
      <h1 className="text-3xl font-bold text-gray-600 text-center mb-6">
      reddit dogs working
    </h1>
      <Slideshow />
    </section>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
