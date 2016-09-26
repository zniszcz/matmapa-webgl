const   gulp = require('gulp'),
        $ = require('gulp-load-plugins')()
        browserSync = require('browser-sync').create();

$.loadSubtasks('tasks/**/*.js');

// Main tasks
gulp.task('default', ['style', 'javascript'], () => {
    browserSync.init({
        server: "./dist/"
    });

    gulp.watch('./dist/**/*.html').on("change", browserSync.reload);
    gulp.watch('./src/js/**/*.js', ['javascript']);
    gulp.watch('./src/scss/**/*.{sass,scss}', ['style']);
});

gulp.task('build', [ 'clean', 'style:prod', 'javascript:prod']);

