const   useref = require('gulp-useref'),
        gulpif = require('gulp-if'),
        uglify = require('gulp-uglify'), 
        autoprefixer = require('gulp-autoprefixer'),
        cleanCSS = require('gulp-clean-css');

module.exports = (gulp) => {

    gulp.task('html', () => {
        return gulp
                .src('./src/**/*.html')
                .pipe(useref())
                .pipe(gulpif('*.js', uglify()))
                .pipe(gulpif('*.css', cleanCSS())
                .pipe(gulp.dest('./dist')));

    });
}
