'use strict';
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({ lazy: true });
var config = require('./gulp.config')();
var livereload = require('gulp-livereload');

gulp.task('server', function () {
   
    plugins.nodemon({
        script: './src/app/server/server.js', ext: 'js html', env: { 'NODE_ENV': 'development' }
        })
        .on('restart', function () {
           
        });
});
