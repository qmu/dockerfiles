gulp        = require 'gulp'
plantuml    = require 'gulp-plantuml'
cache       = require 'gulp-cached'
plumber     = require 'gulp-plumber'

gulp.task 'plantuml', ->
  gulp.src "/workspace/uml/**/*.pu"
    .pipe plumber()
    .pipe cache('plantuml')
    .pipe plantuml(
      jarPath: "/plantuml.jar"
    )
    .on 'error', (err) ->
      console.log(err.message);
      this.emit('end');
    .pipe gulp.dest "/workspace/img"

gulp.task 'watch', ->
  gulp.watch "/workspace/uml/**/*.pu", gulp.task("plantuml")
  gulp.src 'gulpfile.coffee'

gulp.task 'default', gulp.series(gulp.parallel('plantuml', 'watch'))

 
