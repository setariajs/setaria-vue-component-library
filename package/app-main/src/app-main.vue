<template>
  <el-main>
    <router-view></router-view>
  </el-main>
</template>
<script>
import _ from 'lodash';
import { constants } from 'setaria';
import { Loading } from 'setaria-ui';
import Vue from 'vue';

let loadingInstance;

export default Vue.extend({
  name: 'SvcMain',
  computed: {
    loadingState() {
      return _.get(this.$store, 'getters')[constants.STORE_KEY.GET_IS_LOADING];
    },
  },
  watch: {
    loadingState: {
      immediate: true,
      handler(val) {
        const loadingText = _.get(this, ['$env', 'VUE_APP_SERVICE_LOADING_TEXT'], '加载中');
        if (val) {
          loadingInstance = Loading.service({
            fullscreen: true,
            text: loadingText,
          });
        } else {
          this.$nextTick(() => {
            if (loadingInstance) {
              loadingInstance.close();
            }
          });
        }
      },
    },
  },
});
</script>
