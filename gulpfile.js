var gulp = require('gulp');
var del = require('del');
var typescript = require('gulp-typescript');
var tscConfig = require('./tsconfig.json');
var sourcemaps = require('gulp-sourcemaps');

// clean the contents of the distribution directory
gulp.task('clean', function() {
    return del('dist/**/*');
});

// TypeScript compile
gulp.task('compile', ['clean'], function() {
    return gulp
        .src(tscConfig.files)
        .pipe(sourcemaps.init()) // <--- sourcemaps
        .pipe(typescript(tscConfig.compilerOptions))
        .pipe(sourcemaps.write('.')) // <--- sourcemaps
        .pipe(gulp.dest('dist/app'));
});

// copy dependencies
gulp.task('copy:libs', ['clean'], function() {
    return gulp.src([
            'node_modules/core-js/client/shim.min.js'
        ])
        .pipe(gulp.dest('dist/lib'))
});

// copy static assets - i.e. non TypeScript compiled source
gulp.task('copy:assets', ['clean'], function() {
    return gulp.src(['app/**/*', 'index.html', '!app/**/*.ts'], { base: './' })
        .pipe(gulp.dest('dist'))
});

gulp.task('build', ['compile']);
gulp.task('default', ['build']);
