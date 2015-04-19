var gulp = require('gulp');
var sass = require('gulp-sass');

module.exports = {
  watch: './src/scss/**/*.scss',
  clean: './build/site.css',
  fn: function () {
    return gulp.src('./src/scss/site.scss')
      .pipe(sass())
      .pipe(gulp.dest('./build'));
  }
};
