var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var connect = require('gulp-connect');
var karma = require('gulp-karma');
var protractor = require('gulp-protractor').protractor;
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
    .pipe(minifyCss({
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

gulp.task('unit', function (done) {
  // From http://jbavari.github.io/blog/2014/06/11/unit-testing-angularjs-services/
  // Be sure to return the stream
  // NOTE: Using the fake './foobar' so as to run the files listed in karma.conf.js
  //  instead of what was passed to gulp.src
  return gulp.src('./foobar')
    .pipe(karma({
      configFile: __dirname + '/tests/karma.conf.js',
      action: 'run'
    }))
    .on('error', function (err) {
      // Make sure failed tests cause gulp to exit non-zero
      console.log(err);
      this.emit('end'); // instead of erroring the stream, end it
    });
});

gulp.task('autotest', function () {
  return gulp.watch([__dirname + 'www/js/**/*.js', __dirname + 'tests/unit/spec/**/*.js'], ['unit']);
})

gulp.task('e2e', function(done) {
  var args = ['--baseUrl', 'http://127.0.0.1:8000'];
  gulp.src(['./tests/e2e/*.js'])
    .pipe(protractor({
      configFile: 'tests/protractor.conf.js',
      args: args
    }))
    .on('error', function(e) { throw e; });
})

gulp.task('default', ['connect']);
