gulp        = require('gulp');
plantuml    = require('gulp-plantuml');
cache       = require('gulp-cached');
plumber     = require('gulp-plumber');

gulp.task('plantuml', function(){
    gulp
      .src("/workspace/uml/**/*.pu")
      .pipe(plumber())
      .pipe(cache('plantuml'))
      .pipe(plantuml({
        jarPath: "/plantuml.jar"
      }))
      .on('error', function(err){
        console.log(err.message);
        this.emit('end');
      })
      .pipe(gulp.dest("/workspace/img"))
});

gulp.task('watch', function(){
  gulp.watch("/workspace/uml/**/*.pu", [ "plantuml" ]);
  gulp.src('gulpfile.coffee');
});

gulp.task('default', ['plantuml', 'watch']);
