<template>
  <Carousel>
    <CarouselItem :key="index" v-for="(item, index) in 4">{{item}}</CarouselItem>
  </Carousel>
</template>

<script>
	import Carousel from "../components/Carousel/Carousel"
	import CarouselItem from "../components/Carousel/CarouselItem"

	export default {
		name: "Carousels",
		components: {CarouselItem, Carousel}
	}
</script>

<style scoped>

</style>
