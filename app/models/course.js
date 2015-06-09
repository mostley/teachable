var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

// define the schema for our course model
var courseSchema = mongoose.Schema({

    name             : String,
    description      : String,
    state            : String,
    date             : String,
    doodle           : String,
    participants     : [ String ],
    teachers         : [ String ],
    infolink         : String
});

// methods ======================

// create the model for course and expose it to our app
module.exports = mongoose.model('Course', courseSchema);

