var list = require('../config/padding');
var result = {};
list.forEach(function(value) {
  result['pl' + value] = {
    paddingLeft: value
  }
  result['pr' + value] = {
    paddingRight: value
  }
  result['pt' + value] = {
    paddingTop: value
  }
  result['pb' + value] = {
    paddingBottom: value
  }
  result['px' + value] = {
    paddingHorizontal: value
  }
  result['py' + value] = {
    paddingVertical: value
  }
  result['p' + value] = {
    padding: value
  }
});

module.exports = result;
