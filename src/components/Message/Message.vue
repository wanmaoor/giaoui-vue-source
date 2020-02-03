<!--suppress CssUnusedSymbol -->
<template>
  <div :class="messageStyle">{{text}}</div>
</template>

<script>
	export default {
		name: "Message",
		props: {
			text: {
				type: [String, Number],
				default: "",
			},
			type: {
				type: String,
				default: "success"
			}
		},
		data() {
			return {
				messageStyle: ["message"]
			}
		},
		mounted() {
			if (this.type) {
				this.messageStyle.push(`giao-${this.type}`)
			}
			setTimeout(() => {this.messageStyle.push("show")}, 0)
			setTimeout(() => {
				this.close()
			}, 3000)
		},
		methods: {
			close() {
				const index = this.messageStyle.findIndex((item) => item === "show")
				this.messageStyle.splice(index, 1)
				setTimeout(() => {
					this.$el.remove()
					this.$destroy()
				}, 400)
			}
		}
	}
</script>

<style scoped>
  .message {
    position: fixed;
    left: 50%;
    top: 10px;
    display: flex;
    align-items: center;
    transform: translate(-50%, -50px);
    padding: 10px 16px;
    font-size: 14px;
    color: #fff;
    border-radius: 4px;
    opacity: 0;
    transition: all .3s ease-in-out;
    z-index: 999;
  }

  .message.show {
    transform: translate(-50%, 10px);
    opacity: 1;
  }

  .message.giao-success {
    background-color: #67C23A;
  }

  .message.giao-warning {
    background-color: #E6A23C;
  }

  .message.giao-info {
    background-color: #909399;
  }

  .message.giao-danger {
    background-color: #F56C6C;
  }
</style>