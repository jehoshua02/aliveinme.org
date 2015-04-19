/**
 * Copy over static files.
 */

var gulp = require('gulp');

var config = {
  src: [
    './src/**/*.html',
    './src/img/**/*'
  ]
};

module.exports = {
  watch: config.src,
  clean: [
    './build/**/*.html',
    './build/img/**/*'
  ],
  fn: function () {
    return gulp.src(config.src, { base: './src' }).pipe(gulp.dest('./build'));
  }
};
