// Gulp.js configuration

var
  // modules
  gulp = require('gulp'),
  newer = require('gulp-newer'),
  concat = require('gulp-concat'),
  deporder = require('gulp-deporder'),
  stripdebug = require('gulp-strip-debug'),
  uglify = require('gulp-uglify'),
  pump = require('pump'),
  cssnano = require('gulp-cssnano'),
  sourcemaps = require('gulp-sourcemaps'),
  sass = require('gulp-sass'),
  babel = require("gulp-babel");


  // development mode?
  devBuild = (process.env.NODE_ENV !== 'production'),

  // folders
  folder = {
    src: 'src/',
    build: 'build/'
  }

  // JS Processing
  gulp.task('js', function (cb) {
    pump([
          gulp.src('js/**/*'),
          babel(),
          uglify(),
          gulp.dest('./js/min')
      ],
      cb
    );
  });

  // SASS/SCSS Processing
  gulp.task('scss', function() {
    return gulp.src('scss/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(sourcemaps.write())
      .pipe(cssnano())
      .pipe(gulp.dest('./css'));
  });

  // Automated Tasks //
  // *****************

  // run all tasks
  gulp.task('run', ['scss', 'js']);
  // watch for changes
  gulp.task('watch', function() {
    // js
    gulp.watch('js/**/*', ['js']);
    // sass
    gulp.watch('scss/**/*', ['scss']);
  });

  // Default Task //
  // **************

  gulp.task('default', ['run', 'watch']);

;