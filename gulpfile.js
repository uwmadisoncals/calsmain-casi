var gulp = require('gulp'),
sass = require('gulp-ruby-sass');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('styles', function(){
    return gulp.src('sass/master.scss')
     .pipe(sass({ style: 'expanded', errLogToConsole: true }))
    //.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('dist/styles/unminified'))
    //.pipe(rename({ suffix: '.min' }))
    //.pipe(minifycss())
    //.pipe(livereload(server))
    .pipe(gulp.dest('dist/styles/minified'))
    //.pipe(notify({ message: 'Styles task complete' }));
});