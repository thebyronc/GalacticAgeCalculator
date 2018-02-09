// npm install gulp --save-dev
var gulp = require('gulp');
// npm install del --save-dev
var del = require('del');
// npm install vinyl-source-stream --save-dev
var browserify = require('browserify');
var source = require('vinyl-source-stream');
// npm install gulp-concat --save-dev
var concat = require('gulp-concat');
// npm install gulp-uglify --save-dev
var uglify = require('gulp-uglify');
// npm install bower-files --save-dev
var lib = require('bower-files')({
  "overrides":{
    "bootstrap" : {
      "main": [
        "less/bootstrap.less",
        "dist/css/bootstrap.css",
        "dist/js/bootstrap.js"
      ]
    }
  }
});
// npm install browser-sync --save-dev
var browserSync = require('browser-sync').create();
// npm install jasmine --save-dev
// npm install babelify babel-core babel-preset-es2015 --save-dev
var babelify = require("babelify");
// npm install gulp-util --save-dev
var utilities = require('gulp-util');
var buildProduction = utilities.env.production;

// npm install jshint --save-dev
// npm install gulp-jshint --save-dev
var jshint = require('gulp-jshint');

gulp.task("clean", function(){
  return del(['build', 'tmp']);
});
gulp.task('concatInterface', function() {
  return gulp.src(['./js/*-interface.js'])
    .pipe(concat('allConcat.js'))
    .pipe(gulp.dest('./tmp'));
});
gulp.task('jsBrowserify', ['concatInterface'], function() {
  return browserify({ entries: ['./tmp/allConcat.js']})
    .transform(babelify.configure({
      presets: ["es2015"]
    }))
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'))
});
gulp.task("minifyScripts", ["jsBrowserify"], function(){
  return gulp.src("./build/js/app.js")
    .pipe(uglify())
    .pipe(gulp.dest("./build/js"));
});
gulp.task('bowerJS', function () {
  return gulp.src(lib.ext('js').files)
    .pipe(concat('vendor.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'));
});
gulp.task('bowerCSS', function () {
  return gulp.src(lib.ext('css').files)
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest('./build/css'));
});
gulp.task('bower', ['bowerJS', 'bowerCSS']);
gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: "./",
      index: "index.html"
    }
  });
  gulp.watch(['js/*.js'], ['jsBuild']);
  gulp.watch(['bower.json'], ['bowerBuild']);
});
gulp.task("build", ['clean'], function(){
  if (buildProduction) {
    gulp.start('minifyScripts');
  } else {
    gulp.start('jsBrowserify');
  }
  gulp.start('bower');
});
gulp.task('jsBuild', ['jsBrowserify', 'jshint'], function(){
  browserSync.reload();
});
gulp.task('bowerBuild', ['bower'], function(){
  browserSync.reload();
});
gulp.task('jshint', function(){
  return gulp.src(['js/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});
