'use strict';

const useref = require('gulp-useref');

module.exports = gulp => {

  // -- Unit html tasks

  gulp.task('copy-html', () => {
    return gulp.src('./src/html/**/*.html')
      .pipe(gulp.dest('./dist'));
  });

  // -- Main html tasks

  gulp.task('html', ['copy-html'], () => {
    return gulp.watch('./src/html/**/*.html', ['copy-html']);
  });

  gulp.task('html:prod', () => {
    return gulp.src('./src/**/*.html')
      .pipe(useref())
      .pipe(gulp.dest('./dist'));
  });
};
