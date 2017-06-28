'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
 
gulp.task('sass', function () {
  gulp.src('./sass/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch('./sass/*.scss', ['sass']);
  gulp.watch('./sass/**/*.sass', ['sass']);
  gulp.watch('./sass/*.sass', ['sass']);
});
