var list = require('../config/margin');
var result = {};
list.forEach(function(value) {
  result['ml' + value] = {
    marginLeft: value
  }
  result['mr' + value] = {
    marginRight: value
  }
  result['mt' + value] = {
    marginTop: value
  }
  result['mb' + value] = {
    marginBottom: value
  }
  result['mx' + value] = {
    marginHorizontal: value
  }
  result['my' + value] = {
    marginVertical: value
  }
  result['m' + value] = {
    margin: value
  }
});

module.exports = result;
