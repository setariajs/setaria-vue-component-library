/* eslint-disable @typescript-eslint/no-var-requires */
const _ = require('lodash');
const path = require('path');

function createVueConfig(env, customConfig = {}) {
  const {
    VUE_APP_SITE_ID,
    VUE_APP_CLIENT_BASE_URL,
    VUE_APP_CLIENT_MODULE_BASE_URL,
    VUE_APP_SYSTEM_MODE,
  } = env;
  return _.merge({
    publicPath: `/${VUE_APP_SITE_ID}/${VUE_APP_CLIENT_BASE_URL}/${VUE_APP_CLIENT_MODULE_BASE_URL}`,
    lintOnSave: true,
    productionSourceMap: false,
    pages: {
      index: env.VUE_APP_ENTRY_PAGE_FILE || 'src/main.js',
    },
    chainWebpack: (webpackConfig) => {
      webpackConfig.optimization.minimizer('terser').tap((args) => {
        const argumentArray = args;
        if (VUE_APP_SYSTEM_MODE === 'production') {
          argumentArray[0].terserOptions.compress.drop_console = true;
        }
        return argumentArray;
      });
    },
    configureWebpack: {
      devtool: env.NODE_ENV === 'production' ? false : 'eval-source-map',
      entry: {
        // framework: ['setaria'],
        vendors: ['vue', 'vuex', 'vue-router', 'moment', 'numeral', 'ramda'],
      },
      optimization: {
        splitChunks: {
          cacheGroups: {
            framework: {
              chunks: 'async',
              minChunks: 2,
              maxInitialRequests: 5,
              minSize: 0,
              name: 'framework',
            },
            vendors: {
              chunks: 'async',
              minChunks: 2,
              maxInitialRequests: 5,
              minSize: 0,
              name: 'vendors',
            },
          },
        },
      },
    },
    devServer: {
      // 前端开发服务器端口号
      port: 7001,
      // 远程服务代理设置
      proxy: {},
    },
  }, customConfig);
}
module.exports = createVueConfig;
