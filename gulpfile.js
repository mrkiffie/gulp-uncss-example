(function () {
    'use strict';

    // load gulp module
    var gulp = require('gulp');

    // loads all the `gulp-` prefixed modules into the plugins namespace
    var plugins = require('gulp-load-plugins')();

    // define the task
    gulp.task('uncss', function () {

        // load the css files in the src directory into the gulp pipeline
        return gulp.src('./src/**/*.css')

            // handle any errors that might occur in the gulp pipeline
            .pipe(plugins.plumber())

            // run the uncss task
            .pipe(plugins.uncss({
                // load all html files in the src directory to which the styles will be applied
                html: ['./src/**/*.html']
            }))

            // apply formatting rules to the styles
            .pipe(plugins.csscomb())

            // write the output into the dest directory
            .pipe(gulp.dest('./dest/'));
    });

    // expose uncss as the default task
    gulp.task('default', ['uncss']);

}());
