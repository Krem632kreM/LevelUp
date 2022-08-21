'use strict';
const { src, dest } = require("gulp");// методы gulp: src-Создаёт файловый поток чтения, dest - Создаёт файловый поток записи; series - rкогда нам нужно запустить несколько азадч друг за другом, соблюдая их порядок; parallel - для одновременного выполнения задач, когда их порядок не имеет значения
const del = require('del');
 //Конфигурация
 const path = require('../config/path.js');
 const app = require('../config/app.js');
 //Плагиныs
 const plumber = require('gulp-plumber');
 const notify = require('gulp-notify');
 const fileInclude = require('gulp-file-include');//плагин шаблонизации
 const htmlmin = require('gulp-htmlmin');//плагин минификации
 const size = require('gulp-size');//плагин размера сжатых файлов
 const pugs = require("gulp-pug");

//обработка HTML
const html = () => {
  return src(path.html.src)//передаём путь до исходных файлов, с которыми собираемся работать в этой задаче. Создаёт файловый поток чтения, который мы можем передать дальше с помощью метода pipe()
  //Плагин
  //Плагин
  //Плагин
  .pipe(plumber({
    errorHandler: notify.onError(error => ({
      title: "HTML",
      message: error.message

    }))
  })) //позволяет перехватывать все ошибки которые могу произойти в нашей цепочке
  .pipe(fileInclude())//поток html будет проходить через указанный плагин, а только потом записываться в конечную директорию
 
  .pipe(size({title:"До сжатия:"}))
  .pipe(htmlmin(app.htmlmin))
  .pipe(size({title:"После сжатия:"}))
  .pipe(dest(path.html.dest));//dest создаёт поток записи
}

module.exports = html;