const { src, dest } = require('gulp');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');

function buildJs() {
    return src('_scripts/*.js')
        .pipe(sourcemaps.init())
        .pipe(
            babel({
                presets: ['@babel/env'],
            }),
        )
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(dest('js'));
}

module.exports = buildJs;
