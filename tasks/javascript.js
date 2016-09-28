'use strict';

const eslint = require('gulp-eslint');
const rev = require('gulp-rev');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const babel = require('gulp-babel');

module.exports = gulp => {

  gulp.task('lint', () => {
    return gulp
      .src(['../**/*.js', '!node_modules/**'])
      .pipe(eslint())
      .pipe(babel({
        presets: ['es2015'],
      }))
      .pipe(eslint.format());
  });

  gulp.task('javascript', ['lint'], () => {
    gulp.watch('../**/*.js', ['lint']);
  });

  gulp.task('javascript-prod', ['lint'], () => {
    return gulp.src('../src/js/**/*.js')
      .pipe(concat())
      .pipe(rename('app.min.js'))
      .pipe(uglify())
      .pipe(rev())
      .pipe(gulp.dest('../dist/js'));
  });

};
