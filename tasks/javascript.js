'use strict';

const eslint = require('gulp-eslint');

module.exports = gulp => {

  gulp.task('lint', () => {
    return gulp
      .src(['../**/*.js', '!node_modules/**'])
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.failAfterError());
  });

  gulp.task('javascript', ['lint']);
  gulp.task('javascript-prod', []);
};
