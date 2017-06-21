var gulp = require("gulp");
var less = require("gulp-less");

//基本路径
var pcSrcPath = "./src/pc/";  //PC版源码路径
var pcReleasePath = "./dist/pc/";  //PC版发布文件路径
var mSrcPath = "./src/m/";  //M版源码路径
var mRrleasePath = "./dist/m/";  //M版发布文件路径


gulp.task("less",function(){
    return gulp.src(pcSrcPath + "less/*.less")
        .pipe(less())
        .pipe(gulp.dest(pcReleasePath + "css"));
});