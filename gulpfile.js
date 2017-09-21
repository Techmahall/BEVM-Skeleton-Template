var gulp      = require('gulp');
var sass      = require('gulp-sass');
var bs        = require('browser-sync').create();
var concatCss = require('gulp-concat-css');
var concat    = require('gulp-concat');
var minify    = require('gulp-minify');
var clean     = require('gulp-clean');
var del       = require('del');



// refresh browser on changes
gulp.task('browser-sync', function() {
    bs.init({
        server: {
            baseDir: "./dist"
        }
    });
});

// sass it
gulp.task('sass', function () {
    return gulp.src('src/scss/**/*.scss')
    .pipe(sass())
    .pipe(concatCss("app.css"))
    .pipe(gulp.dest('./dist/assets/css/'))
    .pipe(bs.reload({stream: true}));
});

// minify and concat scripts
gulp.task('scripts', function() {
  gulp.src('src/lib/**/*.js')
  .pipe(concat('app.js'))
  .pipe(gulp.dest('./dist/assets/js/'))
  .pipe(bs.reload({stream: true}));
});

// copy the html to dist
gulp.task('copy', function () {
    gulp.src('src/**/*.html')
    .pipe(gulp.dest('dist/'));
});

// refresh browser on changes
gulp.task('browser-sync', function() {
    bs.init({
        server: {
            baseDir: "./dist"
        }
    });
});

// delete dist on init
gulp.task('clean', function () {
    del.sync(['dist']);
});

// clean up and build
gulp.task('build', ['clean'], function() {
    console.log('Building...');
    gulp.start(['sass', 'scripts', 'copy']);
});

// watch the tasks
gulp.task('watch', ['browser-sync'], function () {
    gulp.watch("src/scss/**/*.scss", ['sass']);
    gulp.watch('src/lib/**/*.js', ['scripts']);
    gulp.watch('src/**/*.html', ['copy']);
    gulp.watch("src/**/*.html").on('change', bs.reload);
});

// default and production
gulp.task('default', ['sass', 'scripts', 'copy']);
gulp.task('--production', ['clean', 'build']);