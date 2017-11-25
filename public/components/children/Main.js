"use strict";

// Contains the main-container div that holds the main layout and navigation. 
// This component also holds sub-components Search and Saved
// Include React 
var React = require("react");
// Here we include all of the sub-components
var Query = require("./Query.jsx");
var Search = require("./Search.jsx");
var Saved = require("./Saved.jsx");
// Requiring helper.js for making API calls
var helpers = require("../utils/helpers.js");
// Create the Main Component
var Main = React.createClass({
  displayName: "Main",

  // Here we set a generic state
  getInitialState: function getInitialState() {
    return {
      apiResults: [],
      mongoResults: [],
      searchTerms: ["", "", ""]
    };
  },
  // Allow children to update the parent.
  _setSearchFields: function _setSearchFields(degrees, field, name) {
    //Added more parameters after test
    this.setState({ searchTerms: [degrees, program, name] });
  },
  // Allow child to update Mongo data array
  _resetMongoResults: function _resetMongoResults(newData) {
    this.setState({ mongoResults: newData });
  },
  // After Main renders, collect the saved schools from the API endpoint
  componentDidMount: function componentDidMount() {
    // Hit the Mongo API to get saved schools
    helpers.apiGet().then(function (query) {
      this.setState({ mongoResults: query.data });
    }.bind(this));
    console.log('API Results');
    console.log(this.state.apiResults);
    console.log('');
    console.log('Mongo Results');
    console.log(this.state.mongoResults);
  },
  // If the component changes (i.e. if a search is entered)...
  componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
    // Only hit the API once; that is, if the prev state does not equal the current
    if (this.state.searchTerms != prevState.searchTerms) {
      // Run the query for the address
      helpers.schoolQuery(this.state.searchTerms[0], this.state.searchTerms[1], this.state.searchTerms[2]).then(function (data) {
        console.log(data);
        this.setState({ apiResults: data });
      }.bind(this));
    }
  },
  // Render the function
  render: function render() {
    return React.createElement(
      "div",
      { className: "container", style: { backgroundColor: "white", borderStyle: "solid", borderWidth: "1px" } },
      React.createElement(
        "div",
        { className: "page-header" },
        React.createElement(
          "h1",
          { className: "text-center" },
          React.createElement("img", { style: { width: "70%" }, src: "img/college-pennant.png", alt: "Colleges" })
        ),
        React.createElement(
          "h2",
          { className: "text-center", style: { marginTop: "-12px" } },
          React.createElement(
            "b",
            null,
            React.createElement(
              "i",
              null,
              "College Query Search"
            )
          )
        ),
        React.createElement(
          "h4",
          { className: "text-center" },
          "Enter the college search criteria."
        )
      ),
      React.createElement(Query, { _setSearchFeilds: this._setSearchFeilds }),
      React.createElement(Search, { apiResults: this.state.apiResults, _resetMongoResults: this._resetMongoResults }),
      React.createElement(Saved, { mongoResults: this.state.mongoResults, _resetMongoResults: this._resetMongoResults })
    );
  }
});
// Export the component back for use in other files
module.exports = Main;