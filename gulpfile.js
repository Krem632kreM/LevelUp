'use strict';
const { watch, series, parallel } = require("gulp");// методы gulp: src-Создаёт файловый поток чтения, dest - Создаёт файловый поток записи; series - rкогда нам нужно запустить несколько азадч друг за другом, соблюдая их порядок; parallel - для одновременного выполнения задач, когда их порядок не имеет значения
const browserSync = require('browser-sync').create();
//Задачи
const clear = require('./task/clear.js'),
      pug = require('./task/pug.js'),
      html = require('./task/html.js'),
      scss = require('./task/scss.js'),
      js = require('./task/js.js'),
      img = require('./task/img.js'),
      css = require('./task/css.js');

//Конфигурация
const path = require('./config/path.js');
//Сервер
const server = () => {
  browserSync.init({
    server: {
      baseDir: path.root //Именно в этой директории будет запускаться сервер. Далее необходимо синхронизировать сервер с выполеннием задач => reload - просит сервер перезагрузить страницу полностью, stream - который просит обновить данные точечно без перезагрузки страницы. Вызывать эти методы необходимо в конце задачи, после записи всех её файлов
    }
  });
}

//Наблюдение
const watcher = () => {
  watch(path.pug.src, pug).on("all", browserSync.reload);
  watch(path.scss.src, scss).on("all", browserSync.reload);
  watch(path.js.src, js).on("all", browserSync.reload);
  watch(path.img.src, img).on("all", browserSync.reload);
}

//Задачи
exports.pug = pug;
exports.html = html;
exports.js = js;
exports.img = img;
exports.scss = scss;


//Сборка
exports.dev = series(
  clear,
  parallel(pug, scss, img, js),
  parallel(watcher, server)//parallel чтобы сервер запускался параллельно с отслеживанием файлов
);