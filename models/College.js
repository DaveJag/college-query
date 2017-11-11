//College.js file.  This file creates the schema "CollegeSchema" and exports the model "College".

// Require Mongoose
var mongoose = require('mongoose');

// Create Schema class
var Schema = mongoose.Schema;

// Create Article schema
var CollegeSchema = new Schema({

    // Name of major field of study (biology, engineering, etc.)
    major: {
        type: String,
        required: true
    },
/* Leftovers from NYTREACT app.
    // Date of Article
    date: {
        type: String,
        required: true
    },

    // Link to Article
    url: {
        type: String,
        required: true
    }
*/
});

// Create College model with Mongoose
var College = mongoose.model('College', CollegeSchema);

// Export model
module.exports = College;