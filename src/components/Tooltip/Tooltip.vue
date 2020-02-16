<template>
  <div
    @mouseenter="handleToggle"
    @mouseleave="handleToggle"
    class="giao-container"
  >
    <slot/>
    <div
      :class="['tooltip', placement]"
      v-show="isVisible"
    >
      {{content}}
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from "vue-property-decorator"

  @Component
  export default class Tooltip extends Vue {
    @Prop({default: "top"}) placement!: "top" | "bottom" | "left" | "right"
    @Prop(String) content!: string
    isVisible = true

    handleToggle() {
      // this.isVisible = !this.isVisible
    }
  }
</script>

<style lang="scss" scoped>
  .giao-container {
    display: inline-block;
    border: 1px solid #000;
    position: relative;
  }

  .tooltip {
    padding: 5px 10px;
    background: black;
    color: white;
    position: absolute;
    white-space: nowrap;
    z-index: 10;
    border-radius: 4px;

    &::before {
      content: '';
      width: 0;
      height: 0;
      position: absolute;
      border: 6px solid transparent;
    }

    &.top {
      bottom: calc(100% + 10px);
      left: 50%;
      transform: translateX(-50%);

      &::before {
        border-top-color: #303030;
        transform: translateX(-50%);
        top: 100%;
        left: 50%;
      }
    }

    &.bottom {
      top: calc(100% + 10px);
      left: 50%;
      transform: translateX(-50%);

      &::before {
        border-bottom-color: #303030;
        transform: translateX(-50%);
        bottom: 100%;
        left: 50%
      }
    }

  }
</style>
