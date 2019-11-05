var gulp = require('gulp')
var sass = require('gulp-sass')
var cleanCSS = require('gulp-clean-css')
var minify = require('gulp-minify')
var pug = require('gulp-pug')
var rename = require('gulp-rename')
var gulpBabel = require("gulp-babel")
const rollup = require('gulp-better-rollup');
const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs')
var browserSync = require('browser-sync').create()

gulp.task('icons', function() {
    return gulp.src('node_modules/@fortawesome/fontawesome-free/webfonts/*')
        .pipe(gulp.dest('dist/webfonts/'));
});

gulp.task('sass', function() {
	return gulp.src('resources/sass/main.scss', 'resources/sass/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('dist/css'))
		.pipe(browserSync.stream());
});

gulp.task('minify-css', () => {
	return gulp.src('dist/css/*.css')
	  .pipe(cleanCSS({compatibility: 'ie8'}))
	  .pipe(gulp.dest('dist/css'));
});

gulp.task('compress', async function() {
	return gulp.src('resources/js/app.js')
	.pipe(rollup({ plugins: [babel(), resolve(), commonjs()] }, 'umd'))
    .pipe(minify())
    .pipe(gulp.dest('dist/js'))
});

gulp.task('pug-compile', function buildHTML() {
    return gulp.src('./resources/templates/index.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(rename('./index.html'))
        .pipe(gulp.dest('./'))
});

gulp.task('watch', function () {
	gulp.watch('resources/templates/**/*.pug', gulp.series('pug-compile'));
	gulp.watch('resources/sass/**/*.scss', gulp.series('sass'));
	gulp.watch('resources/js/*.js', gulp.series('compress'));
 });

gulp.task('serve', gulp.series('sass', function() {

	browserSync.init({
		server: './'
	});

	gulp.watch('resources/sass/**/*.scss', gulp.series('sass'));
	gulp.watch('*.html').on('change', browserSync.reload);
}));

gulp.task('default', gulp.series('serve'));

