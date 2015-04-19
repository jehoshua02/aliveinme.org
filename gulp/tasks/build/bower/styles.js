var gulp = require('gulp');
var bower = require('main-bower-files');
var minify = require('gulp-minify-css');
var concat = require('gulp-concat');
var touch = require('touch');

module.exports = {
  watch: './bower_components/**/*.css',
  clean: './build/bower.css',
  deps: ['build/bower/install'],
  fn: function () {
    var files = bower('**/*.css');
    if (files.length > 0) {
      return gulp.src(files, { base: './bower_components' })
        .pipe(minify())
        .pipe(concat('bower.css'))
        .pipe(gulp.dest('./build'));
    } else {
      return touch('./build/bower.css')
    }
  }
};
