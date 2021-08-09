import { MODULE } from '@/constant';
// 模块名称
export const NAME = MODULE.COMMON;
// GETTER名称
export const GETTER = {
  GET_FOO: 'getFoo',
};
// MUTATION名称
export const MUTATION = {
  COMMIT_FOO: 'commitFoo',
};
// ACTION名称
export const ACTION = {
  DISPATCH_FOO: 'dispatchFoo',
};
export const COMMON = {
  NAME,
  // 注册的key，因module的namespace为true，因此需要包含父module的name
  GETTER: {
    GET_FOO: `${NAME}/${GETTER.GET_FOO}`,
  },
  MUTATION: {
    COMMIT_FOO: `${NAME}/${MUTATION.COMMIT_FOO}`,
  },
  ACTION: {
    DISPATCH_FOO: `${NAME}/${ACTION.DISPATCH_FOO}`,
  },
};

export default COMMON;
