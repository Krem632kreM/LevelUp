const pathSrc = './src';
const pathDest = './public';

module.exports = {
  root: pathDest,
  html: {
    src: pathSrc + "/html/*.html",
    watch: pathSrc + "/html/**/*.html",
    dest: pathDest
  },
  pug: {
    src: pathSrc + "/pug/*.pug",
    watch: pathSrc + "/pug/**/*.pug",
    dest: pathDest
  },
  css: {
    src: pathSrc + "/css/*.css",
    watch: pathSrc + "/css/**/*.css",
    dest: pathDest + "/css"
  },
  scss: {
    src: pathSrc + "/sass/*.sass",
    watch: pathSrc + "/sass/**/*.sass",
    dest: pathDest + "/css"
  },
  js: {
    src: pathSrc + "/js/*.js",
    watch: pathSrc + "/js/**/*.js",
    dest: pathDest + "/js"
  },
  img: {
    src: pathSrc + "/images/*.{png,jpg,svg,mp4}",
    watch: pathSrc + "/images/**/*.{png,jpg,svg,mp4}",
    dest: pathDest + "/images"
  },
  video: {
    src: pathSrc + "/video/*.{mp4}",
    watch: pathSrc + "/video/**/*.{mp4}",
    dest: pathDest + "/video"
  }
 // sass: {
  //  src: pathSrc + "/sass/*.sass",
  //  watch: pathSrc + "/sass/**/*.sass",
  //  dest: pathDest + "/css"
 // }
};