'use strict';

const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

plugins.loadSubtasks('tasks/**/*.js');

// Main tasks
gulp.task('default', ['clean', 'style', 'javascript', 'html']);
gulp.task('build', ['clean', 'style:prod', 'javascript:prod', 'html:prod']);
