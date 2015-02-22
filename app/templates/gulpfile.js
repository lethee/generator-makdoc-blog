var gulp = require('gulp');
var Handlebars = require('handlebars');
var makdoc = require('gulp-makdoc');
var pkg = require('./package.json');

makdoc.templateData({package:pkg});

gulp.task('makdoc:done:after', function(done) {
    gulp.src('bower_components/**/*.{js,css,map}')
        .pipe(gulp.dest('dist/'));
    done();
});

Handlebars.registerHelper('_summary', function(html) {
    if (html) {
        var matched = (/<h[123456].*?>.*<\/h[123456].*?>([\s\S*]*?)<h[123456].*?>.*<\/h[123456].*?>/i).exec(html);
        if (matched) {
            return matched[1];
        }
    }
    return "empty-summary";
});