'use strict';

module.exports = () => {
  return {
    css: {
      scss: './src/scss/**/*.scss',
      scssDir: './src/scss',
      css: './.tmp/css/**/*.css',
      cssDir: './.tmp/css',
      dist: './dist',
    },
  };
};
