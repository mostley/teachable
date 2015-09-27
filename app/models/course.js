'use strict';

var mongoose = require('mongoose');

var courseSchema = mongoose.Schema({

    name             : String,
    description      : String,
    state            : String,
    date             : String,
    doodle           : String,
    participants     : [ String ],
    teachers         : [ String ],
    infolink         : String,
    imglink          : String
});

// methods ======================

module.exports = mongoose.model('Course', courseSchema);

