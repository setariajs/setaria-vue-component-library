import _ from 'lodash';
import { constants } from 'setaria';
import { Message } from 'setaria-ui';
import http from './http';
import httpInterceptor from './http/interceptor';
import message from './message';
import route from './route';
import store from '../store';
import storeType from '../store/store-type';

function createHttpInterceptor(opts) {
  return httpInterceptor.getInterceptor(opts.env);
}

function createHttpConfig(val = {}, interceptor, opts) {
  const defaultHttp = http.getCommonHttpConfig(opts.env, interceptor);
  Object.keys(val).forEach((key) => {
    const temp = val[key];
    if (_.isEmpty(temp.interceptor)) {
      temp.interceptor = { ...interceptor.interceptor };
    }
    return temp;
  });
  return _.assign({}, defaultHttp, val);
}

function createRouteConfig(val) {
  return _.assign({}, route, val);
}

function createStoreConfig(val) {
  return _.assign({}, store, val);
}

function createMessageConfig(val) {
  return _.assign({}, message, val);
}

function errorHandler(error, type) {
  const { errorCode, errorMessage } = error;
  const messageType = constants.MESSAGE_TYPE.ERROR;
  // 生产环境不提示客户端错误
  if (process.env.NODE_ENV === 'production') {
    if ((errorCode && errorCode === 'SYSMSG-CLIENT-UNKNOWN-ERROR')
      || (errorMessage && errorMessage.indexOf('SYSMSG-CLIENT-UNKNOWN-ERROR') !== -1)) {
      return;
    }
    // 忽略window.onerror错误
    if (type === constants.ERROR_THROW_TYPES.NORMAL_ERROR) {
      return;
    }
  }
  Message({
    type: messageType,
    message: `${errorCode ? `[${errorCode}] ` : ''}${errorMessage}`,
  });
}

export function createConfig(val, opts) {
  const frameworkConfig = val;
  const interceptor = createHttpInterceptor(opts);
  frameworkConfig.http = createHttpConfig(val.http, interceptor, opts);
  frameworkConfig.routes = createRouteConfig(val.routes);
  frameworkConfig.store = createStoreConfig(val.store);
  frameworkConfig.message = createMessageConfig(val.message);
  frameworkConfig.storeType = storeType;
  frameworkConfig.errorHandler = typeof val.errorHandler === 'function' ? val.errorHandler : errorHandler;
  if (val.schema) {
    frameworkConfig.getInitialState = ({ store: sdkStore }) => {
      const promise = new Promise((resolve) => {
        console.log('初始化数据加载');
        resolve({});
      });
      return promise;
    };
  }
  return frameworkConfig;
}

export default {};
