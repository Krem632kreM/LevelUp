'use strict';
const { src, dest } = require("gulp"),// методы gulp: src-Создаёт файловый поток чтения, dest - Создаёт файловый поток записи; series - rкогда нам нужно запустить несколько азадч друг за другом, соблюдая их порядок; parallel - для одновременного выполнения задач, когда их порядок не имеет значения
 //Конфигурация
  path = require('../config/path.js'),
  app = require('../config/app.js'),
 //Плагиныs
  plumber = require('gulp-plumber'),
  notify = require('gulp-notify'),
  autoprefixer = require('gulp-autoprefixer'),
  csso = require('gulp-csso'),
  size = require('gulp-size'),
  shorthand = require('gulp-shorthand'),
  groupCssMediaQueries = require('gulp-group-css-media-queries'),
  sass = require('gulp-sass')(require('sass')),
  sassGlob = require("gulp-sass-glob"),
  rename = require('gulp-rename');
 

 //Обработка SCSS
const scss = () => {
  return src(path.scss.src, {sourcemaps: true})
  .pipe(plumber({
    errorHandler: notify.onError(error => ({
      title: "SCSS",
      message: error.message

    }))
  }))
  .pipe(sassGlob())
  .pipe(sass())
  .pipe(autoprefixer())
  .pipe(shorthand())
  .pipe(groupCssMediaQueries())
  .pipe(size({title: "main.css"}))
  .pipe(dest(path.scss.dest, {sourcemaps: true}))
  .pipe(rename({ suffix: '.min'}))
  .pipe(csso())
  .pipe(size({title: "main.min.css"}))
  .pipe(dest(path.scss.dest, {sourcemaps: true}));
}

module.exports = scss;