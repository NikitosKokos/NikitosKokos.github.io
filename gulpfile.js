// const gulp        = require('gulp');
// const browserSync = require('browser-sync');
// const sass        = require('gulp-sass');
// const cleanCSS = require('gulp-clean-css');
// const autoprefixer = require('gulp-autoprefixer');
// const rename = require("gulp-rename");
// const imagemin = require('gulp-imagemin');
// const htmlmin = require('gulp-htmlmin');
// const project_folder = "dist";
// const source_folder = "src";

// gulp.task('server', function() {

//     browserSync({
//         server: {
//             baseDir: project_folder
//         }
//     });

//     gulp.watch("src/*.html").on('change', browserSync.reload);
// });

// gulp.task('styles', function() {
//     return gulp.src("src/sass/**/*.+(scss|sass)")
//         .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
//         .pipe(rename({suffix: '.min', prefix: ''}))
//         .pipe(autoprefixer())
//         .pipe(cleanCSS({compatibility: 'ie8'}))
//         .pipe(gulp.dest("dist/css"))
//         .pipe(browserSync.stream());
// });

// gulp.task('watch', function() {
//     gulp.watch("src/sass/**/*.+(scss|sass|css)", gulp.parallel('styles'));
//     gulp.watch("src/*.html").on('change', gulp.parallel('html'));
// });

// gulp.task('html', function () {
//     return gulp.src("src/*.html")
//         .pipe(htmlmin({ collapseWhitespace: true }))
//         .pipe(gulp.dest("dist/"));
// });

// gulp.task('scripts', function () {
//     return gulp.src("src/js/**/*.js")
//         .pipe(gulp.dest("dist/js"));
// });

// gulp.task('fonts', function () {
//     return gulp.src("src/fonts/**/*")
//         .pipe(gulp.dest("dist/fonts"));
// });

// gulp.task('icons', function () {
//     return gulp.src("src/icons/**/*")
//         .pipe(gulp.dest("dist/icons"));
// });

// gulp.task('mailer', function () {
//     return gulp.src("src/mailer/**/*")
//         .pipe(gulp.dest("dist/mailer"));
// });

// gulp.task('images', function () {
//     return gulp.src("src/img/**/*")
//         // .pipe(imagemin())
//         .pipe(gulp.dest("dist/img"));
// });

// gulp.task('default', gulp.parallel('watch', 'server', 'styles', 'scripts', 'fonts', 'icons', 'mailer', 'html', 'images'));


const project_folder = "dist";
const source_folder = "src";


let path= {
    build:{
        html: `${project_folder}/`,
        css:    `${project_folder}/css/`,
        js:    `${project_folder}/js/`,
        img:    `${project_folder}/img/`,
        fonts:    `${project_folder}/fonts/`,
    },
    src:{
        html: [source_folder + '/*.html', "!" + source_folder + '/_*.html' ],
        css:    `${source_folder}/sass/style.scss`,
        js:    `${source_folder}/js/script.js`,
        img:    `${source_folder}/img/**/*.{jpg,png,svg,gif,ico,webp}`,
        fonts:    `${source_folder}/fonts/*.ttf`,
    },
    watch:{
        html: `${source_folder}/**/*.html`,
        css:    `${source_folder}/sass/**/*.scss`,
        js:    `${source_folder}/js/**/*.js`,
        img:    `${source_folder}/img/**/*.{jpg,png,svg,gif,ico,webp}`,
    },
    clean: `./${project_folder}/`
}

let {src,dest } = require('gulp'),
    gulp = require('gulp'),
    browsersync = require('browser-sync').create(),
    fileinclude = require('gulp-file-include'),
    del = require('del'),
    sass= require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require("gulp-rename"),
    group_media = require('gulp-group-css-media-queries'),
    cleanCSS = require('gulp-clean-css'),
    uglify = require('gulp-uglify-es').default,
    imagemin = require('gulp-imagemin'),
    webp = require('gulp-webp');

function browserSync() {
    browsersync.init({
        server:{
            baseDir: `./${project_folder}/`
        },
        port: 3000,
        notify: false
    });

}


function html(){
    return src(path.src.html)
        .pipe(fileinclude())
        .pipe(dest(path.build.html))
        .pipe(browsersync.stream());
}

function images(){
    return src(path.src.img)
        .pipe(webp({
            quality: 70
        }))
        .pipe(dest(path.build.img))
        .pipe(src(path.src.img))
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false}],
            interlaced: true,
            optimizationLavel: 3 // 0 to 7
        }))
        .pipe(dest(path.build.img))
        .pipe(browsersync.stream());
}

function js(){
    return src(path.src.js)
        .pipe(fileinclude())
        .pipe(dest(path.build.js))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(uglify())
        .pipe(dest(path.build.js))
        .pipe(browsersync.stream());
}

function css(){
    return src(path.src.css)
    .pipe( sass({
        outputStyle: 'expanded'
    }))
        .pipe(group_media())
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 5 versions'],
            cascade:true
        }))
        .pipe(dest(path.build.css))
        .pipe(cleanCSS())
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(dest(path.build.css))
        .pipe(browsersync.stream());
}


function watchFiles() {
    gulp.watch([path.watch.html], html);
    gulp.watch([path.watch.css], css);
    gulp.watch([path.watch.js], js);
    gulp.watch([path.watch.img], images);
}

function clean(){
    return del(path.clean);
}


let build = gulp.series(clean,gulp.parallel(js,css,html,images));
let watch = gulp.parallel(build, watchFiles, browserSync);

exports.images = images;
exports.js = js;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;



