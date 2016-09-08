var map = require('../config/color');
var result = {};
Object.keys(map).forEach(function(key) {
  result['c' + key] = {
    color: map[key]
  };
  result['bg' + key] = {
    backgroundColor: map[key]
  };
});
module.exports = result;
