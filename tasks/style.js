const   sass = require('gulp-sass'),
        browserSync = require('browser-sync').create(),
        concatCss = require('gulp-concat-css'),
        sourcemaps = require('gulp-sourcemaps'),
        autoprefixer = require('gulp-autoprefixer');

// TODO:
// 1. Export paths to separate module
// 2. prod build
// 3. sourcemaps bugfix
// 4. browserlist

module.exports = (gulp) => {
    gulp.task('sass', () => {
        return  gulp
                    .src('./src/scss/**/*.scss')
                    .pipe(sourcemaps.init())
                    .pipe(sass().on('error', sass.logError))
                    .pipe(gulp.dest('./.tmp/css'))
                    .pipe(browserSync.stream());
    });

    gulp.task('concat', () => {
        return  gulp
                    .src('./.tmp/css/*.css')
                    .pipe(concatCss('app.css'))
                    .pipe(autoprefixer())
                    .pipe(sourcemaps.write('./dist'))
                    .pipe(gulp.dest('./dist'));
    });

    gulp.task('style', ['sass', 'concat']);
    gulp.task('style:prod', []); 
};
