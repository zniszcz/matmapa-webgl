'use strict';

const clean = require('gulp-clean');
const gutil = require('gulp-util');

module.exports = gulp => {

  gulp.task('clean:prod', () => {
    gutil.log('Task for cleaning dist directory.');
    return gulp
      .src('./dist/*', {read: false, force: true})
      .pipe(clean());
  });

};
