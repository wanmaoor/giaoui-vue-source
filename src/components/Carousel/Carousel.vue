<template>
  <div class="carousel">
    <slot></slot>
    <div class="arrows">
      <button class="arrow arrow-prev"></button>
      <button class="arrow arrow-next"></button>
    </div>
    <div class="indicators">
      <span :key="index" v-for="(indicator, index) in indicatorCounts">1</span>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator"

  @Component
  export default class Carousel extends Vue {
    indicatorCounts = 0

    mounted() {
      this.indicatorCounts = this.$slots.default!.length
    }
  }
</script>

<style scoped>

</style>
