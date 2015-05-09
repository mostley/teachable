var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

// define the schema for our course model
var courseSchema = mongoose.Schema({
    
    name             : String,
    state            : String,
    dates            : [{ start: Date, duration: Number }],
    doodle           : String,
    participants     : [ String ],
    teachers         : [ String ]
});

// methods ======================

// create the model for course and expose it to our app
module.exports = mongoose.model('Course', courseSchema);

