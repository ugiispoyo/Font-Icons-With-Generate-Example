var gulp = require('gulp');
var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');
var runTimestamp = Math.round(Date.now()/1000);

// Convert SVG to Font Icons
var fontName = 'my-font-icons'; 

/* Convert Icons */
gulp.task('iconfont', function(){
  return gulp.src(['icons/*.svg'])
    .pipe(iconfontCss({
      fontName: fontName,
      targetPath: '../css/my-font-icons.css',
      fontPath: '../my-web-fonts/'
    }))
    .pipe(iconfont({
      prependUnicode: false,
      fontName: fontName,
      formats: ['ttf', 'eot', 'woff'],
      normalize: true,
      timestamp: runTimestamp
    }))
    .pipe(gulp.dest('my-web-fonts/'));
});

/* Create All List Icons to JSON For build Example Using Webpack */
gulp.task('list-icons', function(){
  return gulp.src(['./icons/*.svg'])
      .pipe(require('gulp-filelist')('icons-list.json'))
      .pipe(gulp.dest("."));
});