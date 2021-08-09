/* eslint-disable */
import navConfig from './nav.config.json';

const LOAD_MAP = (name) => {
  return (r) => require.ensure([], () => r(require(`./page/${name}.vue`)), 'zh-CN');
};

function load(path) {
  return LOAD_MAP(path);
}

const LOAD_EXAMPLES_MAP = (path) => {
  return (r) => require.ensure([], () => r(require(`./demo/${path.slice(1)}.md`)), 'zh-CN');
};

function loadDocs(path) {
  return LOAD_EXAMPLES_MAP(path);
}

const registerRoute = (routeNavConfig) => {
  const route = [
    {
      path: `/component`,
      redirect: `/component/installation`,
      component: load('component'),
      children: [],
    }
  ];
  routeNavConfig.forEach((nav) => {
    if (nav.href) return;
    if (nav.groups) {
      nav.groups.forEach((group) => {
        group.list.forEach((nav) => {
          addRoute(nav);
        });
      });
    } else if (nav.children) {
      nav.children.forEach((nav) => {
        addRoute(nav);
      });
    } else {
      addRoute(nav);
    }
  });
  function addRoute(page) {
    const component =
      page.path === '/changelog' ? load('changelog') : loadDocs(page.path);
    let child = {
      path: page.path.slice(1),
      meta: {
        title: page.title || page.name,
        description: page.description,
        module:page.meta?page.meta.module:null,
        subModule:page.meta?page.meta.subModule:null
      },
      name: 'component-' + (page.title || page.name),
      component: component.default || component,
    };

    route[0].children.push(child);
  }
  return route;
};

let route = registerRoute(navConfig);

const defaultPath = '/component/installation';

route = route.concat([
  {
    path: '/',
    redirect: defaultPath,
  },
]);

export default route;
