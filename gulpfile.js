var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
// 压缩css
var minifycss = require('gulp-minify-css');
// 重命名
var rename = require('gulp-rename');
// 压缩js
var uglify = require('gulp-uglify');
// 监控
var watch = require('gulp-watch');
// 合并文件
var concat = require('gulp-concat');
// 压缩图片
var imagemin = require('gulp-imagemin');
// js代码检查
// var jshint = require('gulp-jshint');
// 定义scss文件路径
var path = {
	sass: './sass/*.scss',
	js: './src/js/ionic-banner-tips.js',
	dest: './src/css/',
	dist: './dist/'
};
// 建立任务
gulp.task('sass',function() {
	return sass(path.sass)
    		   .on('error', function (err) { console.log(err.message); })
			   .pipe(gulp.dest(path.dest))
			   .pipe(gulp.dest(path.dist))
			   .pipe(minifycss())
			   .pipe(rename({extname:'.min.css'}))
			   .pipe(gulp.dest(path.dest))
			   .pipe(gulp.dest(path.dist));
});

// js文件编译
gulp.task('js',function() {
	return gulp.src(path.js)
		       .pipe(uglify())
		       .pipe(rename({suffix: '.min'}))
               .pipe(gulp.dest(path.dist));
});

// 监控任务
gulp.task('watch', function() {
  gulp.watch(path.sass, ['sass'],function() {
  	console.log('hhhh');
  });
});

// 初始化默认任务
gulp.task('default',['sass','js'],function() {
  // 将你的默认的任务代码放在这
  console.log('kkkkkk');
});