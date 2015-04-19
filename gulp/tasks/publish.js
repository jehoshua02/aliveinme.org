var gulp = require('gulp');
var ghpages = require('gulp-gh-pages');

module.exports = {
  deps: ['build'],
  fn: function () {
    return gulp.src('./build/**/*').pipe(ghpages());
  }
};
