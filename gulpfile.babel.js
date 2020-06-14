const { parallel, series, watch } = require('gulp');
const browserSync = require('browser-sync').create('jekyll');

const images = require('./build/images');
const javascript = require('./build/javascript');
const scss = require('./build/scss');
const jekyll = require('./build/jekyll');

const scssPath = '_scss/**/*.scss';
const jsPath = '_scripts/*.js';
const templatePath = ['*.html', '+(_includes|_layouts)/*.html', '*.yml', '_data/*.yml', '_posts/*'];

function serve() {
    browserSync.init({
        server: {
            baseDir: '_site',
        },
    });

    watch([templatePath, scssPath, jsPath].flat(), cb => {
        javascript();
        scss();
        images();
        jekyll();
        browserSync.reload();
        cb();
    });
}

exports.default = series(parallel(scss, javascript, images), jekyll, serve);
