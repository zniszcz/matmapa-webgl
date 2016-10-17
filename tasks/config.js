'use strict';

module.exports = {
  glob: {
    scss:  './src/**/*.scss',
    js: './src/**/*.js',
    html: './src/**/*.html',
  },
  entryPoint: {
    scss: './src/index.scss'
  },
  path: {
    css: './dist/css/',
    js: './dist/js/',
    dist: './dist/',
  },
  concatOrder: {
    js: [
        './src/main.js',
        './src/**/!(main).js',
    ]
  },
};
