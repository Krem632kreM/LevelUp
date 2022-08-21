module.exports = {
  htmlmin: {
    collapseWhitespace: true
  },
  pug: {
    pretty: true,
    data: {
      blocks: require('../data/blocks.json')
    }
  },
  webpack: {
    mode: "production"
  },

  imagemin: {
    verbose: true
  }
}