const clean = require('gulp-clean');

module.exports = (gulp) => {
    gulp.task('clean', () => {
        return gulp
                    .src('./.tmp', {read: false, force: true})
                    .pipe(clean());
    });
}
