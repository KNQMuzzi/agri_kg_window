module.exports = {
    // 基本路径
    publicPath:"./",  // 可以设置成相对路径，这样所有的资源都会被链接为相对路径，打出来的包可以被部署在任意路径
    outputDir:"dist",  //打包时生成的生产环境构建文件的目录
    assetsDir: 'public',  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
    devServer: {
        proxy: {
            '/api_window': {
                // 此处的写法，目的是为了 将 /api 替换成 https://www.baidu.com/
                target: 'http://www.jxaukg.com//agri_info_graph_platform_backend/graph/',
                // 允许跨域
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api_window': ''
                }
            },
            '/agri_window': {
                // 此处的写法，目的是为了 将 /api 替换成 https://www.baidu.com/
                target: 'http://www.jxaukg.com/agri_info_platform_backendV2/',
                // 允许跨域
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/agri_window': ''
                }
            }
        }
    }
}