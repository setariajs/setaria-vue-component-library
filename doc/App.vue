<template>
  <div id="app" :class="{ 'is-component': isComponent }">
    <main-header></main-header>
    <div class="main-cnt">
      <router-view></router-view>
    </div>
    <!-- <main-footer></main-footer> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'app',

  computed: {
    isComponent() {
      return this.$route && /^component-/.test(this.$route.name || '');
    },
  },
});
</script>
