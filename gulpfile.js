var gulp = require('gulp'),
sass = require('gulp-ruby-sass'),
rename = require('gulp-rename'),
notify = require('gulp-notify'),
minifycss = require('gulp-minify-css'),
livereload = require('gulp-livereload'),
autoprefixer = require('gulp-autoprefixer')
lr = require('tiny-lr'),
concat = require('gulp-concat'),
server = lr(),
uglify = require('gulp-uglify');

gulp.task('default', function() {
  // place code for your default task here
});

//Styles
gulp.task('styles', function(){
    return gulp.src('sass/master.scss')
     .pipe(sass({ style: 'expanded', errLogToConsole: false }))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('dist/styles/unminified'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(livereload(server))
    .pipe(gulp.dest('dist/styles/minified'))
    .pipe(notify({ message: 'Styles task complete' }));
});

//Scripts
gulp.task('scripts', function(){
    return gulp.src(['./js/casi_custom.js'])
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/scripts/unminified'))
    .pipe(rename({suffix:'.min'}))
    .pipe(uglify())
    .pipe(livereload(server))
    .pipe(gulp.dest('dist/scripts/minified'))
    .pipe(notify({ message: 'Scripts task complete' }));
});