import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

let curDate = new Date(2020, 12, 18, 5);
curDate = curDate.getHours();
let greeting = "";
const cssStyle = {};

if (curDate >= 1 && curDate < 12) {
  greeting = "Good Morning";
  cssStyle.color = "#8ad7c1";
} else if (curDate >= 12 && curDate < 19) {
  greeting = "Good Afternoon";
  cssStyle.color = "orange";
} else {
  greeting = "Good Night";
  cssStyle.color = "#ff4646";
}

ReactDOM.render(
  <>
    <div>
      <h1>
        Hello There, <span style={cssStyle}>{greeting}</span>{" "}
      </h1>
    </div>
  </>,
  document.getElementById("root")
);
