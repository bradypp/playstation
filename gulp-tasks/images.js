const { src, dest } = require('gulp');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');

function optimizeImages() {
    return src('_images/**/*.+(png|jpg|gif|svg)')
        .pipe(
            imagemin({
                progressive: true,
                use: [
                    pngquant({
                        quality: '70-80',
                    }),
                ],
            }),
        )
        .pipe(dest('img'));
}

module.exports = optimizeImages;
