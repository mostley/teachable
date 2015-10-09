var local = {};
try {
  local = require('database.local.js');
} catch(e) {}

module.exports = {
    'url' : local.url || 'mongodb://mongo/teachable'
    //'url' : 'mongodb://localhost/teachable'
    //'url' : 'mongodb://teachable:teachable@ds043982.mongolab.com:43982/teachable'
};
