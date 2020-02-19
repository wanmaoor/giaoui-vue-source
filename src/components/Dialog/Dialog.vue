<template>
  <div class="main">
    <div class="header">
      提示
      <button class="close">关闭</button>
    </div>
    <div class="content">
      <slot/>
    </div>
    <div class="footer">
      <button class="cancel">取消</button>
      <button class="primary">确定</button>
    </div>
  </div>
</template>

<script lang="ts">
  import {Vue, Component} from "vue-property-decorator"

  @Component
  export default class Dialog extends Vue {

  }
</script>

<style scoped>

</style>
