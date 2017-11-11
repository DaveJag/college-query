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

    // Collect clicked article's id
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

      // Re-set Mongo data to account for change in database (i.e. added article)
      // By Querying Mongo Again for new Data, this will re-render components in saved.jsx
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

            {/* ++++++++++++++++++++++++++++++++ ITERATE HERE ++++++++++++++++++++++++++++++++ */}
            {/* Use map function to loop through array in JSX */}
            {this.props.apiResults.map(function(search, i) {

              // Build array of articles
              that.state.arrayOfArticles.push({
                id: search._id,
                title: search.headline.main,
                date: search.pub_date,
                url: search.web_url
              });

              return (
                <li key={search._id} className="list-group-item" style={ {borderWidth: "0px"} }>
                  <div className="input-group">
                    <div type="text" className="form-control">
                      <b><a href={search.web_url} target="_new" style={ {color: "black"} }>{search.headline.main}</a></b>
                      <i> {search.pub_date.substring(0, 10)}</i>
                    </div>       
                    <span className="input-group-btn">
                      <button className="btn btn-success" type="button" onClick={that._handleSave} value={search._id}>Save</button>
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


// Export component back for use in Main file
module.exports = Search;
