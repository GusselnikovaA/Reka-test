const { parallel, src, dest } = require('gulp');
let cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
// let tinypng = require('gulp-tinypng-compress');

// function defaultTask(cb) {
//   console.log('задача выполнена');
//   cb();
// }

function minifyСss() {
  return src('./css/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(dest('dist/css/'));
}

function minifyHtml() {
  return src('./*.html')
        .pipe(htmlmin({collapseWhitespace: true }))
        .pipe(dest('dist/'));
}

function moveJS() {
  return src('./js/*.js')
        .pipe(dest('dist/js/'));
}

function moveFonts() {
  return src('./easy/fonts/**/*')
        .pipe(dest('dist/fonts'));
}

// function tinyImages(cb) {
//   src('./easy/img/**/*.{png,jpg,jpeg}')
//     .pipe(tinypng({
//       key: 'k4X6xYq5WClWF6YgK2qtmnCcGXyBVqyp',
//     }))
//     .pipe(dest('dist/img'));
//     cb();
// }

exports.build = parallel(minifyСss, minifyHtml, moveJS, moveFonts);
// exports.default = defaultTask;
exports.minifyHtml = minifyHtml;
exports.minifyСss = minifyСss;
exports.moveJS = moveJS;
exports.moveFonts = moveFonts;
// exports.tinyImages = tinyImages;