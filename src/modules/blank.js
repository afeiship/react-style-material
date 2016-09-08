var list = require('../config/blank');
var result = {};
list.forEach(function(value) {
  result['blank' + value] = {
    height: value
  }
});

module.exports = result;
