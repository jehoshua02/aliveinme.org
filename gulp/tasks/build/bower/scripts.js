var gulp = require('gulp');
var bower = require('main-bower-files');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

module.exports = {
  watch: './bower_components/**/*.js',
  clean: './build/bower.js',
  deps: ['build/bower/install'],
  fn: function () {
    return gulp.src(bower('**/*.js'), { base: './bower_components' })
      .pipe(uglify())
      .pipe(concat('bower.js'))
      .pipe(gulp.dest('./build'));
  }
};
