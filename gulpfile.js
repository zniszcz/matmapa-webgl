'use strict';

const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

plugins.loadSubtasks('tasks/**/*.js');

// Main tasks
gulp.task('default', ['style', 'javascript', 'html']);
gulp.task('build', ['clean:prod', 'style:prod', 'javascript:prod', 'html:prod']);
