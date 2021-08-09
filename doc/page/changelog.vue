<style lang="scss">
  .page-changelog {
    padding-bottom: 100px;

    .heading {
      font-size: 24px;
      margin-bottom: 20px;
      color: #333;
    }

    .timeline {
      padding: 0;
      padding-bottom: 10px;
      position: relative;
      color: #5e6d82;

      > li {
        position: relative;
        padding-bottom: 15px;
        list-style: none;
        line-height: 1.8;
        border: 1px solid #ddd;
        border-radius: 4px;

        &:not(:last-child) {
          margin-bottom: 50px;
        }
      }

      ul {
        padding: 15px 10px 5px;

        ul {
          padding: 5px 0 0 35px;

          li {
            padding-left: 0;
            color: #555;
            word-break: normal;
          }

          li::before {
            content: '';
            circle: 4px #fff;
            border: solid 1px #333;
            margin-right: -12px;
            display: inline-block;
            vertical-align: middle;
          }
        }
      }

      li li {
        font-size: 16px;
        list-style: none;
        padding-left: 30px;
        padding-bottom: 5px;
        color: #333;
        word-break: break-all;

        p {
          font-size: 16px;
        }

        &:before {
          circle: 6px #333;
          transform: translateX(-20px);
          display: inline-block;
          vertical-align: middle;
        }
      }

      i {
        padding: 0 20px;
        display: inline-block;
      }

      h3 {
        margin:0;
        padding: 10px 20px;
        border-bottom: 1px solid #ddd;
        font-size: 20px;
        color: #333;
        font-weight: bold;

        a {
          opacity: 1;
          font-size: 20px;
          float: none;
          margin-left: 0;
          color: #333;
        }
      }

      h4 {
        margin: 0;
        margin-bottom: -10px;
        font-size: 18px;
        padding-left: 21px;
        padding-top: 15px;
        font-weight: bold;
      }

      p {
        margin: 0;
      }

      em {
        position: absolute;
        right: 30px;
        font-style: normal;
        top: 15px;
        font-size: 16px;
        color: #666;
      }
    }
  }
</style>
<template>
  <div class="page-changelog">
    <div class="heading">
      更新日志
    </div>
    <ul class="timeline" ref="timeline">
    </ul>
    <change-log ref="changeLog"></change-log>
  </div>
</template>
<script>
  import ChangeLog from '../../CHANGELOG.md';

  export default {
    components: {
      ChangeLog
    },
    data() {
      return {
        count: 3
      };
    },
    mounted() {
      const changeLog = this.$refs.changeLog;
      const changeLogNodes = changeLog.$el.children;
      let a = changeLogNodes[1].querySelector('a');
      a && a.remove();
      let release = changeLogNodes[1].textContent.trim();
      let fragments = `<li><h3>${release}</h3>`;

      for (let len = changeLogNodes.length, i = 2; i < len; i++) {
        let node = changeLogNodes[i];
        a = changeLogNodes[i].querySelector('a');
        a && a.getAttribute('class') === 'header-anchor' && a.remove();
        if (node.tagName !== 'H3') {
          fragments += changeLogNodes[i].outerHTML;
        } else {
          release = changeLogNodes[i].textContent.trim();
          fragments += `</li><li><h3>${release}</h3>`;
        }
      }
      this.$refs.timeline.innerHTML = `${fragments}</li>`;

      changeLog.$el.remove();
    }
  };
</script>
