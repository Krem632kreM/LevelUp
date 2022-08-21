'use strict';
const { src, dest } = require("gulp");// методы gulp: src-Создаёт файловый поток чтения, dest - Создаёт файловый поток записи; series - rкогда нам нужно запустить несколько азадч друг за другом, соблюдая их порядок; parallel - для одновременного выполнения задач, когда их порядок не имеет значения
 //Конфигурация
 const path = require('../config/path.js');
 const app = require('../config/app.js');
 //Плагиныs
 const plumber = require('gulp-plumber');
 const notify = require('gulp-notify');
 const pugs = require("gulp-pug");

 //Обработка PUG
const pug = () => {
  return src(path.pug.src)
  .pipe(plumber({
    errorHandler: notify.onError(error => ({
      title: "Pug",
      message: error.message

    }))
  }))
  .pipe(pugs(app.pug))
  .pipe(dest(path.pug.dest));
}

module.exports = pug;