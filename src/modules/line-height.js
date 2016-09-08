var list = require('../config/line-height');
var result = {};
list.forEach(function(value) {
  result['lh' + value] = {
    height: value
  }
});
module.exports = result;
