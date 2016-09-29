'use strict';

const clean = require('gulp-clean');

module.exports = gulp => {

  gulp.task('clean:prod', () => {
    return gulp
      .src('./dist/*', {read: false, force: true})
      .pipe(clean());
  });

};
