var gulp = require('gulp');
var watch = require('gulp-watch');
var mocha = require('gulp-mocha');

function handleError(err) {
    console.log(err.toString());
    this.emit('end');
}

gulp.task('unit', function () {
    return gulp.src('sort/*.spec.js')
        .pipe(mocha({ reporter: 'spec' })
            .on('error', handleError));
});

gulp.task('watch:unit', ['unit'], function () {
    watch('{mocha}/**/*.js', ['unit']);
});