<template>
  <div class="container">
    <div class="solidButton">
      <Button>默认按钮</Button>
      <Button type="primary">主要按钮</Button>
      <Button type="success">成功按钮</Button>
      <Button type="info">信息按钮</Button>
      <Button type="warning">警告按钮</Button>
      <Button type="danger">危险按钮</Button>
    </div>
  </div>
</template>

<script>
	import Button from "../components/Button/Button"

	export default {
		name: "Buttons",
		components: {Button}
	}
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
  }
</style>