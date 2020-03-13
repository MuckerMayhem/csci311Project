module.exports = {
  dev: {
    proxyTable: {
      '/static/axios.php': {
        target: 'http://wwwstu.csci.viu.ca/~csci311e/',
        changeOrigin: true
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
      ? '/'
      : '/',
};
