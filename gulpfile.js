const gulp = require('gulp'); 
const sass = require('gulp-sass'); 
const concat = require('gulp-concat'); 
const gap = require('gulp-append-prepend');
const themeKit = require('@shopify/themekit');

gulp.task('styles', function(){
  return gulp.src('src/main.scss') // main input file
  .pipe(sass({outputStyle: 'compact'}).on('error', sass.logError)) // process our sass files
  .pipe(gap.prependFile('src/variables.css.liquid')) // prepend our unmodified css.liquid
  .pipe(concat('custom-styles.css.liquid')) // output file 
  .pipe(gulp.dest('assets')) // output folder
})

gulp.task('watch', function(){
  gulp.watch('src/**/*.scss', gulp.series('styles'))
  themeKit.command('watch', {
    env: 'development', //environment is the first line in your config.yml
    allowLive: true // allow working on the live theme 
  })
})
