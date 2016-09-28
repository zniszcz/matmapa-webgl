'use strict';

const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
// browserSync = require('tasks/browsersync.js');

plugins.loadSubtasks('tasks/**/*.js');

// Main tasks
gulp.task('default', ['style', 'javascript'], () => {
  // gulp.watch('./src/*').on("change", browserSync.reload);
});

gulp.task('build', ['clean-prod', 'style:prod', 'javascript:prod']);
