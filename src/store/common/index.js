import _ from 'lodash';
import {
  NAME,
  GETTER,
  MUTATION,
  ACTION,
} from './store-type';

export default {
  name: NAME,
  namespaced: true,
  state: {
    foo: 'bar',
  },
  getters: {
    [GETTER.GET_FOO]: (state) => state.foo,
  },
  mutations: {
    [MUTATION.COMMIT_FOO](state, payload) {
      const s = state;
      s.foo = payload;
    },
  },
  actions: {
    async [ACTION.DISPATCH_FOO](context, payload) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(payload);
        }, 0);
      });
    },
  },
};
