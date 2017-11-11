// Include Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

// Include main parent component
var Main = require("./components/children/Main.jsx");

// This code allows us to render main component (Main)
// Note that the Id is "app" which matches that of the "index.html" file
ReactDOM.render(<Main />, document.getElementById("app"));
