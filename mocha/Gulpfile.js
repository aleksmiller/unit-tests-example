var gulp = require('gulp');
var mocha = require('gulp-mocha');

var paths = {
    scripts: '**/*.js',
    tests: 'sort/*.spec.js'
};

function handleError(err) {
    console.log(err.toString());
    this.emit('end');
}

gulp.task('unit', function () {
    return gulp.src(paths.tests)
        .pipe(mocha({ reporter: 'spec' })
            .on('error', handleError));
});

gulp.task('watch:unit', ['unit'], function () {
    gulp.watch(paths.scripts, ['unit']);
});

gulp.task('default', ['watch:unit']);