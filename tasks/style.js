'use strict';

const sass = require('gulp-sass');
const rev = require('gulp-rev');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const rename = require('gulp-rename');
const gutil = require('gulp-util');

module.exports = gulp => {

  // -- Unit style tasks

  gulp.task('sass', () => {
    return gulp.src('./src/scss/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(postcss([autoprefixer()]))
      .pipe(gulp.dest('./dist/css'));
  });

  gulp.task('sass:prod', () => {
    return gulp.src('./src/scss/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(postcss([autoprefixer(), cssnano()]))
      .pipe(rename('app.min.css'))
      .pipe(rev())
      .pipe(gulp.dest('./dist/css'));
  });

  // -- Main style tasks

  gulp.task('style', ['clean', 'sass'], () => {
    gulp.watch('./src/scss/**/*.scss', ['sass']);

    return gutil.log('Task for serving stylesheets in developer mode.');
  });

  gulp.task('style:prod', ['clean', 'sass:prod'], () => {
    return gutil.log('Task for building stylesheets in production mode.');
  });

};
