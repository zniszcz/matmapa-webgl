'use strict';

const eslint = require('gulp-eslint');
const rev = require('gulp-rev');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const gutil = require('gulp-util');

module.exports = gulp => {

  // -- Unit script tasks

  gulp.task('lint', () => {
    return gulp.src('./src/**/*.js')
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(babel())
      .pipe(gulp.dest('./dist/'));
  });

  gulp.task('lint:prod', () => {
    return gulp.src('./src/js/**/*.js')
      .pipe(babel())
      .pipe(concat('app.min.js'))
      .pipe(uglify())
      .pipe(rev())
      .pipe(gulp.dest('./dist/js/'));
  });

  // -- Main script tasks
  
  gulp.task('javascript', ['lint'], () => {
    gulp.watch('./src/**/*.js', ['lint']);

    return gutil.log('Task for serving scripts in developer mode.');
  });

  gulp.task('javascript:prod', ['lint:prod'], () => {
    return gutil.log('Task for building scripts in production mode.');
  });
};
