var gulp = require('gulp');
var watch = watch = require('gulp-watch');
var mocha = require('gulp-mocha');

gulp.task('unit', function () {
    return gulp.src('sort/*.spec.js', {read: false})
        .pipe(mocha());
});

gulp.task('watch-unit', ['unit'], function () {
    gulp.watch('**/*.js', ['unit']);
});