import hljs from 'highlight.js';
import Setaria from 'setaria';
import Vue from 'vue';
import Framework from 'main/lib.js';
import commonStoreType from 'main/store/common/store-type.js';
import 'main-style/common/var.scss';
import 'main-style/index.scss';
import DemoBlock from './component/demo-block.vue';
import MainHeader from './component/header.vue';
import SideNav from './component/side-nav.vue';
import App from './App.vue';
import routes from './route.config';

import './demo-style/index.scss';
import './asset/style/common.scss';

const entry = {
  el: '#app',
  render: h => h(App),
  methods: {
    getCommonStoreType() {
      return commonStoreType;
    }
  }
}

// Sdk初始化
const config = {
  entry,
  http: {
  },
  routes: {
    mode: 'hash',
    base: '/',
    routes
  },
  message: {
    LY0001S: 'test<br/>test'
  },
};

Vue.component('main-header', MainHeader);
Vue.component('side-nav', SideNav);
Vue.component('demo-block', DemoBlock);

const sdk = new Framework(config, { env: process.env });

Vue.mixin(Framework.mixin);

Setaria.getRouter().afterEach(() => {
  // https://github.com/highlightjs/highlight.js/issues/909#issuecomment-131686186
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)');
    Array.prototype.forEach.call(blocks, hljs.highlightBlock);
  });
});
