import Setaria from 'setaria';
import SetariaUI from 'setaria-ui';
import locale from 'setaria-ui/lib/locale/lang/zh-CN';
import Foo from '../package/foo';

const components = [
  Foo,
];

export function install(Framework) {
  return (Vue, opts) => {
    // 初始化Setaria SDK
    Vue.use(Setaria, opts);
    // 使用中文语言初始化Setaria UI
    Vue.use(SetariaUI, {
      locale,
      size: 'small',
    });

    // 初始化组件
    components.forEach((component) => {
      Vue.component(component.options.name, component);
    });
    // eslint-disable-next-line no-param-reassign
    Vue.prototype.$env = opts.env;
  };
}

export default {};
