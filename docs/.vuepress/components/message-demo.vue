<template>
  <div class="container">
    <Messages/>
  </div>
</template>

<script>
	import Messages from "../../../src/views/Messages"

	export default {
		name: "message-demo",
		components: {Messages}
	}
</script>

<style scoped>
  .container {
    padding: 10px 16px;
  }
</style>