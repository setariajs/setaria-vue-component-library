import _ from 'lodash';
import { ServiceError } from 'setaria';

function getCommonHttpConfig(env, interceptor) {
  const {
    VUE_APP_SITE_ID,
    VUE_APP_API_BASE_URL,
    VUE_APP_DOC_API_URL,
    VUE_APP_MINGYUAN_API_URL,
  } = env;
  const gatewayUrl = `/${VUE_APP_SITE_ID}/${VUE_APP_API_BASE_URL}`;

  // 业务服务默认设置
  const businessHttpConfig = {
    baseURL: gatewayUrl,
    ...interceptor,
  };

  return {
    defaults: {
      // 默认超时时间
      timeout: 60000,
      // 是否默认显示全局loading
      showLoading: false,
      // 服务根url
      baseURL: gatewayUrl,
    },
    // 业务服务
    sys: {
      ...businessHttpConfig,
    },
  };
}

export default {
  getCommonHttpConfig,
};
