var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var cleanCss = require('gulp-clean-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var connect = require('gulp-connect');
var typescript = require('gulp-tsc');

var paths = {
  sass: ['./scss/**/*.scss'],
  srcIofioClasses: ['./src/iofio-classes/*.ts'],
  srcJs: ['./src/js/*.ts']
};

gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(gulp.dest('./www/css/'))
    .pipe(cleanCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('compileIofio', function(){
  gulp.src(paths.srcIofioClasses)
    .pipe(typescript({
      emitError: false
    }))
    .pipe(gulp.dest('www/modules/iofio-classes/'));
});

gulp.task('compileJs', function(){
  gulp.src(paths.srcJs)
    .pipe(typescript({
      emitError: false
    }))
    .pipe(gulp.dest('www/js/'));
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.srcIofioClasses,['compileIofio']);
  gulp.watch(paths.srcJs,['compileJs']);
});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});

gulp.task('connect', function() {
  connect.server({
    root: 'www/',
    port: '8000'
  });
});

gulp.task('default', ['connect']);
