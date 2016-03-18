var gulp = require('gulp'),
    sass = require('gulp-sass'),
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

gulp.task('styles', function() {
  return sass('sass/*.scss')
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('dist/stylesheets/screen.css'))
    // .pipe(rename({suffix: '.min'}))
    // .pipe(cssnano())
    // .pipe(gulp.dest('dist/stylesheets/screen.css'))
    // .pipe(notify({ message: 'Styles task complete' }));
});