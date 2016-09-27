const   sass = require('gulp-sass'),
        browserSync = require('browser-sync').create(),
        concatCss = require('gulp-concat-css'),
        sourcemaps = require('gulp-sourcemaps'),
        autoprefixer = require('gulp-autoprefixer')
        cleanCSS = require('gulp-clean-css'),
        config = require('./config')();

// TODO:
// 1. Export paths to separate module
// 2. prod build
// 3. sourcemaps bugfix
// 4. browserlist

module.exports = (gulp) => {

    gulp.task('sass', () => {
        return  gulp
                    .src(config.css.scss)
                    .pipe(sourcemaps.init())
                    .pipe(sass().on('error', sass.logError))
                    .pipe(gulp.dest(config.css.cssDir))
                    .pipe(browserSync.stream());
    });

    gulp.task('sass:prod', () => {
        return  gulp
                    .src(config.css.scss)
                    .pipe(sass().on('error', sass.logError))
                    .pipe(gulp.dest(config.css.cssDir));
    });

    gulp.task('concat', () => {
        return  gulp
                    .src('./.tmp/css/*.css')
                    .pipe(concatCss('app.css'))
                    .pipe(autoprefixer())
                    .pipe(sourcemaps.write('./dist'))
                    .pipe(gulp.dest('./dist'));
    });

    gulp.task('concat:prod', () => {
        return  gulp
                    .src('./.tmp/css/*.css')
                    .pipe(concatCss('app.css'))
                    .pipe(cleanCSS({ compatibility: 'ie8' }))
                    .pipe(autoprefixer())
                    .pipe(gulp.dest('./dist'));
    });

    gulp.task('style', ['sass', 'concat']);
    gulp.task('style:prod', ['sass:prod', 'concat:prod']); 
};
