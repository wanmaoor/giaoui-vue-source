<template>
  <div>
    <Button type="primary">打开Dialog</Button>
    <Dialog/>
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
