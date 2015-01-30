var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: 'dist',
    livereload: true
  });
});

gulp.task('watch', function() {
  gulp.watch(['./dist/*.*'], ['reload']);
});

gulp.task('reload', function() {
  gulp.src('./dist/*.*')
      .pipe(connect.reload());
});

gulp.task('default', ['connect', 'watch']);

