// Include Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");
global.jQuery = require("jQuery");
var bootstrap = require("bootstrap");
// Include main parent component
var Main = require("./components/children/Main.jsx");

console.log("Called from app.js");
// This code allows us to render main component (Main)
// Note that the Id is "app" which matches that of the "index.html" file
ReactDOM.render(<Main />, document.getElementById("app"));
