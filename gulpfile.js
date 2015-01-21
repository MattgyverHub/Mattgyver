// Include gulp
// npm install --save-dev gulp 
var gulp = require('gulp');

// Define base folders
var src = 'assets/';
var dest = 'assets/app/';

// Lint the javascript
// npm install --save-dev gulp-jshint 
var jshint = require('gulp-jshint');

// Include plugins
// npm install --save-dev gulp-concat 
// npm install --save-dev gulp-minify-css
// npm install --save-dev gulp-uglify 
// npm install --save-dev gulp-rename 
// npm install --save-dev gulp-ruby-sass 
// npm install --save-dev gulp-notify 
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sass = require('gulp-ruby-sass');
var notify = require('gulp-notify');

// Image compression
// npm install --save-dev gulp-imagemin 
// npm install --save-dev gulp-cache 
//var imagemin = require('gulp-imagemin');
//var cache = require('gulp-cache');

// Lint Task
gulp.task('lint', function() {
    return gulp.src(src + 'js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src(src + 'js/**/*.js')
		.pipe(concat('main.js'))
		.pipe(gulp.dest(dest + 'js'))
		.pipe(rename({suffix: '.min'}))
		.pipe(uglify())
		.pipe(gulp.dest(dest + 'js'))
		.pipe(notify({ message: 'Complete: Scripts compiled' }));
});

// Compile CSS from Sass files
gulp.task('sass', function() {
    return gulp.src(src + 'scss/*.scss')
        .pipe(rename({suffix: '.min'}))
        .pipe(sass({style: 'compressed'}))
        .on('error', function (err) { console.log(err.message); })
        .pipe(gulp.dest(dest + 'css'))
});

// Compress images 
gulp.task('images', function() {
	return gulp.src(src + 'images/**/*')
		.pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
		.pipe(gulp.dest(dest + 'img'));
});


 // Watch for changes in files and run their task
gulp.task('watch', function() {
	gulp.watch(src + 'js/**/*.js', ['lint', 'scripts']);
	gulp.watch(src + 'scss/**/*.scss', ['sass']);
});

 // Default Task
 // Type: gulp in the PowerShell to begin. CTRL+C to cancel or stop the process
gulp.task('default', ['lint', 'scripts', 'sass', 'watch']);
