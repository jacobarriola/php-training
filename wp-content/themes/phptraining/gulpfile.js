// Load our plugins
var	gulp				=	require('gulp'),
	sass					=	require('gulp-sass'),  // Our sass compiler
	notify				=	require('gulp-notify'), // Basic gulp notificatin using OS
	minifycss			=	require('gulp-minify-css'), // Minification
	rename				=	require('gulp-rename'), // Allows us to rename our css file prior to minifying
	autoprefixer	=	require('gulp-autoprefixer'), // Adds vendor prefixes for us
	browserSync		=	require('browser-sync'), // Sends php, js, img and css updates to browser for us
	concat			= require('gulp-concat'), // Concat our js
	uglify			= require('gulp-uglify'), // Minify our js
	jshint 			= require('gulp-jshint'); // Checks for js errors

// Our browser-sync task.

gulp.task('browser-sync', function() {
	var files = [
		'**/*.php'
	];

	browserSync.init(files, {
		proxy: 'phptraining.dev/'
	});
});


// Our 'styles' tasks, which handles our sass actions such as compliling and minification

gulp.task('styles', function() {
		gulp.src('./assets/sass/app.scss')
		.pipe(sass({
			style: 'expanded',
			sourceComments: true
		})
		.on('error', notify.onError(function(error) {
			return "Error: " + error.message;
		}))
		)
		.pipe(autoprefixer({
			browsers: ['last 2 versions', 'ie >= 8']
		})) // our autoprefixer - add and remove vendor prefixes using caniuse.com
		.pipe(gulp.dest('./assets/dist/css')) // Location of our app.css file
		.pipe(browserSync.reload({stream:true})) // CSS injection when app.css file is written
		.pipe(rename({suffix: '.min'})) // Create a copy version of our compiled app.css file and name it app.min.css
		.pipe(minifycss({
			keepSpecialComments:0
		})) // Minify our newly copied app.min.css file
		.pipe(gulp.dest('./assets/dist/css')) // Save app.min.css onto this directory
		.pipe(browserSync.reload({stream:true})) // CSS injection when app.min.css file is written
		.pipe(notify({
			message: "Styles task complete!"
		}));
});


// Our 'scripts' task, which handles our javascript elements
gulp.task('js', function() {
	return gulp.src('./assets/js/**/*.js')
		.pipe(concat('app.js'))
		.pipe(gulp.dest('./assets/dist/js'))
		.pipe(rename({suffix: '.min'}))
		.pipe(uglify())
		.pipe(gulp.dest('./assets/dist/js'))
		.pipe(browserSync.reload({stream:true}))
		.pipe(notify({ message: "Scripts task complete!"}));
});


// Our 'jsHint' task, which checks for JS errors
gulp.task('jsHint', function() {
	return gulp.src('./assets/js/**/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe( notify( { message: "jsHint task complete", onLast: true } ) );
} );


// Watch our files and fire off a task when something changes
gulp.task('watch', function() {
	gulp.watch('./assets/sass/**/*.scss', ['styles']);
	gulp.watch('./assets/js/**/*.js', ['jsHint']);
	gulp.watch('./assets/js/**/*.js', ['js']);
});


// Our default gulp task, which runs all of our tasks upon typing in 'gulp' in Terminal
gulp.task('default', ['styles', 'js', 'jsHint', 'browser-sync', 'watch']);
