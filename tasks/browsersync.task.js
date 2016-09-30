module.exports = gulp => {
  const browsersync = require('browser-sync').create();

  gulp.task('browser-sync', () => {
    browsersync.init({
      server: {
        baseDir: "./dist",
      }
    });
  });
};
