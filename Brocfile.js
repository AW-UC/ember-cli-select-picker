/* global require, module */

var pickFiles  = require('broccoli-static-compiler');
var mergeTrees = require('broccoli-merge-trees');
var EmberApp   = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
  sourcemaps: {
    enabled: false
  },
  fingerprint: {
    enabled: false
  },
  minifyCSS: {
    enabled: false
  },
  minifyJS: {
    enabled: false
  }
});

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.
app.import('bower_components/bootstrap/dist/css/bootstrap.css');
app.import('bower_components/bootstrap/dist/js/bootstrap.js');
app.import('bower_components/chance/chance.js');

var fontTree = pickFiles('bower_components/bootstrap/dist/fonts', {
  srcDir:  '/',
  files:   ['*'],
  destDir: '/fonts'
});

module.exports = mergeTrees([app.toTree(), fontTree]);
