<template>
  <div class="container">
    <Button @click="open1" type="success">成功按钮</Button>
    <Button @click="open2" type="info">信息按钮</Button>
    <Button @click="open3" type="warning">警告按钮</Button>
    <Button @click="open4" type="danger">危险按钮</Button>
  </div>
</template>

<script>
	import Button from "../components/Button/Button"
	import message from "../message"
	import Vue from "vue"

	Vue.use(message)
	export default {
		name: "Messages",
		components: {Button},
		methods: {
			open1() {
				this.$message({
					text: "成功消息"
				})
			},
			open2() {
				this.$message({
					type: "info",
					text: "通知消息"
				})
			},
			open3() {
				this.$message({
					type: "warning",
					text: "警告消息"
				})
			},
			open4() {
				this.$message({
					type: "danger",
					text: "危险消息"
				})
			},
		}
	}
</script>

<style scoped>

</style>