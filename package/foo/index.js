import Foo from './src/foo.vue';

/* istanbul ignore next */
Foo.install = function install(Vue) {
  Vue.component(Foo.options.name, Foo);
};

export default Foo;
