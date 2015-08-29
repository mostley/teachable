'use strict';

var gulp = require('gulp');
var livereload = require('gulp-livereload');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('update', function() {
    gulp.src('views/**/*.handlebars').pipe(livereload());
});

gulp.task('watch', function() {
    console.log("started watching...");
    livereload.listen();
    gulp.watch('views/**/*.handlebars', ['update']);
});


gulp.task('sass', function () {
  gulp.src('./public/scss/*.scss')
//    .pipe(sourcemaps.init())
    .pipe(sass({ includePaths: require('node-bourbon').includePaths }))//.on('error', sass.logError))
  //  .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public/css'));
});

gulp.task('default', ['watch']);
