'use strict';

const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const runSequence = require('run-sequence');

plugins.loadSubtasks('tasks/**/*.task.js');

// Main tasks
gulp.task('default', cb => {
  runSequence('clean', 'browser-sync', ['style', 'javascript'], 'html', 'watch', cb);
});

gulp.task('build', cb => {
  runSequence('clean', ['style:prod', 'javascript:prod'], 'html:prod', cb);
});
