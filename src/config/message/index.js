// [Module Prefix(MOD1, FI etc.)][Message Catagory(COM, BIZ)]XXX[Message Type(S, W, E, I)]
// Module Prefix:
//   MOD1 模块1
//   MOD2 模块2
// Message Catagory:
//   COM 模块内公共消息
//   BIZ 模块页面内独立消息
// Message Type:
//   S 成功
//   W 警告
//   E 错误
//   I 消息
export default {
  SYCOM001S: '{0}成功。',
  SYCOM002E: '{0}不能为空。',
  SYCOM003W: '是否确认保存?',
  SYCOM004E: 'Schema解析错误，请联系SAP开发人员。',
  SYCOM005E: '项目 {0} 格式化失败。',
  SYCOM006W: '请至少选择一条数据。',
  SYCOM007E: '第 {0} 行数据重复，请修改。',
  SYCOM008E: '不允许同时配置 {0} 与 {1}',
  SYCOM009E: '错误: {0}',
  SYCOM010S: 'Entity缓存已全部清空。',
  SYCOM011S: '附件 {0} 上传成功。',
  SYCOM012E: 'Schema内不存在设定的 {0} 的项目。',
  SYCOM013E: '文档服务信息: {0}',
  SYCOM014W: '目前处于编辑状态，是否确认返回？',
};
