'use strict';

// const useref = require('gulp-useref');
const inject = require('gulp-inject');
const gutil = require('gulp-util');
const config = require('./config');

module.exports = gulp => {

  // -- Unit html tasks

  gulp.task('inject-html', () => {
    return gulp.src(config.html)
      .pipe(inject(gulp.src([config.dist+'/css/*.css', config.dist+'/js/*.js'], {read: false})))
      .pipe(gulp.dest(config.dist));
  });

  gulp.task('inject-html:prod', () => {
    return gulp.src(config.html)
      .pipe(inject(gulp.src([config.dist+'/css/*.min.css', config.dist+'/js/*.min.js'], {read: false})))
      .pipe(gulp.dest(config.dist));
  });

  // -- Main html tasks

  gulp.task('html', ['javascript', 'style', 'inject-html'], () => {
    gutil.log('Task for serving templates in developer mode');

    return gulp.watch(config.html, ['inject-html']);
  });

  gulp.task('html:prod', ['javascript:prod', 'style:prod','inject-html:prod'], () => {
    gutil.log('Task for building templates in production mode.');
  });
};
