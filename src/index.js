import React from "react";
import ReactDOM from "react-dom";

const fName = "Tom";
const lName = "Nottom";
const luckyNumber = 42;

ReactDOM.render(
  <div>
    <h1>Hello {fName + " " + lName}!</h1>
    <p>Your lucky number is {luckyNumber}</p>
  </div>,
  document.getElementById("root")
);
