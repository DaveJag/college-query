//Saved.jsx

// Displays Saved Articles that were searched and stored in database.


// Include React
var React = require("react");

// Require helper for making API calls
var helpers = require("../utils/helpers.js");

// Create search component
var Saved = React.createClass({

 // Set generic state
 getInitialState: function() {
   return {
     doIneedThis: false
   };
 },

 _handleDelete: function(event) {

   // Collect clicked school’s id
   var schoolMongoId = event.target.value;

   // Copy "this" into "that" so component is accessible inside functions.
   var that = this;

   // Send this data to API endpoint to save it to Mongo
   helpers.apiDelete(schoolMongoId).then(function(){

     // Query Mongo Again for new Data (this will re-render component to account for deletion)
     helpers.apiGet().then(function(query){
       that.props._resetMongoResults(query.data);
     });

   });


 },

 // Render Search Results Panel
 render: function() {

   var that = this;

   return (

     <div className="panel panel-default">

       <div className="panel-heading">
         <h3 className="panel-title text-center" style={ {fontSize: "20px"} }><i><b>Saved</b></i></h3>
       </div>

       <div className="panel-body">
         <ul className="list-group col-md-8 col-md-offset-2">

           {/* Use map function to loop through array in JSX*/}
           {this.props.mongoResults.map(function(search, i) {

             return (
               <li key={search.id} className="list-group-item" style={ {borderWidth: "0px"} }>
                 <div className="input-group">
                   <div type="text" className="form-control">
                     <b><a href={search.school} target="_new" style={ {color: "black"} }>{search.school}</a></b>
                    {/*  <i> {search.date.substring(0, 10)}</i> (not sure if this needed to be commented out, but it had two // next to it) */}
                   </div>
                   <span className="input-group-btn">
                     <button className="btn btn-danger" type="button" onClick={that._handleDelete} value={search.id}>Remove</button>
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

module.exports = Saved;
