## 安装

### yarn 安装

推荐使用 yarn 的方式安装，它能更好地和 [webpack](https://webpack.js.org/) 打包工具配合使用。

```shell
yarn add setaria-vue-component-library
```

### 业务工程中的框架引入

在 `main.js` 文件中，使用如下方式可引入本框架。

```javascript
import Framework from 'setaria-vue-component-library';
import Vue from 'vue';
import App from './App.vue';

const entry = {
  el: '#app',
  render: (h) => h(App),
};

const config = {
  // 业务工程配置
  entry,
  http: { ... },
  routes: { ... },
  message: { ... }
};

// 实例化项目Framework
// eslint-disable-next-line no-new
new Framework(config, { env: process.env });
// [optional]如有mixin
Vue.mixin(Framework.mixin);
```