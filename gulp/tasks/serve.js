var gulp = require('gulp');
var browserSync = require('browser-sync').create();

module.exports = {
  deps: ['build'],
  fn: function () {
    browserSync.init({ server: './build' });
    gulp.watch('./src/**/*', ['serve/reload']);
  }
};

gulp.task('serve/reload', ['build'], function () {
  return browserSync.reload();
});
