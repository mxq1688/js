const gulp = require('gulp');
const less = require('gulp-less');
const browserSync = require('browser-sync');

const lessPath = 'src/asset/less/*.less';
const cssPath = 'src/asset/css';
const server = browserSync.create();

gulp.task('serve', function(){
    browserSync.init({
        notify: false,
        server: {
            baseDir: './'
        }
    })
})

gulp.task('less', () => {
    gulp.src(lessPath)
        .pipe(less())
        .pipe(gulp.dest(cssPath))
    browserSync.reload()
})

gulp.watch([lessPath], () => {
    gulp.run('less')
})
gulp.watch(['*.html', `${cssPath}/*.css`, 'src/*.js', 'src/components/*.js'], () => {
    browserSync.reload()
})

gulp.task('default', () => {
    gulp.run('serve')
})
