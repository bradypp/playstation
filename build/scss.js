const { src, dest } = require('gulp');
const sass = require('gulp-sass');
const prefix = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');

function buildScss() {
    return src('_scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(
            sass({
                includePaths: ['scss'],
                outputStyle: 'compressed',
            }),
        )
        .pipe(
            prefix({
                cascade: false,
            }),
        )
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('css'));
}

module.exports = buildScss;
