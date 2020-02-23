<template>
  <div class="container">
    <Carousel type="zoom">
      <CarouselItem :key="index" v-for="(item, index) in 4">{{item}}</CarouselItem>
    </Carousel>
  </div>
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
  .container {
    padding: 10px 16px;
    max-width: 800px;
    margin: 30px auto;
    border-radius: 4px;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
  }
</style>
