"use strict";

// Queries School API
// Contains user's search form.
// Include React
var React = require("react");
// Create Search Component
var Query = React.createClass({
  displayName: "Query",

  // Set generic state
  getInitialState: function getInitialState() {
    return {
      degrees: "",
      program: "",
      name: ""
    };
  },
  // When user submits
  _handleSubmit: function _handleSubmit(event) {
    // prevent HTML from trying to submit form if user hits enter key instead of
    // clicking search button
    event.preventDefault();
    // Set parent to have search terms
    this.props._setSearchFeilds(this.state.degrees, this.state.program, this.state.name);
  },
  _handleDegreesChange: function _handleDegreesChange(e) {
    this.setState({ degrees: e.target.value });
  },
  _handleProgramChange: function _handleProgramChange(e) {
    this.setState({ program: e.target.value });
  },
  _handleNameChange: function _handleNameChange(e) {
    this.setState({ name: e.target.value });
  },
  // Render the Query data form, first Div at the top of the screen to enter search criteria
  render: function render() {
    return React.createElement(
      "div",
      { className: "panel panel-default" },
      "//Creates a header called Search",
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
              "Search"
            )
          )
        )
      ),
      React.createElement(
        "div",
        { className: "panel-body text-center" },
        React.createElement(
          "form",
          { role: "form", onSubmit: this._handleSubmit },
          "//Creates a label for API  data category \"degrees\", displays as Degree Type.  Intially, enter 2 or 4.  Later, add a //drop down menu here",
          React.createElement(
            "div",
            { className: "form-group col-md-offset-3 col-md-6" },
            "//",
            React.createElement(
              "label",
              { htmlFor: "degrees", className: "text-center" },
              "Degree Type"
            ),
            React.createElement(
              "label",
              { "for": "degree-type" },
              "Choose a degree",
              React.createElement(
                "select",
                { id: "degree-type", name: "degree" },
                React.createElement(
                  "option",
                  { value: "2" },
                  "Two-year (Associate's)"
                ),
                React.createElement(
                  "option",
                  { value: "3" },
                  "Four-year (Bachelor's)"
                )
              )
            ),
            React.createElement("input", { type: "integer", className: "form-control text-center", id: "topic", onChange: this._handleDegreesChange })
          ),
          React.createElement("br", null),
          "//Creates a label for the API category \"program\"; displays as Major, selected from the drop down menu.  This can also be a drop down menu.",
          React.createElement(
            "div",
            { className: "form-group col-md-offset-3 col-md-6" },
            "//",
            React.createElement(
              "label",
              { htmlFor: "program" },
              "Major"
            ),
            React.createElement(
              "label",
              { "for": "program" },
              "Choose a major",
              React.createElement(
                "select",
                { id: "program", name: "program" },
                React.createElement(
                  "option",
                  { value: "", selected: true },
                  "Any"
                ),
                React.createElement(
                  "option",
                  { value: "agriculture" },
                  "Agriculture, Agriculture Operations, and Related Sciences"
                ),
                React.createElement(
                  "option",
                  { value: "architecture" },
                  "Architecture and Related Services"
                ),
                React.createElement(
                  "option",
                  { value: "ethnic_cultural_gender" },
                  "Area, Ethnic, Cultural, Gender, and Group Studies"
                ),
                React.createElement(
                  "option",
                  { value: "biological" },
                  "Biological and Biomedical Sciences"
                ),
                React.createElement(
                  "option",
                  { value: "business_marketing" },
                  "Business, Management, Marketing, and Related Support Services"
                ),
                React.createElement(
                  "option",
                  { value: "communication" },
                  "Communication, Journalism, and Related Programs"
                ),
                React.createElement(
                  "option",
                  { value: "communications_technology" },
                  "Communications Technologies/Technicians and Support Services"
                ),
                React.createElement(
                  "option",
                  { value: "computer" },
                  "Computer and Information Sciences and Support Services"
                ),
                React.createElement(
                  "option",
                  { value: "construction" },
                  "Construction Trades"
                ),
                React.createElement(
                  "option",
                  { value: "education" },
                  "Education"
                ),
                React.createElement(
                  "option",
                  { value: "engineering" },
                  "Engineering"
                ),
                React.createElement(
                  "option",
                  { value: "engineering_technology" },
                  "Engineering Technologies and Engineering-Related Fields"
                ),
                React.createElement(
                  "option",
                  { value: "english" },
                  "English Language and Literature/Letters"
                ),
                React.createElement(
                  "option",
                  { value: "family_consumer_science" },
                  "Family and Consumer Sciences/Human Sciences"
                ),
                React.createElement(
                  "option",
                  { value: "language" },
                  "Foreign Languages, Literatures, and Linguistics"
                ),
                React.createElement(
                  "option",
                  { value: "health" },
                  "Health Professions and Related Programs"
                ),
                React.createElement(
                  "option",
                  { value: "history" },
                  "History"
                ),
                React.createElement(
                  "option",
                  { value: "security_law_enforcement" },
                  "Homeland Security, Law Enforcement, Firefighting and Related Protective Services"
                ),
                React.createElement(
                  "option",
                  { value: "legal" },
                  "Legal Professions and Studies"
                ),
                React.createElement(
                  "option",
                  { value: "humanities" },
                  "Liberal Arts and Sciences, General Studies and Humanities"
                ),
                React.createElement(
                  "option",
                  { value: "library" },
                  "Library Science"
                ),
                React.createElement(
                  "option",
                  { value: "mathematics" },
                  "Mathematics and Statistics"
                ),
                React.createElement(
                  "option",
                  { value: "mechanic_repair_technology" },
                  "Mechanic and Repair Technologies/Technicians"
                ),
                React.createElement(
                  "option",
                  { value: "military" },
                  "Military Technologies and Applied Sciences"
                ),
                React.createElement(
                  "option",
                  { value: "multidiscipline" },
                  "Multi/Interdisciplinary Studies"
                ),
                React.createElement(
                  "option",
                  { value: "resources" },
                  "Natural Resources and Conservation"
                ),
                React.createElement(
                  "option",
                  { value: "parks_recreation_fitness" },
                  "Parks, Recreation, Leisure, and Fitness Studies"
                ),
                React.createElement(
                  "option",
                  { value: "personal_culinary" },
                  "Personal and Culinary Services"
                ),
                React.createElement(
                  "option",
                  { value: "philosophy_religious" },
                  "Philosophy and Religious Studies"
                ),
                React.createElement(
                  "option",
                  { value: "physical_science" },
                  "Physical Sciences"
                ),
                React.createElement(
                  "option",
                  { value: "precision_production" },
                  "Precision Production"
                ),
                React.createElement(
                  "option",
                  { value: "psychology" },
                  "Psychology"
                ),
                React.createElement(
                  "option",
                  { value: "public_administration_social_service" },
                  "Public Administration and Social Service Professions"
                ),
                React.createElement(
                  "option",
                  { value: "science_technology" },
                  "Science Technologies/Technicians"
                ),
                React.createElement(
                  "option",
                  { value: "social_science" },
                  "Social Sciences"
                ),
                React.createElement(
                  "option",
                  { value: "theology_religious_vocation" },
                  "Theology and Religious Vocations"
                ),
                React.createElement(
                  "option",
                  { value: "transportation" },
                  "Transportation and Materials Moving"
                ),
                React.createElement(
                  "option",
                  { value: "visual_performing" },
                  "Visual and Performing Arts"
                )
              )
            ),
            React.createElement("input", { type: "text", className: "form-control text-center", id: "program", onChange: this._handleProgramChange })
          ),
          React.createElement("br", null),
          "//Creates a label for API categroy \"name\", display as School Name, a text field where the user enters school name.",
          React.createElement(
            "div",
            { className: "form-group col-md-offset-3 col-md-6" },
            React.createElement(
              "label",
              { htmlFor: "name" },
              "School Name"
            ),
            React.createElement("input", { type: "text", className: "form-control text-center", id: "name", onChange: this._handleNameChange })
          ),
          React.createElement("br", null),
          "//Creates Search button",
          React.createElement(
            "button",
            { type: "submit", className: "btn btn-info col-md-offset-5 col-md-2", id: "searchBtn" },
            "Search"
          )
        )
      )
    );
  }
});
// Export component back for use in Main file
module.exports = Query;