const gulp = require('gulp');
const path = require('path');
const less = require('gulp-less');
const minifyCSS = require('gulp-csso');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('css', () => {
  return gulp.src(['./index.less'])
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('.'));
});

gulp.task('cssDev', () => {
  return gulp.watch(['./index.less'], ['css']);
});
