//-- Includes -------------------------------------------------------
var gulp = require('gulp')
var wrap = require('gulp-wrap')
var rename = require('gulp-rename')
var uglify = require('gulp-uglify')
var concat = require('gulp-concat')
var stylus = require('gulp-stylus')
var notify = require('gulp-notify')
var declare = require('gulp-declare')
var minify = require('gulp-minify-css')
var handlebars = require('gulp-handlebars')
var browserify = require('gulp-browserify')
var autoprefixer = require('gulp-autoprefixer')

//-- Browserify core lib  -------------------------------------------
gulp.task('browserify-lib', function() {
  gulp.src('./lib/browser.js')
    .pipe(browserify())
    .pipe(rename('guidedog-lib.js'))
    .pipe(gulp.dest('./_build/lib'))
})

//-- Compile Views --------------------------------------------------
gulp.task('views', function() {
  gulp.src('./assets/handlebars/**/*.handlebars')
    .pipe(handlebars())
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
      namespace: 'Guidedog.templates',
      noRedeclare: true,
    }))
    .pipe(gulp.dest('./_build/templates'))
})

//-- Compile Dist JS ------------------------------------------------
gulp.task('guidedog-js', ['views', 'browserify-lib'], function() {
  var sources = [
    './_build/templates/**/*.js',
    './_build/lib/**/*.js',
    './assets/javascript/jquery-guidedog.js'
  ]

  gulp.src(sources)
    .pipe(concat('guidedog.js'))
    .pipe(gulp.dest('./dist'))
    .pipe(uglify())
    .pipe(rename('guidedog.min.js'))
    .pipe(gulp.dest('./dist'))
})

//-- Compile Styles -------------------------------------------------
gulp.task('guidedog-css', function() {
  gulp.src('./assets/stylus/**/*.styl')
    .pipe(stylus())
    .on("error", notify.onError(function (error) {
      return "Stylus error: " + error.message
    }))
    .pipe(concat('guidedog.css'))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('./dist'))
    .pipe(minify())
    .pipe(rename('guidedog.min.css'))
    .pipe(gulp.dest('./dist'))
})

//-- Watch Files for Changes -----------------------------------------------------
gulp.task('watch', function() {
  gulp.watch('./assets/handlebars/**/*.handlebars', ['guidedog-js'])
  gulp.watch('./assets/javascript/**/*.js', ['guidedog-js'])
  gulp.watch('./assets/stylus/**/*.styl', ['guidedog-css'])
})

//-- Default Task -----------------------------------------------------
gulp.task('default', ['guidedog-js', 'guidedog-css', 'watch'])
