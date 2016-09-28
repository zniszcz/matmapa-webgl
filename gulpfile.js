const   gulp = require('gulp'),
        plugins = require('gulp-load-plugins')()
        // browserSync = require('tasks/browsersync.js');

plugins.loadSubtasks('tasks/**/*.js');

// Main tasks
gulp.task('default', ['style', 'javascript'], () => {
    gulp.watch('./src/js/**/*.js', ['javascript']);
    gulp.watch('./src/scss/**/*.scss', ['style']);
    // gulp.watch('./src/*').on("change", browserSync.reload);
});

gulp.task('build', [ 'clean-tmp', 'clean-prod', 'style:prod', 'javascript:prod']);
