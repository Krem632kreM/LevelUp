'use strict';
const { src, dest } = require("gulp"),// методы gulp: src-Создаёт файловый поток чтения, dest - Создаёт файловый поток записи; series - rкогда нам нужно запустить несколько азадч друг за другом, соблюдая их порядок; parallel - для одновременного выполнения задач, когда их порядок не имеет значения
 //Конфигурация
  path = require('../config/path.js'),
  app = require('../config/app.js'),
 //Плагиныs
  plumber = require('gulp-plumber'),
  notify = require('gulp-notify'),
  webpack = require('webpack-stream'),
  babel = require('gulp-babel');

 //Обработка JavaScript
const js = () => {
  return src(path.js.src, {sourcemaps: true})
  .pipe(plumber({
    errorHandler: notify.onError(error => ({
      title: "js",
      message: error.message

    }))
  }))
  .pipe(babel())
  .pipe(webpack(app.webpack))
  .pipe(dest(path.js.dest, {sourcemaps: true}));
}


module.exports = js;