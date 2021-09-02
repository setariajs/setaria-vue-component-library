/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
// webpack has been defined by vue-cli
// eslint-disable-next-line import/no-extraneous-dependencies
const webpack = require('webpack');
const package = require('./package.json');

const version = process.env.VERSION || package.version;
const {
  VUE_APP_ENTRY_PAGE_FILE,
} = process.env;

const webpackExternals = {
  'highlight.js': 'hljs',
  vue: {
    commonjs: 'vue',
    commonjs2: 'vue',
    amd: 'vue',
    root: 'Vue',
  },
  setaria: {
    commonjs: 'setaria',
    commonjs2: 'setaria',
    root: 'Setaria',
  },
  'setaria-ui': {
    commonjs: 'setaria-ui',
    commonjs2: 'setaria-ui',
    root: 'ELEMENT',
  },
};

const config = {
  publicPath: process.env.VUE_APP_CLIENT_BASE_URL,
  productionSourceMap: false,
  pages: {
    index: {
      entry: VUE_APP_ENTRY_PAGE_FILE,
    },
  },
  configureWebpack: {
    mode: 'development',
    externals: process.env.NODE_ENV === 'production' ? webpackExternals : {},
    resolve: {
      alias: {
        main: path.resolve(__dirname, './src'),
        'main-style': path.resolve(__dirname, './style'),
      },
    },
    module: {
      rules: [
        {
          test: /\.md$/,
          use: [
            {
              loader: 'vue-loader',
              options: {
                compilerOptions: {
                  preserveWhitespace: false,
                },
              },
            },
            {
              loader: path.resolve(__dirname, './build/md-loader/index.js'),
            },
          ],
        },
      ],
    },
    optimization: {
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            output: {
              comments: false,
            },
          },
        }),
      ],
    },
    performance: {
      hints: false,
    },
    stats: {
      children: false,
    },
    plugins: [
      new ProgressBarPlugin(),
    ],
  },
  chainWebpack: (webpackConfig) => {
    webpackConfig.plugin('define').tap((definitions) => {
      const defs = definitions;
      // eslint-disable-next-line no-underscore-dangle
      defs[0].__VERSION__ = `"${version}"`;
      return defs;
    });
  },
  devServer: {
    // 前端开发服务器端口号
    port: 8000,
    proxy: {},
  },
};

const {
  VUE_APP_SITE_ID,
  VUE_APP_API_BASE_URL,
  VUE_APP_SERVICE_HOST,
} = process.env;

const proxyPrefixUrl = `/${VUE_APP_SITE_ID}/${VUE_APP_API_BASE_URL}`;
config.devServer.proxy[proxyPrefixUrl] = {
  pathRewrite: {
    [proxyPrefixUrl]: '',
  },
  // 远程服务地址
  target: VUE_APP_SERVICE_HOST,
  secure: false,
  changeOrigin: true,
};

module.exports = config;
