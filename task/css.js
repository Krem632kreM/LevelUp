'use strict';
const { src, dest } = require("gulp"),// методы gulp: src-Создаёт файловый поток чтения, dest - Создаёт файловый поток записи; series - rкогда нам нужно запустить несколько азадч друг за другом, соблюдая их порядок; parallel - для одновременного выполнения задач, когда их порядок не имеет значения
 //Конфигурация
  path = require('../config/path.js'),
  app = require('../config/app.js'),
 //Плагиныs
  plumber = require('gulp-plumber'),
  notify = require('gulp-notify'),
  concat = require('gulp-concat'),
  autoprefixer = require('gulp-autoprefixer'),
  csso = require('gulp-csso'),
  size = require('gulp-size'),
  shorthand = require('gulp-shorthand'),
  groupCssMediaQueries = require('gulp-group-css-media-queries'),
  rename = require('gulp-rename');
 

 //Обработка CSS
const css = () => {
  return src(path.css.src, {sourcemaps: true})
  .pipe(plumber({
    errorHandler: notify.onError(error => ({
      title: "CSS",
      message: error.message

    }))
  }))
  .pipe(concat("main.css"))
  .pipe(autoprefixer())
  .pipe(shorthand())
  .pipe(groupCssMediaQueries())
  .pipe(size({title: "main.css"}))
  .pipe(dest(path.css.dest, {sourcemaps: true}))
  .pipe(rename({ suffix: '.min'}))
  .pipe(csso())
  .pipe(size({title: "main.min.css"}))
  .pipe(dest(path.css.dest, {sourcemaps: true}));
}

module.exports = css;