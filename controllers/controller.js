//controller.js

// Node Dependencies
var express = require('express');
var router = express.Router();


// Import College model
var College = require('../models/College.js');



// Main GET: will display ReactJS application
router.get("/", function(req, res) {
    res.sendFile(process.cwd() + "/public/index.html");
});

// API GET: components will use this to query MongoDB for all saved colleges
router.get("/api/saved", function(req, res) {

    // Query Mongo for Colleges
    College.find({}, function(err, docs) {
        // log errors
        if (err) {
            console.log(err);
        }
        // or send doc to browser as a json object
        else {
            res.json(docs);
        }
    });

});


// API POST: components will use this to save college to database
router.post("/api/saved", function(req, res) {

    // Using College model, create new entry ("req.bidy" object has same key-value pairs as model)
    var entry = new College(req.body);

    // Save entry to MongoDB
    entry.save(function(err, doc) {
        // log errors
        if (err) {
            console.log(err);
            res.sendStatus(400);
        }
        // or log doc that was saved to the DB
        else {
            console.log(doc);
            res.sendStatus(200);
        }
    });

});


// API DELETE: components will use this to delete saved college in the database
router.post("/api/delete/:collegeMongoId", function(req, res) {
    console.log(req.params.collegeMongoId)
    College.findByIdAndRemove(req.params.collegeMongoId, function(err, todo) {
        if (err) {
            // Send Failure header
            console.log(err);
            res.sendStatus(400);
        } else {
            // Send Success header
            res.sendStatus(200);
        }
    });

});


// CATCH ALL "*" (this redirect user to the "/" route for any unknown cases)
router.get("*", function(req, res) {
    res.redirect("/");
});


// ================================
// Export Router to Server.js
module.exports = router;