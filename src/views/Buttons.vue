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
    <div class="plainButton">
      <Button plain>朴素按钮</Button>
      <Button plain type="primary">主要按钮</Button>
      <Button plain type="success">成功按钮</Button>
      <Button plain type="info">信息按钮</Button>
      <Button plain type="warning">警告按钮</Button>
      <Button plain type="danger">危险按钮</Button>
    </div>
  </div>
</template>

<script>
	import Button from "../components/Button/Button"

	export default {
		name: "Buttons",
		components: {Button},

	}
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
  }

  .plainButton {
    padding-top: 10px;
  }
</style>