const appNode = document.getElementById("appId");

// Include Main React Dependencies
//var React = require("react");
//var ReactDOM = require("react-dom");
//global.jQuery = require("jQuery");
//var bootstrap = require("bootstrap");
// Include main parent component
const Main = require("./components/children/Main.jsx");

// This code allows us to render main component (Main) inside the "app" div in the index.html file.
ReactDOM.render(<Main />, appNode);
