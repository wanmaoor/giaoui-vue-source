<template>
  <div @click="handleClick" class="item" ref="item">
    <div class="item-header">{{header}}</div>
    <div class="item-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
	export default {
		name: "Collapse-Item",
		props: ["header", "name"],
		methods: {
			handleClick() {
				for (let child of this.$refs.item.parentElement.children) {
					child.classList.remove("active")
				}
				this.$refs.item.classList.add("active")
			}
		},
		inject: ["activeItem"],
		mounted() {
			if (this.name === this.activeItem.toString()) {
				this.$refs.item.classList.add("active")
			}
		}
	}
</script>

<style scoped>
  .item {
    border-top: 1px solid #dddddd;
  }

  .item:last-child {
    border-bottom: 1px solid #dddddd;
  }

  .item-header {
    color: #303030;
    font-weight: 500;
    line-height: 40px;
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .item-header::after {
    content: '';
    display: block;
    width: 6px;
    height: 6px;
    border-top: 1px solid #303030;
    border-right: 1px solid #303030;
    margin-left: auto;
    transform: rotate(45deg);
    transition: all .4s ease;
  }

  .item.active .item-header::after {
    transform: rotate(135deg);
  }

  .item-content {
    font-size: 14px;
    color: #666;
    height: 0;
    overflow: hidden;
    transition: all .4s ease-in;
  }

  .item.active .item-content {
    height: auto;
    padding-bottom: 16px;
  }
</style>