'use strict';

var _require = require("gulp"),
    src = _require.src,
    dest = _require.dest,
    path = require('../config/path.js'),
    app = require('../config/app.js'),
    plumber = require('gulp-plumber'),
    notify = require('gulp-notify'),
    webpack = require('webpack-stream'),
    babel = require('gulp-babel'); //Обработка JavaScript


var js = function js() {
  return src(path.js.src, {
    sourcemaps: true
  }).pipe(plumber({
    errorHandler: notify.onError(function (error) {
      return {
        title: "js",
        message: error.message
      };
    })
  })).pipe(babel()).pipe(webpack(app.webpack)).pipe(dest(path.js.dest, {
    sourcemaps: true
  }));
};

module.exports = js;