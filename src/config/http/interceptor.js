/**
 * 服务拦截器设置，可在此文件内定义服务的公共拦截器逻辑
 */

function getInterceptor(env) {
  return {
    interceptor: {
      request: [
      ],
      response: [
      ],
    },
  };
}

export default {
  getInterceptor,
};
