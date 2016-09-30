'use strict';

const clean = require('gulp-clean');
const gutil = require('gulp-util');
const config = require('./config');

module.exports = gulp => {

  gulp.task('clean', () => {
    gutil.log('Task for cleaning dist directory.');
    return gulp
      .src(config.dist+'/*', {read: false, force: true})
      .pipe(clean());
  });

};
