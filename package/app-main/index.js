import AppMain from './src/app-main.vue';

/* istanbul ignore next */
AppMain.install = function install(Vue) {
  Vue.component(AppMain.options.name, AppMain);
};

export default AppMain;
