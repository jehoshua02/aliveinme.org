var gulp = require('gulp');
var bower = require('main-bower-files');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var touch = require('touch');

module.exports = {
  watch: './bower_components/**/*.js',
  clean: './build/bower.js',
  deps: ['build/bower/install'],
  fn: function () {
    var files = bower('**/*.js');
    if (files.length > 0) {
      return gulp.src(files, { base: './bower_components' })
        .pipe(uglify())
        .pipe(concat('bower.js'))
        .pipe(gulp.dest('./build'));
    } else {
      return touch('./build/bower.js');
    }
  }
};
