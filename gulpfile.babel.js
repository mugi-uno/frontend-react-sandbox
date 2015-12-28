import gulp from 'gulp'
import watch from 'gulp-watch'
import webpack from 'gulp-webpack'
import browser from 'browser-sync'

gulp.task('webpack', () => {
  return gulp.src('')
    .pipe(webpack(require('./webpack.config.babel.js')))
    .pipe(gulp.dest('public/'))
})

gulp.task('watch', () => {
  gulp.watch([
    'html/**/*',
    'javascripts/**/*',
    'stylesheets/**/*',
  ], ['webpack'])
});


gulp.task('browser', () => {
  browser({
    server : {
      baseDir : 'public/'
    }
  })
});


gulp.task('browser-reload', () => {
  browser.reload();
});

gulp.task('default', ['watch', 'browser'], () => {
  gulp.watch('public/**/*', ['browser-reload'])
});