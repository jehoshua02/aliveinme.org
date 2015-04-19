var gulp = require('gulp');
var bower = require('main-bower-files');
var minify = require('gulp-minify-css');
var concat = require('gulp-concat');

module.exports = {
  watch: './bower_components/**/*.css',
  clean: './build/bower.css',
  deps: ['build/bower/install'],
  fn: function () {
    return gulp.src(bower('**/*.css'), { base: './bower_components' })
      .pipe(minify())
      .pipe(concat('bower.css'))
      .pipe(gulp.dest('./build'));
  }
};
