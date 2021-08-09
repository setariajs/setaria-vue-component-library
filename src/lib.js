import _ from 'lodash';
import Setaria from 'setaria';
import Vue from 'vue';
import AppMain from '../package/app-main';
import { install } from './install';
import { createConfig } from './config';
import constant from './constant';
import mixin from './mixin';
import storeType from './store/store-type';
import util from './util';

let config = null;
class Framework extends Setaria{
  constructor (options = {}, opts) {
    const businessConfig = options;
    // 生成Setaria设置项
    config = createConfig(businessConfig, opts)
    // Sdk初始化
    super(businessConfig);
    // 初始化依赖
    Vue.use(Framework, _.assign({}, config, opts));
  }
}
// 挂载定值
Framework.version = __VERSION__;
Framework.install = install(Framework);
Framework.constant = constant;
Framework.mixin = mixin;
Framework.storeType = storeType;
Framework.util = util;
// UI组件
Framework.AppMain = AppMain;

if (window) {
  console.log('Framework版本：', Framework.version);
}

export default Framework;
