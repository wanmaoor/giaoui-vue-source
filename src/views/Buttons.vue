<template>
  <div class="container">
    <div class="buttonGroup">
      <Button @click="handleClick">默认按钮</Button>
      <Button type="primary">主要按钮</Button>
      <Button type="success">成功按钮</Button>
      <Button type="info">信息按钮</Button>
      <Button type="warning">警告按钮</Button>
      <Button type="danger">危险按钮</Button>
    </div>
    <div class="buttonGroup">
      <Button plain>朴素按钮</Button>
      <Button plain type="primary">主要按钮</Button>
      <Button plain type="success">成功按钮</Button>
      <Button plain type="info">信息按钮</Button>
      <Button plain type="warning">警告按钮</Button>
      <Button plain type="danger">危险按钮</Button>
    </div>
    <div class="buttonGroup">
      <Button @click="handleClick" disabled>禁用按钮</Button>
      <Button disabled type="primary">主要按钮</Button>
      <Button disabled type="success">成功按钮</Button>
      <Button disabled type="info">信息按钮</Button>
      <Button disabled type="warning">警告按钮</Button>
      <Button disabled type="danger">危险按钮</Button>
    </div>
    <div class="buttonGroup">
      <Button round>圆角按钮</Button>
      <Button round type="primary">主要按钮</Button>
      <Button round type="success">成功按钮</Button>
      <Button round type="info">信息按钮</Button>
      <Button round type="warning">警告按钮</Button>
      <Button round type="danger">危险按钮</Button>
    </div>

  </div>
</template>

<script>
	import Button from "../components/Button/Button"

	export default {
		name: "Buttons",
		components: {Button},
		methods: {
			handleClick(e) {
				console.log(e)
			}
		}
	}
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
  }

  .buttonGroup {
    padding-top: 10px;
  }
</style>