'use strict';

const sass = require('gulp-sass');
const concatCss = require('gulp-concat-css');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
// const config = require('./config')();

// TODO:
// 1. Export paths to separate module
// 2. prod build
// 3. sourcemaps bugfix
// 4. browserlist

module.exports = /* ( */ gulp /* , pluginsi) */ => {

  gulp.task('sass', () => {
    return gulp.src('./src/scss/**/*.scss')
      // .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer())
      // .pipe(sourcemaps.write('./dist/css'))
      .pipe(gulp.dest('./src/css'));
      // .pipe(plugins.browserSync.stream());
  });

  gulp.task('concat', () => {
    return gulp.src('./.tmp/css/*.css')
      .pipe(concatCss('app.css'))
      .pipe(autoprefixer())
      .pipe(sourcemaps.write('./dist'))
      .pipe(gulp.dest('./dist'));
  });

  gulp.task('concat:prod', () => {
    return gulp.src('./.tmp/css/*.css')
      .pipe(concatCss('app.css'))
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(autoprefixer())
      .pipe(gulp.dest('./dist'));
  });

  gulp.task('style', ['sass']);
};
