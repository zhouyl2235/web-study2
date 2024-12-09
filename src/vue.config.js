module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8989',//
                ws: true,
                changeOrigin: true,
                pathRewrite: {//重写路径
                    '^/api': ''
                }
            },
        },
    }
}