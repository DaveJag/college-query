//College.js file.  This file creates the schema "CollegeSchema" and exports the model "College".

// Require Mongoose
var mongoose = require('mongoose');

// Create Schema class
var Schema = mongoose.Schema;

// Create College schema
var CollegeSchema = new Schema({

    // Degree type, 2 or 4 years
    // degrees: {
    //     type: Number,  //Dave changed from 'Integer' to 'Number'because it triggered an error when you run server.js file. 
    //     required: true
    // },

    // Major
    // program: {
    //     type: String,
    //     required: true
    // },

    // School Name
    name: {
        type: String,
        required: true
    }

    /*
    },
    // School URL
    school_url: {
        type: String,
        required: true
    },

    //School region by ID
    region_id: {
        type: Integer,
        required: true
    },

     //School state
    state: {
          type: String,
         required: true
    },

    //School city
    city: {
         type: String,
         required: true
    }
    */

});

// Create College model with Mongoose
var College = mongoose.model('College', CollegeSchema);

// Export model
module.exports = College;
