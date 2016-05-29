var basePaths = {
    src: 'src/',
    dist: 'dist/',
    lib: 'lib'
};

var paths = {
  scripts: {
    src: basePaths.src + 'js/',
    dest: basePaths.dist + 'js/',
    wrap: basePaths.src + 'js/wrap/'
  },
  styles: {
    src: basePaths.src + 'sass/',
    dest: basePaths.dist + 'css/'
  },
};

var appFiles = {
  scripts: paths.scripts.src + '*.js',
  styles: paths.styles.src + '**/*.scss',
  npm_wrap: paths.scripts.wrap + 'gulpfile-npm-wrap-template.js',
  js_wrap: paths.scripts.wrap + 'gulpfile-wrap-template.js'
};

/*Lets the magic begin*/
var gulp       = require('gulp');
var del        = require('del');
var compass    = require('gulp-compass');
var minifyCSS  = require('gulp-minify-css');
var livereload = require('gulp-livereload');
var uglify     = require('gulp-uglify');
var plumber    = require('gulp-plumber');
var notify     = require("gulp-notify");
var wrap       = require('gulp-wrap');
var rename     = require('gulp-rename');

function onError(err) {
  notify.onError({
    title:    "Gulp",
    subtitle: "Failure!",
    message:  "Error: <%= error.message %>",
    sound:    "Beep"
  })(err);

  this.emit('end');
}

gulp.task('clean', function(cb) {
  del([basePaths.dist, basePaths.lib], cb);
});

gulp.task('compass', function() {
  gulp.src(appFiles.styles)
      .pipe(plumber({errorHandler: onError}))
      .pipe(compass({
        sass: paths.styles.src,
        css: '.sass-cache/css',
      }))
      .pipe(gulp.dest(basePaths.dist)) // Developer Version

      .pipe(minifyCSS())
      .pipe(rename('dgsnackbar.min.css'))
      .pipe(gulp.dest(basePaths.dist)) // Min Version
      .pipe(livereload());
});

gulp.task('scripts', function() {
  gulp.src(appFiles.scripts)
      .pipe(plumber({errorHandler: onError}))
      .pipe(wrap({
        src: appFiles.js_wrap
      }))
      .pipe(gulp.dest(basePaths.dist)) // Developer version

      .pipe(uglify())
      .pipe(rename('dgsnackbar.min.js'))
      .pipe(gulp.dest(basePaths.dist)) // Min version
      .pipe(livereload());
});

gulp.task('npm', function() {
  gulp.src(appFiles.scripts)
      .pipe(plumber({errorHandler: onError}))
      .pipe(wrap({
        src: appFiles.npm_wrap
      }))
      .pipe(gulp.dest(basePaths.lib));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(appFiles.styles, ['compass']);
  gulp.watch(appFiles.scripts, ['scripts']);
});

gulp.task('default', ['clean'], function() {
  gulp.start('compass', 'scripts', 'npm');
});