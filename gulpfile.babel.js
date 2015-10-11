import gulp from 'gulp';
import del from 'del';
import path from 'path';

import sass from 'gulp-sass';
import babel from 'gulp-babel';
import autoprefixer from 'gulp-autoprefixer';

gulp.task('clean', cb => del('dist/*', cb));
gulp.task('css', cb => {
  return gulp.src('src/style.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 5 versions']
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('js', cb => {
  return gulp.src('src/flex.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'));
});

gulp.task('build', ['clean', 'css', 'js']);

