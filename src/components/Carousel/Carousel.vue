<template>
  <div class="carousel">
    <slot></slot>
    <div class="arrows">
      <button class="arrow arrow-prev"></button>
      <button class="arrow arrow-next"></button>
    </div>
    <div class="indicators">

    </div>
  </div>
</template>

<script>
	export default {
		name: "Carousel"
	}
</script>

<style scoped>

</style>
