<!--suppress CssUnusedSymbol -->
<template>
  <div :class="messageStyle">{{text}}</div>
</template>

<script>
	export default {
		name: "Message",
		props: {
			text: {
				type: String,
				default: ""
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
				this.messageStyle.push(this.type)
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
    transition: all .3s;
  }

  .message.show {
    transform: translate(-50%, 10px);
    opacity: 1;
  }

  .message.success {
    background-color: #67C23A;
  }

  .message.warning {
    background-color: #E6A23C;
  }

  .message.info {
    background-color: #909399;
  }

  .message.danger {
    background-color: #F56C6C;
  }
</style>