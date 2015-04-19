var gulp = require('gulp');
var bower = require('bower');

module.exports = {
  watch: './bower.json',
  clean: './bower_components',
  fn: function (cb) {
    return bower.commands.install();
  }
};
