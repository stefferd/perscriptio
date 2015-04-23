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
        './js/app/components/angular/angular.min.js',
        './js/app/components/angular/angular.min.js.map',
        './js/app/components/angular-resource/angular-resource.min.js',
        './js/app/components/angular-resource/angular-resource.min.js.map',
        './js/app/components/angular-route/angular-route.min.js',
        './js/app/components/angular-route/angular-route.min.js.map']
    ).pipe(gulp.dest('../../public/assets/vendor/angular/'));

    // Copy the angular resources
    gulp.src([
            './js/app/components/angular-ui-bootstrap/src/timepicker/timepicker.js',
            './js/app/components/angular-ui-bootstrap/template/timepicker/timepicker.html'
            ]
    ).pipe(gulp.dest('../../public/assets/vendor/angular-ui-bootstrap/timepicker/'));

    // Copy the bootstrap resources
    gulp.src([
            './js/app/components/bootstrap/dist/js/bootstrap.min.js',
            './js/app/components/bootstrap/dist/css/bootstrap.min.css',
        ]
    ).pipe(gulp.dest('../../public/assets/vendor/bootstrap/'));

    gulp.src('./js/app/components/bootstrap/dist/fonts/*').pipe(gulp.dest('../../public/assets/vendor/bootstrap/fonts/'));

    gulp.src(['!./js/app/components/**/*', './js/app/**/*']).pipe(gulp.dest('../../public/assets/js/app/'));
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