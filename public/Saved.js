//Saved.jsx

// Displays Saved Articles that were searched and stored in database.


// Include React
var React = require("react");

// Require helper for making API calls
var helpers = require("../utils/helpers.js");

// Create search component
var Saved = React.createClass({
  displayName: "Saved",


  // Set generic state
  getInitialState: function () {
    return {
      doIneedThis: false
    };
  },

  _handleDelete: function (event) {

    // Collect clicked school’s id
    var schoolMongoId = event.target.value;

    // Copy "this" into "that" so component is accessible inside functions.
    var that = this;

    // Send this data to API endpoint to save it to Mongo
    helpers.apiDelete(schoolMongoId).then(function () {

      // Query Mongo Again for new Data (this will re-render component to account for deletion)
      helpers.apiGet().then(function (query) {
        that.props._resetMongoResults(query.data);
      });
    });
  },

  // Render Search Results Panel
  render: function () {

    var that = this;

    return React.createElement(
      "div",
      { className: "panel panel-default" },
      React.createElement(
        "div",
        { className: "panel-heading" },
        React.createElement(
          "h3",
          { className: "panel-title text-center", style: { fontSize: "20px" } },
          React.createElement(
            "i",
            null,
            React.createElement(
              "b",
              null,
              "Saved"
            )
          )
        )
      ),
      React.createElement(
        "div",
        { className: "panel-body" },
        React.createElement(
          "ul",
          { className: "list-group col-md-8 col-md-offset-2" },
          this.props.mongoResults.map(function (search, i) {

            return React.createElement(
              "li",
              { key: search.id, className: "list-group-item", style: { borderWidth: "0px" } },
              React.createElement(
                "div",
                { className: "input-group" },
                React.createElement(
                  "div",
                  { type: "text", className: "form-control" },
                  React.createElement(
                    "b",
                    null,
                    React.createElement(
                      "a",
                      { href: search.name, target: "_new", style: { color: "black" } },
                      search.name
                    )
                  )
                ),
                React.createElement(
                  "span",
                  { className: "input-group-btn" },
                  React.createElement(
                    "button",
                    { className: "btn btn-danger", type: "button", onClick: that._handleDelete, value: search.id },
                    "Remove"
                  )
                )
              )
            );
          })
        )
      )
    );
  }
});

// Export component back for use in Main file

module.exports = Saved;