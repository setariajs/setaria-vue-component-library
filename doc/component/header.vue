<style lang="scss" scoped>
  .headerWrapper {
    height: 50px;
  }

  .header {
    height: 50px;
    background-color: #fff;
    color: #fff;
    top: 0;
    left: 0;
    width: 100%;
    line-height: 50px;
    z-index: 100;
    position: relative;

    .container {
      height: 100%;
      box-sizing: border-box;
      border-bottom: 1px solid #DCDFE6;
    }

    h1 {
      margin: 0;
      float: left;
      font-size: 22px;
      font-weight: normal;
      margin-left: 50px;

      a {
        color: #333;
        text-decoration: none;
        display: block;
      }

      span {
        font-size: 12px;
        display: inline-block;
        width: 34px;
        height: 18px;
        border: 1px solid rgba(255, 255, 255, .5);
        text-align: center;
        line-height: 18px;
        vertical-align: middle;
        margin-left: 10px;
        border-radius: 3px;
      }
    }

    .nav {
      float: right;
      height: 100%;
      line-height: 50px;
      background: transparent;
      padding: 0;
      margin: 0 50px 0 0;
      &::before, &::after {
        display: table;
        content: "";
      }
      &::after {
        clear: both;
      }
    }

    .nav-item {
      margin: 0;
      float: left;
      list-style: none;
      position: relative;
      cursor: pointer;

      &:last-child {
        cursor: default;
        margin-left: 34px;

        span {
          opacity: .8;
        }
      }

      a {
        text-decoration: none;
        color: #1989FA;
        opacity: 0.5;
        display: block;
        padding: 0 22px;

        &.active,
        &:hover {
          opacity: 1;
        }

        &.active::after {
          content: '';
          display: inline-block;
          position: absolute;
          bottom: 0;
          left: calc(50% - 15px);
          width: 30px;
          height: 2px;
          background: #409EFF;
        }
      }
    }
  }

  .system-title {
    display: inline-block;
    color: #000;
    height: 50px;
    line-height: 50px;
  }

  .nav-version {
    margin-bottom: 6px;
    padding-left: 18px;
    width: 100%;
    color: #000;
  }

  @media (max-width: 850px) {
    .header {
      .nav-logo {
        display: none;
      }
      .nav-logo-small {
        display: inline-block;
      }
      .nav-item {
        margin-left: 6px;

        &:last-child {
          margin-left: 10px;
        }

        a {
          padding: 0 5px;
        }
      }
      .nav-theme-switch {
        display: none;
      }
    }
  }

  @media (max-width: 700px) {
    .header {
      .container {
        padding: 0 12px;
      }
      .nav-item {
        a {
          font-size: 12px;
          vertical-align: top;
        }
      }
      .nav-versions {
        display: none;
      }
    }
  }
</style>
<template>
  <div class="headerWrapper">
    <header class="header" ref="header">
      <div class="container">
        <h1 class="system-title">{{ systemTitle }}</h1>

        <!-- nav -->
        <ul class="nav">
          <!-- 版本选择器 -->
          <li class="nav-item nav-versions" v-show="isComponentPage">
            <span class="nav-version">
              版本: {{ version }}
            </span>
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>
<script>
  import BaseComponent from 'main/lib.js';

  const { version } = BaseComponent;

  export default {
    name: 'MainHeader',
    data() {
      return {
        systemTitle: process.env.VUE_APP_TITLE,
        active: '',
        versions: [],
        version,
      };
    },

    mixins: [],

    components: {
    },

    computed: {
      isComponentPage() {
        return /^component/.test(this.$route.name);
      }
    },
    mounted() {
    },
    methods: {
    },

    created() {
    }
  };
</script>
