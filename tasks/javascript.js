'use strict';

const eslint = require('gulp-eslint');
const rev = require('gulp-rev');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const gutil = require('gulp-util');

module.exports = gulp => {

  // -- Unit script tasks

  gulp.task('build-javascript', () => {
    return gulp.src('./src/**/*.js')
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(babel())
      .pipe(gulp.dest('./dist/'));
  });

  gulp.task('build-javascript:prod', () => {
    return gulp.src('./src/js/**/*.js')
      .pipe(babel())
      .pipe(concat('app.min.js'))
      .pipe(uglify())
      .pipe(rev())
      .pipe(gulp.dest('./dist/js/'));
  });

  // -- Main script tasks
  
  gulp.task('javascript', ['clean', 'build-javascript'], () => {
    gulp.watch('./src/**/*.js', ['build-javascript']);

    return gutil.log('Task for serving scripts in developer mode.');
  });

  gulp.task('javascript:prod', ['clean', 'build-javascript:prod'], () => {
    return gutil.log('Task for building scripts in production mode.');
  });
};
