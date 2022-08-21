'use strict';
const { src, dest } = require("gulp"),// методы gulp: src-Создаёт файловый поток чтения, dest - Создаёт файловый поток записи; series - rкогда нам нужно запустить несколько азадч друг за другом, соблюдая их порядок; parallel - для одновременного выполнения задач, когда их порядок не имеет значения
 //Конфигурация
  path = require('../config/path.js'),
  app = require('../config/app.js'),
 //Плагиныs
  plumber = require('gulp-plumber'),
  notify = require('gulp-notify'),
  newer = require('gulp-newer'),
  imagemin = require('gulp-imagemin');  
 

 //Обработка img
const img = () => {
  return src(path.img.src)
  .pipe(plumber({
    errorHandler: notify.onError(error => ({
      title: "img",
      message: error.message

    }))
  }))
  .pipe(newer(path.img.dest))
  .pipe(imagemin(app.imagemin))
  .pipe(dest(path.img.dest));

}

module.exports = img;