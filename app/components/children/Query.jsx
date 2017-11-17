// Queries School API
// Contains user's search form.
// Include React
var React = require("react");
// Create Search Component
var Query = React.createClass({
  // Set generic state
  getInitialState: function() {
    return {
      programs: "",
      field: "",
      name: ""
    };
},
  // When user submits
  _handleSubmit: function(event) {
    // prevent HTML from trying to submit form if user hits enter key instead of
// clicking search button
    event.preventDefault();
    // Set parent to have search terms
    this.props._setSearchFeilds(this.state.programs, this.state.field, this.state.name);
    
  },
  _handleProgramsChange: function(e) {
    this.setState({programs: e.target.value});
  },
  _handleFieldChange: function(e) {
      this.setState({field: e.target.value});
   },
  _handleNameChange: function(e) {
       this.setState({name: e.target.value});
   },
  // Render the Query data form, first Div at the top of the screen to enter search criteria
  render: function() {
    return (
      <div className="panel panel-default">
//Creates a header called Search
        <div className="panel-heading">
          <h3 className="panel-title text-center" style={ {fontSize: "20px"} }><i><b>Search</b></i></h3>
        </div>
        <div className="panel-body text-center">
          <form role="form" onSubmit={this._handleSubmit}>
//Creates a label for API  data category "programs", displays as Degree Type.  Intially, enter 2 or 4.  Later, add a 
//drop down menu here
            <div className="form-group col-md-offset-3 col-md-6">
              <label htmlFor="programs" className="text-center">Degree Type</label>
              <input type="integer" className="form-control text-center" id="topic" onChange={this._handleProgramsChange} />
            </div>
           <br />
//Creates a label for the API category "field"; displays as Major, a text field user enters.  This can also be a drop down menu.
          <div className="form-group col-md-offset-3 col-md-6">
             <label htmlFor="field">Major</label>
             <input type="text" className="form-control text-center" id="field" onChange={this._handleFieldChange} />
            </div>
          <br />
//Creates a label for API categroy "name", display as School Name, a text field user enters school name.
       <div className="form-group col-md-offset-3 col-md-6">
           <label htmlFor="name">School Name</label>
           <input type="text" className="form-control text-center" id="name" onChange={this._handleNameChange} />
          </div>
         <br />
//Creates Search button
            <button type="submit" className="btn btn-info col-md-offset-5 col-md-2" id="searchBtn">Search</button>
          </form>
        </div>
      </div>
    );
  }
});
// Export component back for use in Main file
module.exports = Query;
