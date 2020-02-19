<template>
  <div>
    <Button type="primary">打开Dialog</Button>
    <Dialog>
      <span>这是一段信息</span>
    </Dialog>
  </div>
</template>

<script>
	import Dialog from "../components/Dialog/Dialog.vue"
	import Button from "../components/Button/Button.vue"

	export default {
		name: "Dialogs",
		components: {Dialog, Button}
	}
</script>

<style scoped>

</style>
