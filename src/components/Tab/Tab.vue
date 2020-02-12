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
  import {Component, Prop, Vue} from "vue-property-decorator"

  @Component
  export default class Tab extends Vue {
    @Prop(String) active!: string
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

    loadLine() {
      let line = this.$refs.line as HTMLSpanElement
      let headers = this.$refs.header as HTMLSpanElement[]
      line.style.width = `${headers[0].offsetWidth}px`
    }

    handleTagChange(index: number) {
      (this.$children[this.activeIndex] as any).visible = false
      let ele: any = this.$children[index]
      ele.visible = true
      this.activeIndex = index
      let line = this.$refs.line as HTMLSpanElement
      let headers = this.$refs.header as HTMLSpanElement[]
      line.style.width = `${headers[index].offsetWidth}px`
      line.style.transform = `translateX(${headers[index].offsetLeft}px)`
      this.$emit("tab-change", ele.index)
    }

    mounted() {
      this.init(this.active)
      setTimeout(() => {
        this.loadLine()
      }, 0)
    }
  }
</script>

<style scoped>
  .tabs {
    max-width: 800px;
    margin: 30px auto;
    border-radius: 4px;
    box-shadow: 0 0 4px 0px rgba(0, 0, 0, 0.3);
    padding: 15px;
  }

  .tabs .tab-header {
    display: flex;
    font-size: 13px;
    color: #303030;
    line-height: 2;
    font-weight: 500;
    border-bottom: 2px solid #ddd;
    position: relative;
  }

  .tabs .tab-header .line {
    position: absolute;
    height: 2px;
    bottom: 0;
    background: #409eff;
    transform: translateX(0);
    transition: all 0.3s;
    margin-bottom: -2px;
  }

  .tabs .tab-item {
    margin-right: 30px;
    cursor: pointer;
  }

  .tabs .tab-item:hover {
    color: #409eff;
  }

  .tabs .tab-item.active {
    color: #409eff;
  }
</style>
