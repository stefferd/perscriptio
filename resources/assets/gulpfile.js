/**
 * Created by stefvandenberg on 09/03/15.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var karma = require('gulp-karma');

gulp.task('build', function() {
    // place code for your default task here
    gulp.src('./sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('../../public/assets/css'));

    // Copy the angular resources
    gulp.src([
        './bower_components/angular/angular.min.js',
        './bower_components/angular/angular.min.js.map',
        './bower_components/angular-resource/angular-resource.min.js',
        './bower_components/angular-resource/angular-resource.min.js.map',
        './bower_components/angular-route/angular-route.min.js',
        './bower_components/angular-route/angular-route.min.js.map']
    ).pipe(gulp.dest('../../public/assets/vendor/angular/'));

    gulp.src('./js/app/**/*').pipe(gulp.dest('../../public/assets/js/app/'));
});

gulp.task('test', function() {
    return gulp.src('./')
        .pipe(karma({
            configFile: 'karma.conf.js',
            action: 'run'
        }))
        .on('error', function(err) {
            // Make sure failed tests cause gulp to exit non-zero
            console.log(err);
            this.emit('end'); //instead of erroring the stream, end it
        });
});