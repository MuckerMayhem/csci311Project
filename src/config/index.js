module.exports = {
    dev: {
        proxyTable: {
            '/static/axios.php': {
                target: 'localhost:8080',
                    changeOrigin: true
            }
        }
    }
};