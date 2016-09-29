'use strict';

// const useref = require('gulp-useref');
const inject = require('gulp-inject');

module.exports = gulp => {

  // -- Unit html tasks

  gulp.task('inject-html', () => {
    return gulp.src('./src/html/**/*.html')
      .pipe(inject(gulp.src(['./dist/css/*.css', './dist/js/*.js'], {read: false})))
      .pipe(gulp.dest('./dist'));
  });

  gulp.task('inject-html:prod', () => {
    return gulp.src('./src/**/*.html')
      .pipe(inject(gulp.src(['./dist/css/*.min.css', './dist/js/*.min.js'], {read: false})))
      .pipe(gulp.dest('./dist'));
  });

  // -- Main html tasks

  gulp.task('html', ['inject-html'], () => {
    return gulp.watch('./src/html/**/*.html', ['inject-html']);
  });

  gulp.task('html:prod', ['inject-html:prod']);
};
