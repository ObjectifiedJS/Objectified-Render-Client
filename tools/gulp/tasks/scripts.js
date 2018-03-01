var gulpInternalError = require('../utils/handleErrors'),
	gulp = require('gulp'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify'),

	objectifiedModuleFileArray = [
		'./src/*.js',
		'./src/**/*.js'
	];

gulp.task('ObjectifiedModule', 
	gulpInternalError(function(success, gulpBuildError) {

		// concat on one file???
		return gulp.src(objectifiedModuleFileArray)
			.pipe(concat('Objectified-Render-Client.js').on('error', gulpBuildError))
			.pipe(gulp.dest('./dist/'))
			.pipe(uglify().on('error', gulpBuildError))
			.pipe(rename({
				'extname':'.min.js'
			}))
			.pipe(gulp.dest('./dist/'));
	})
);
