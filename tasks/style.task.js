'use strict';

const sass = require('gulp-sass');
const rev = require('gulp-rev');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const rename = require('gulp-rename');
const gutil = require('gulp-util');
const config = require('./config');
const glob = require('gulp-sass-glob');
const sourcemaps = require('gulp-sourcemaps');

module.exports = gulp => {

  // -- Unit style tasks

  gulp.task('sass', () => {
    return gulp.src(config.scssEntryPoint)
      .pipe(glob())
      .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(postcss([autoprefixer()]))
      .pipe(rename('app.css'))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(config.dist+'/css'));
  });

  gulp.task('sass:prod', () => {
    return gulp.src(config.scss)
      .pipe(glob())
      .pipe(sass().on('error', sass.logError))
      .pipe(postcss([
        autoprefixer(),
        cssnano(),
      ]))
      .pipe(rename('app.min.css'))
      .pipe(rev())
      .pipe(gulp.dest(config.dist+'/css'));
  });

  // -- Main style tasks

  // Task for serving stylesheets in developer mode.
  gulp.task('style', ['sass']);

  // Task for building stylesheets in production mode.
  gulp.task('style:prod', ['sass:prod']);

};
