var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');
var merge_json = require('gulp-merge-json');

gulp.task('default', ['bower_resolve_js', 'bower_resolve_css', 'splice_locales'], function(){

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
		.pipe(gulp.dest('./public/javascripts/lib'));
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

gulp.task('splice_locales', function(){
	return gulp.src('./locales/*.json')
		.pipe(merge_json("locales.json"))
		.pipe(gulp.dest("./public/javascripts/data/locales/"));
});