const { parallel, series, watch } = require('gulp');
const browserSync = require('browser-sync').create('jekyll');

const images = require('./gulp-tasks/images');
const javascript = require('./gulp-tasks/javascript');
const scss = require('./gulp-tasks/scss');
const { jekyllBuildDev, jekyllBuildProd } = require('./gulp-tasks/jekyll');

const scssPath = '_scss/**/*.scss';
const jsPath = '_javascript/*.js';
const templatePath = [
    '*.html',
    '+(_includes|_layouts)/*.html',
    '*.yml',
    '_data/*.yml',
    '_posts/*.md',
];

function serve() {
    browserSync.init({
        server: {
            baseDir: '_site',
        },
    });

    watch([...templatePath, scssPath, jsPath], cb => {
        javascript();
        scss();
        images();
        jekyllBuildDev();
        browserSync.reload();
        cb();
    });
}

exports.default = series(parallel(scss, javascript, images), jekyllBuildDev, serve);

exports.build = series(parallel(scss, javascript, images), jekyllBuildProd);
