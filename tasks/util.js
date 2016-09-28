'use strict';

const clean = require('gulp-clean');

module.exports = gulp => {
  gulp.task('clean-tmp', () => {
    return gulp.src('./.tmp/*', {read: false, force: true})
      .pipe(clean());
  });

  gulp.task('clean-dist', () => {
    return gulp
      .src('./dist/*', {read: false, force: true})
      .pipe(clean());
  });
};
