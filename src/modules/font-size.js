var map = require('../config/font-size');
var result = {};
for (var i = map.from; i <= map.to; i++) {
  result['f' + i] = {
    fontSize: i
  }
};

module.exports = result;
