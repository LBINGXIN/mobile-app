const TransformPages = require('uni-read-pages');
const { webpack } = new TransformPages();
// const BundleAnalyzerPlugin =
//   require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  transpileDependencies: [
    '@euler/mobile-ui',
    '@euler/mobile-common',
    'uview-ui',
  ],
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true,
    // proxy: {
    //   '/euler': {
    //     target: 'http://10.233.28.82:9999',
    //     ws: true,
    //     changeOrigin: true,
    //   },
    // },
  },
  chainWebpack: (config) => {
    config.module
      .rule('sql')
      .test(/\.sql$/i)
      .use('sql-webpack-loader')
      .loader('sql-webpack-loader')
      .end();
  },
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        ROUTES: webpack.DefinePlugin.runtimeValue(() => {
          const tfPages = new TransformPages({
            includes: ['path', 'name', 'meta', 'aliasPath'],
          });
          return JSON.stringify(tfPages.routes);
        }, true),
      }),
      // new BundleAnalyzerPlugin(),
    ],
  },
};
