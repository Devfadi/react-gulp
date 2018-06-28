var gulp = require('gulp');
var webpack = require('webpack-stream');
var livereload = require('gulp-livereload');

gulp.task('webpack', function() {
    return gulp.src('src/js/index.jsx')
        .pipe(webpack( require('./webpack.config.js') ))
        .pipe(gulp.dest('dist/'))
    .pipe(livereload());
});


gulp.task("webpackrun", function(){
    var server = livereload.listen  (
    {
        host:'localhost',
        port:"8085"
    });
    gulp.watch("src/js/*", ["webpack"]);
});

gulp.task("default", ["webpack", "webpackrun"]);