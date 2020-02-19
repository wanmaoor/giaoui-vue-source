<template>
  <div class="dialog">
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
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator"

  @Component
  export default class Dialog extends Vue {

  }
</script>

<style lang="scss" scoped>
  .dialog {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, .3);
    display: flex;
    justify-content: center;
    align-items: center;

    .main {
      width: 60%;
      background: #fff;
      margin: 0 auto;
      padding: 16px;
      border-radius: 6px;
      box-shadow: 0 0 4px 0 rgba(0, 0, 0, .3);
    }

    .header {
      font-size: 18px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
