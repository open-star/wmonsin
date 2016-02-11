'use strict';

declare function require(x:string):any;

var gulp = require('gulp');

gulp.task('default', () => {

    return gulp.src(
        [
            'init.js',
            'bin/www',
            'app.js',
            'package.json',
            'config/config.json',
            'config/logs.json',
            'model/*.js',
            'views/**/*.jade',
            'routes/**/*.js',
            'logs/*',
            'bower.json',
            '.bowerrc',
            'memo.md',
            'public/favicons/*',
            'public/**/*.css',
            'public/**/*.svg',
            'public/**/*.png',
            'public/font/**/*',
            'public/javascripts/*.js',
            'public/backend/javascripts/*.js',
            'public/front/javascripts/*.js',
            'public/output/output.pdf'
        ],
        {base: '..'}
    )
        .pipe(gulp.dest('../womnsin_image'));
});
