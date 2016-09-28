'use strict';

const useref = require('gulp-useref');
const gulpif = require('gulp-if');
const uglify = require('gulp-uglify');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

module.exports = gulp => {
  gulp.task('html', () => {
    return gulp.src('./src/**/*.html')
      .pipe(useref())
      .pipe(gulpif('*.js', uglify()))
      .pipe(gulpif('*.css', cleanCSS())
      .pipe(autoprefixer())
      .pipe(gulp.dest('./dist')));
  });
};
