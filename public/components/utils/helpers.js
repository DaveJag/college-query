"use strict";

// Node Dependencies
var axios = require('axios');

// API Request Function
var schoolQuery = function schoolQuery(degrees, program, name) {

  //var authKey = "zCBgIj5wrFlUIvjmWu2CzFPg1PqRWzbc8zqCVnLZ";
  // Dave's key:
  var authKey = "Jqw0thp4crLxCS338NcnyaeQCzW7gJWJPlTcPR3t";
  var maxReturns = 100;

  //var queryURL = "https://api.data.gov/ed/collegescorecard/v1/schools.json?api_key=Jqw0thp4crLxCS338NcnyaeQCzW7gJWJPlTcPR3t + "&degrees=" + degrees + "&program=" + "2013.academics.program_percentage." + program + "&name=" + "school." + name + "&_per_page=100""; 

  //Note: Dave modified the queryURL on 11/18 to get it to compile in webpack. The original is above.
  var queryURL = "https://api.data.gov/ed/collegescorecard/v1/schools.json?api_key=" + authKey + "&degrees=" + degrees + "&program=" + "2013.academics.program_percentage." + program + "&name=" + "school." + name + "&_per_page=" + maxReturns;

  //var queryURL = "https://api.data.gov/ed/collegescorecard/v1/schools.json?api_key="+ authKey + "&programs=" +
  //             programs + "&field=" + field + "&name=" + name;


  // For reference:
  //var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=" +
  //                topic + "&begin_date=" + beginYear + "0101" + "&end_date=" + endYear + "1231";

  //var queryURL = "http://api.data.gov/ed/collegescorecard/v1/schools"
  //picc.API.url = 'https://api.data.gov/ed/collegescorecard/v1/';


  // Create a JavaScript *Promise*
  return new Promise(function (fulfill, reject) {

    // API get request
    axios.get(queryURL).then(function (response) {

      var result = [];

      // If get get a result, return only the first 5 schools
      if (response.data.response.docs[0]) {

        for (var i = 0; i < response.data.response.docs.length; i++) {
          // Break out of the loop if there are more than 5 entries

          if (i == 5) {
            break;
          } else {
            // Otherwise, push to results array
            result.push(response.data.response.docs[i]);
          }
        }

        // Return the array of schools via *Promise*
        fulfill(result);
      } else {
        // If we don't get any results, return an empty string via *Promise*
        reject("");
      }
 
    });
  });
};

// API Post Request Function
var apiSave = function apiSave(schoolObj) {

  // Get API Post URL (this allows it to work in both localhost and heroku)
  var apiURL = window.location.origin + '/api/saved';

  // Create a JavaScript *Promise*
  return new Promise(function (fulfill, reject) {

    // Re-format the school Object to match the Mongo Model (ie we need to take off the the id)
    var params = new URLSearchParams();
    params.append("programs", schoolObj.programs);
    params.append("field", schoolObj.field);
    params.append("name", schoolObj.name);
    axios.post(apiURL, params).then(function (response) {

      // Error handling / fullfil promise if successful query
      if (response) {
        fulfill(response);
      } else {
        reject("");
      }
    });
  });
};

// API Post Request Function
var apiGet = function apiGet() {

  // Get API Post URL (this allows it to work in both localhost and heroku)
  var apiURL = window.location.origin + '/api/saved';

  // Create a JavaScript *Promise*
  return new Promise(function (fulfill, reject) {

    // Re-format the school Object to match the Mongo Model (ie we need to take off the the id)
    axios.get(apiURL).then(function (response) {

      // Error handling / fullfil promise if successful query
      if (response) {
        fulfill(response);
      } else {
        reject("");
      }
    });
  });
};

// API Post Request Function
var apiDelete = function apiDelete(deleteSchoolId) {

  // Get API Post URL (this allows it to work in both localhost and heroku)
  var apiURL = window.location.origin + '/api/delete/' + deleteSchoolId;

  // Create a JavaScript *Promise*
  return new Promise(function (fulfill, reject) {

    // Send the MongoDB Id for deletion
    axios.post(apiURL).then(function (response) {

      // Error handling / fullfil promise if successful query
      if (response) {
        fulfill(response);
      } else {
        reject("");
      }
    });
  });
};

// Export all helper functions
module.exports = {
  schoolQuery: schoolQuery,
  apiSave: apiSave,
  apiGet: apiGet,
  apiDelete: apiDelete
};