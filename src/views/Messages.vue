<template>
  <div class="container">
    <Button @click="open1" type="success">成功按钮</Button>
    <Button @click="open2" type="info">信息按钮</Button>
    <Button @click="open3" type="warning">警告按钮</Button>
    <Button @click="open4" type="danger">危险按钮</Button>
  </div>
</template>

<script lang="ts">
  import Button from "../components/Button/Button.vue"
  import message from "../message"
  import {Component, Vue} from "vue-property-decorator"

  Vue.use(message)
  @Component({
    components: {Button},
  })
  export default class Messages extends Vue {
    open1() {
      this.$message({
        text: "成功消息"
      })
    }

    open2() {
      this.$message({
        type: "info",
        text: "通知消息"
      })
    }

    open3() {
      this.$message({
        type: "warning",
        text: "警告消息"
      })
    }

    open4() {
      this.$message({
        type: "danger",
        text: "危险消息"
      })
    }
  }
</script>

<style scoped>

</style>
