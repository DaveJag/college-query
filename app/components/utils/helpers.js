// Node Dependencies
var axios = require('axios');

// API Request Function
// var schoolQuery = function(degrees, program, name){
// var schoolQuery = function(program, name){
var schoolQuery = function(program){

  //var authKey = "zCBgIj5wrFlUIvjmWu2CzFPg1PqRWzbc8zqCVnLZ";
  // Dave's key:
var authKey = "Jqw0thp4crLxCS338NcnyaeQCzW7gJWJPlTcPR3t";
var maxReturns = 100;

//comment one of the following out when running

// var queryURL = "https://api.data.gov/ed/collegescorecard/v1/schools.json?api_key="+authKey+"&program="+"2015.academics.program.bachelors."+program+"=1&_fields=school.name&_per_page=" + maxReturns; 

// var queryURL = "https://api.data.gov/ed/collegescorecard/v1/schools.json?api_key="+authKey + "2015.academics.program.bachelors."+program+"=1&_fields=school.name&_per_page=" + maxReturns;

// var queryURL = "https://api.data.gov/ed/collegescorecard/v1/schools.json?api_key=Jqw0thp4crLxCS338NcnyaeQCzW7gJWJPlTcPR3t&2015.academics.program.bachelors.english=1&_fields=school.name"

//The following two did not return errors in the call:

// var queryURL = "https://api.data.gov/ed/collegescorecard/v1/schools.json?api_key="+authKey + "&2015.academics.program.bachelors."+program+"=1";

var queryURL = "https://api.data.gov/ed/collegescorecard/v1/schools.json?api_key="+authKey+"&2015.academics.program.bachelors."+program+"=1&_fields=id,school.name,school.school_url&_per_page=" + maxReturns;

console.log("zxx results" + queryURL);

// var queryURL = "https://api.data.gov/ed/collegescorecard/v1/schools.json?api_key="+authKey+"&program="+"2015.academics.program.bachelors."+program+"=1&_fields=" + "&name="+"school."+name+"&_per_page=" + maxReturns; 


  // Create a JavaScript *Promise*
  return new Promise(function (fulfill, reject){

    // API get request
    axios.get(queryURL).then(function(response) {
      console.log("response" + response);

      var result = [];

      // If get get a result, return only the first 5 schools
      if (response.data.response.docs[0]) {

        for(var i=0; i<response.data.response.docs.length; i++){
          // Break out of the loop if there are more than 5 entries
          
          if(i==5){
            break;
          }
          else {
            // Otherwise, push to results array
            result.push(response.data.response.docs[i]);
          }
        }

        // Return the array of schools via *Promise*
        fulfill(result);
        
      }
      else{
        // If we don't get any results, return an empty string via *Promise*
        reject("");
      }
      
    });
  });

}





// API Post Request Function
var apiSave = function(schoolObj){

  // Get API Post URL (this allows it to work in both localhost and heroku)
  var apiURL = window.location.origin + '/api/saved';

  // Create a JavaScript *Promise*
  return new Promise(function (fulfill, reject){

    // Re-format the school Object to match the Mongo Model (ie we need to take off the the id)
    var params = new URLSearchParams();
    // params.append("programs", schoolObj.programs);
    // params.append("field", schoolObj.field);
    params.append("name", schoolObj.name);
    // params.append("school.name", schoolObj.name);
    console.log("SCHOOL NAME",schoolObj.name);
    axios.post(apiURL, params).then(function(response){

      // Error handling / fullfil promise if successful query
      if(response){
        fulfill(response);
      }
      else{
        reject("");
      }
      
    })

  });
  
}





// API Post Request Function
var apiGet = function(){

  // Get API Post URL (this allows it to work in both localhost and heroku)
  var apiURL = window.location.origin + '/api/saved';

  // Create a JavaScript *Promise*
  return new Promise(function (fulfill, reject){

    // Re-format the school Object to match the Mongo Model (ie we need to take off the the id)
    axios.get(apiURL).then(function(response) {

      // Error handling / fullfil promise if successful query
      if(response){
        fulfill(response);
      }
      else{
        reject("");
      }

    });
    
  });
  
}





// API Post Request Function
var apiDelete = function(deleteSchoolId){

  // Get API Post URL (this allows it to work in both localhost and heroku)
  var apiURL = window.location.origin + '/api/delete/' + deleteSchoolId;

  // Create a JavaScript *Promise*
  return new Promise(function (fulfill, reject){

    // Send the MongoDB Id for deletion
    axios.post(apiURL).then(function(response) {

      // Error handling / fullfil promise if successful query
      if(response){
        fulfill(response);
      }
      else{
        reject("");
      }

    });

  });

}


// Export all helper functions
module.exports = {
 schoolQuery,
 apiSave,
 apiGet,
 apiDelete
}
