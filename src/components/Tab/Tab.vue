<template>
  <div class="tabs">
    <div class="tab-header">
      <span
        :class="['tab-item', {active: activeIndex === index}]"
        :key="tab"
        @click.stop="handleTagChange(index)"
        ref="header"
        v-for="(tab, index) in tabs"
        v-html="tab"
      />
      <span class="line" ref="line"></span>
    </div>
    <div class="tab-content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Ref, Vue} from "vue-property-decorator"

  @Component
  export default class Tab extends Vue {
    @Prop(String) active!: string
    @Ref() line!: HTMLSpanElement
    @Ref("header") headers!: HTMLSpanElement[]
    tabs: string[] = []
    activeIndex: number = 0

    init(activeName: string) {
      this.$children.forEach((ele: any, index: number) => {
        this.tabs.push(ele.label)
        if (activeName === ele.index) {
          ele.visible = true
          this.activeIndex = index
        } else {
          ele.visible = false
        }
      })
    }

    loadLine(index: number) {
      this.line.style.width = `${this.headers[index].offsetWidth}px`
      this.line.style.transform = `translateX(${this.headers[index].offsetLeft}px)`
    }

    handleTagChange(index: number) {
      (this.$children[this.activeIndex] as any).visible = false
      let ele: any = this.$children[index]
      ele.visible = true
      this.activeIndex = index
      this.loadLine(index)
      this.$emit("tab-change", ele.index)
    }

    mounted() {
      this.init(this.active)
      setTimeout(() => {
        this.loadLine(0)
      }, 0)
    }
  }
</script>

<style lang="scss" scoped>
  $blue: #409eff;

  .tab-header {
    display: flex;
    font-size: 13px;
    color: #303030;
    line-height: 2;
    font-weight: 500;
    border-bottom: 2px solid #ddd;
    position: relative;

    .line {
      position: absolute;
      height: 2px;
      bottom: 0;
      background: $blue;
      transform: translateX(0);
      transition: all 0.3s;
      margin-bottom: -2px;
    }

  }

  .tab-item {
    margin-right: 30px;
    cursor: pointer;

    &:hover {
      color: $blue;
    }

    &.active {
      color: $blue;
    }
  }

</style>
