## Foo 示例

组件描述。

### 基本用法

示例描述。

:::demo
```html
<template>
  <div>
    <svc-foo></svc-foo>
    <div>StoreValue: {{ storeVal }}</div>
  </div>
</template>
<script>
  export default {
    computed: {
      storeVal() {
        const { GETTER } = this.$root.getCommonStoreType();
        return this.$store.getters[GETTER.GET_FOO];
      }
    },
    created() {
      console.log('组件初始化');
    }
  }
</script>
```
:::

### 属性


| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |

### 插槽

| 名称 | 描述 |
|------|--------|

### 事件


| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
