var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');

gulp.task('default', ['bower_resolve_js', 'bower_resolve_css'], function(){

});

gulp.task('bower_resolve_js', function(){
	var options = {
		paths: {
			bowerDirectory: './public/vendor',
			bowerrc: '.bowerrc',
			bowerJson: 'bower.json'
		}
	};
	return gulp.src(mainBowerFiles('**/*.js', options))
		.pipe(gulp.dest('./public/javascripts'));
});

gulp.task('bower_resolve_css', function(){
	var options = {
		paths: {
			bowerDirectory: './public/vendor',
			bowerrc: '.bowerrc',
			bowerJson: 'bower.json'
		}
	};
	return gulp.src(mainBowerFiles('**/*.css', options))
		.pipe(gulp.dest('./public/stylesheets'));
});