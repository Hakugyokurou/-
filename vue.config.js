module.exports= {
    publicPath: process.env.NODE_ENV === 'production'
        ? './'
        : '/',
    outputDir: 'dist',
    devServer: {
        port: '8081',
        proxy: {
            "/api": {
                target: "http://web.juhe.cn:8080",
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    }
}