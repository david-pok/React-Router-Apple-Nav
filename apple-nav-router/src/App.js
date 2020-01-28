import React from "react";
import logo from "./logo.svg";
import "./App.css";
import mcList from "./dummyData";
import { Route, Link } from "react-router-dom";

function App() {
  // console.log(mcList)
  return (
    <div className="App">
      <h1>HI</h1>
      {mcList.map(navItem => {
        console.log("items", navItem);
      })}
    </div>
  );
}

export default App;
