<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
	export default {
		name: "Collapse",
		props: ["activeItem"],
		provide() {
			return {
				activeItem: this.activeItem,
			}
		}
	}
</script>

<style scoped>
  .collapse {
    font-size: 13px;
  }
</style>