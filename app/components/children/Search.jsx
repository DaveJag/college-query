// Displays API search results from another possible Query component and Results component. 
// Gives user ability to save an article to "Saved."
// Include React
var React = require("react");
// Require helper for making API calls
var helpers = require("../utils/helpers.js");
// Create search component
var Search = React.createClass({
  // Set generic state
  getInitialState: function() {
    return {
      arrayOfSchools: []
    };
  },
  _handleSave: function(event){
    // Collect clicked school's id
    var schoolId = event.target.value;
    // Collect clicked article's attributes
    var saveSchoolObj;
    for(var i=0; i<this.state.arrayOfSchools.length; i++){
      if(this.state.arrayOfSChools[i].id == schoolId){
        saveSchoolObj = this.state.arrayOfSchool[i];
      }
    }
    // Copy "this" into "that" so component is accessible inside functions
    var that = this;
    // Send this data to API endpoint to save it to Mongo
    helpers.apiSave(saveSchoolObj).then(function(){
      // Re-set Mongo data to account for change in database (i.e. added school)
      // By Querying Mongo again for new data, this will re-render components in saved.jsx
      helpers.apiGet().then(function(query){
        that.props._resetMongoResults(query.data);
      });
    }.bind(this))
  },
  // Render Results panel
  render: function() {
    var that = this;
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center" style={ {fontSize: "20px"} }><i><b>Results</b></i></h3>
        </div>
        <div className="panel-body">
          <ul className="list-group col-md-8 col-md-offset-2">
            // Use map function to loop through array in JSX
            {this.props.apiResults.map(function(search, i) {
              // Build array of schools
              that.state.arrayOfSchools.push({
                id: search._id,
                // degrees: search.programs,
                // program: search.program,
                // name: search.name
                // name: search.school.name
                name: search["school.name"]``
              });
              return (
                <li key={search.id} className="list-group-item" style={ {borderWidth: "0px"} }>
                  <div className="input-group">
                    <div type="text" className="form-control">
                      <b><a href={search["school.school_url"]} target="_new" style={ {color: "black"} }>{search["school.name"]}</a></b>                 
                      {/*<i> {search.pub_date.substring(0, 10)}</i>
                    </div> */}      
                    <span className="input-group-btn">
                      <button className="btn btn-success" type="button" onClick={that._handleSave} value={search.id}>Save</button>
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
});
{/*Export component back for use in Main file*/}
module.exports = Search;
