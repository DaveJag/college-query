"use strict";

var appNode = document.getElementById("app");

// Include Main React Dependencies
//var React = require("react");
//var ReactDOM = require("react-dom");
//global.jQuery = require("jQuery");
//var bootstrap = require("bootstrap");
// Include main parent component
var Main = require("./components/children/Main.jsx");

console.log("Called from app.jsx");
// This code allows us to render main component (Main) inside the "app" div in the index.html file.
ReactDOM.render(React.createElement(Main, null), appNode);