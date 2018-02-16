gulp        = require 'gulp'
plantuml    = require 'gulp-plantuml'
cache       = require 'gulp-cached'

gulp.task 'plantuml', ->
  gulp.src "/workspace/uml/**/*.pu"
    .pipe cache('plantuml')
    .pipe plantuml(
      jarPath: "/plantuml.jar"
    )
    .pipe gulp.dest "/workspace/img"

gulp.task 'watch', ->
  gulp.watch "/workspace/uml/**/*.pu", [ "plantuml" ]
  gulp.src 'gulpfile.coffee'

gulp.task 'default', ['plantuml', 'watch']
