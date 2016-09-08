var list = require('../config/border-radius');
var result = {};
list.forEach(function(value) {
  result['radius-' + value] = {
    borderRadius: value
  }
});
module.exports = result;
