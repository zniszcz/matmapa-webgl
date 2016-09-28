'use strict';

const browserSync = require('browser-sync').create();

module.exports = () => {
  return () => {
    browserSync.init({
      injectChanges: true,
      server: './src/',
    });
  };
};
