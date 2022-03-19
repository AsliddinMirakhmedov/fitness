global.$ = {
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),
    bs: require('browser-sync').create(),
    sass:require('gulp-sass')(require('sass')),

    path: {
        serveDir: './app/build',
        tasks: require('./gulp/config'),

        src: {
            html: './app/src/*.html',
            style: './app/src/style/*.*',
            js:'./app/src/js/*.*',
            img:'./app/src/images/*.{png,jpg,svg,jpeg,jfif,gif,webp}',
            fonts:'./app/src/fonts/**/*.*',
            video: './app/src/video/*.*'
        },
        build: {
            html: './app/build',
            style: './app/build/style',
            js:'./app/build/js',
            img:'./app/build/images',
            fonts: './app/build/fonts',
            video: './app/build/video'
        },
        watch: {
            html: ['./app/src/*.html', './app/src/view/*.html'],
            style: ['./app/src/style/*.*', './app/src/**/*.*'],
            js:'./app/src/js/*.*',
            img:'./app/src/images/*.{png,jpg,svg,jpeg,jfif,gif,webp}',
            fonts:'./app/src/fonts/**/*.*',
            video: './app/src/video/*.*'  
        }

    },
    tasks: {
        default: ['html', 'style','js', 'img', 'video','fonts','serve', 'watch'],
        build: ['html', 'style','js','img', 'video', 'fonts']
    }

}

$.path.tasks.forEach(taskPath => require(taskPath)());

for (const key in $.tasks) {
    $.gulp.task(key, $.gulp.series($.gulp.parallel(...$.tasks[key])))
}