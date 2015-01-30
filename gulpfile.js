var gulp = require('gulp');
var connect = require('gulp-connect');
var watch = require('gulp-watch');

gulp.task('connect', function() {
  connect.server({
    root: 'dist',
    livereload: true,
  });
});

gulp.task('watch', function() {
  watch('./dist/*').pipe(connect.reload());
});

gulp.task('default', ['connect', 'watch']);

