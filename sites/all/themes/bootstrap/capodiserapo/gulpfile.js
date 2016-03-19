var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer');
    // cssnano = require('gulp-cssnano'),
    // jshint = require('gulp-jshint'),
    // uglify = require('gulp-uglify'),
    // imagemin = require('gulp-imagemin'),
    // rename = require('gulp-rename'),
    // concat = require('gulp-concat'),
    // notify = require('gulp-notify'),
    // cache = require('gulp-cache'),
    // livereload = require('gulp-livereload'),
    // del = require('del');

gulp.task('copy:vendors', function() {
  return gulp.src(['./node_modules/breakpoint-sass/stylesheets/**/*', './node_modules/susy/sass/**/*'])
  .pipe(gulp.dest('./sass/vendor/'));
});

gulp.task('styles', ['copy:vendors'], function() {
  return sass('sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 2 version'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/stylesheets/screen.css'));
});