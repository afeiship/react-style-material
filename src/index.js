var nx = require('next-js-core');
var fs = require('fs');
var path = require('path');
var yargs = require('yargs').argv;
var ROOT_PATH = process.cwd();
var modules = fs.readdirSync(path.join(ROOT_PATH, '/modules'));
var targetStyles = {};

nx.each(modules, function(modulePath) {
  nx.mix(
    targetStyles,
    require(path.join(ROOT_PATH, 'modules', modulePath))
  );
});

if (yargs._[0] === 'debug') {
  console.log(targetStyles);
}

module.exports = targetStyles;
