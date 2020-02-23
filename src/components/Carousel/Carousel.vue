<template>
  <div class="carousel">
    <div class="panels" ref="panels">
      <slot></slot>
    </div>
    <div class="arrows">
      <button class="arrow arrow-prev"></button>
      <button class="arrow arrow-next"></button>
    </div>
    <div class="indicators" ref="indicators">
      <span :key="index" v-for="(indicator, index) in indicatorCounts"></span>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue, Ref} from "vue-property-decorator"

  @Component
  export default class Carousel extends Vue {
    indicatorCounts = 0
    @Ref() readonly panels!: HTMLDivElement
    @Ref() readonly indicators!: HTMLDivElement

    mounted() {
      this.indicatorCounts = this.$slots.default!.length

    }
  }
</script>

<style lang="scss" scoped>
  @mixin flexCenter {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @mixin hoverButton {
    transform: translateX(0) translateY(-50%);
    opacity: 1;
  }

  .carousel {
    position: relative;
    height: 200px;
    overflow: hidden;

    .panels > a {
      position: absolute;
      width: 100%;
      height: 100%;
      text-decoration: none;
      z-index: 1;
      @include flexCenter;

      &.active {
        z-index: 10;
      }

      &:nth-child(even) {
        background-color: lightskyblue;
      }

      &:nth-child(odd) {
        background-color: lightpink;
      }
    }

    .arrow {
      position: absolute;
      border: none;
      border-radius: 50%;
      width: 32px;
      height: 32px;
      background: rgba(31, 45, 61, .11);
      top: 50%;
      outline: none;
      cursor: pointer;
      z-index: 20;
      @include flexCenter;

      &::before {
        content: '';
        display: block;
        width: 8px;
        height: 8px;
        border-left: 1px solid #fff;
        border-top: 1px solid #ffffff;
        transform: rotate(-45deg);
      }

      &.arrow-next::before {
        transform: rotate(135deg);
      }
    }

    .arrow-prev {
      left: 10px;
      transform: translateX(-10px) translateY(-50%);
      opacity: 0;
      transition: all .3s;
    }

    &:hover .arrow-prev {
      @include hoverButton;
    }

    .arrow-next {
      right: 10px;
      transform: translateX(10px) translateY(-50%);
      opacity: 0;
      transition: all .3s;
    }

    &:hover .arrow-next {
      @include hoverButton
    }

    .indicators {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 10px;
      list-style: none;
      margin: 0;
      padding: 0;
      z-index: 20;

      span {
        display: inline-block;
        margin: 0 5px;
        cursor: pointer;

        &::before {
          content: '';
          display: block;
          width: 40px;
          height: 2px;
          background: #c0c4cc;
          border-radius: 2px;
          transition: all .3s;
        }

        &.active::before {
          background: #ffffff;
        }
      }
    }
  }
</style>
