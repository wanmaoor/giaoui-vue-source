<template>
  <button :class="buttonStyle">
    <slot>{{"加载失败"}}</slot>
  </button>
</template>

<script>
	export default {
		name: "Button",
		props: {
			type: String,
		},
		data() {
			return {
				buttonStyle: ["button"]
			}
		},
		mounted() {
			switch (this.type) {
				case "primary":
					this.buttonStyle.push("primary")
					break
				case "success":
					this.buttonStyle.push("success")
					break
				case "info":
					this.buttonStyle.push("info")
					break
				case "warning":
					this.buttonStyle.push("warning")
					break
				case "danger":
					this.buttonStyle.push("danger")
					break
				case undefined:
					break
				default:
					console.error("invalid type input")
			}
		}
	}
</script>

<style scoped>
  /* DEFAULT STYLE */
  .button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    transition: .1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    margin-left: 10px;
  }

  .button:focus, .button:hover {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }

  /* PRIMARY STYLE */
  .primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
  }

  .primary:focus, .primary:hover {
    background: #66b1ff;
    border-color: #66b1ff;
    color: #fff;
  }

  /* SUCCESS STYLE */
  .success {
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;
  }

  .success:focus, .success:hover {
    background: #85ce61;
    border-color: #85ce61;
    color: #fff;
  }

  /*  INFO STYLE */
  .info {
    color: #fff;
    background-color: #909399;
    border-color: #909399;
  }

  .info:focus, .info:hover {
    background: #a6a9ad;
    border-color: #a6a9ad;
    color: #fff;
  }

  /*  WARNING STYLE*/
  .warning {
    color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c;
  }

  .warning:focus, .warning:hover {
    background: #ebb563;
    border-color: #ebb563;
    color: #fff;
  }

  /*  DANGER STYLE*/
  .danger {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
  }

  .danger:focus, .danger:hover {
    background: #f78989;
    border-color: #f78989;
    color: #fff;
  }
</style>