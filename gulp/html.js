var gulp = require('gulp');

gulp.task('copy-html', function () {
    return gulp.src('src/app/html/*.html')
        .pipe(gulp.dest('www'));
});