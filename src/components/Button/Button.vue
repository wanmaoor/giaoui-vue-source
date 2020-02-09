<!--suppress CssUnusedSymbol -->
<template>
  <button
    :class="buttonStyle"
    :disabled="isDisabled"
    @click="handleClick"
  >
    <slot>{{"无按钮文字"}}</slot>
  </button>
</template>

<script lang="ts">
  export default {
    name: "Button",
    props: {
      type: {
        type: String,
        default: "default"
      }
    },
    data() {
      return {
				buttonStyle: ["button"],
				isDisabled: false
			}
		},
		mounted() {
			this.addButtonFeature("plain")
			this.addButtonFeature("round")
			if (this.$attrs.hasOwnProperty("disabled")) {
				this.buttonStyle.push("disabled")
				this.isDisabled = true
			}
			if (this.type) {
				this.buttonStyle.push(this.type)
			} else {
				console.error("invalid type prop input")
			}
		},
		methods: {
			addButtonFeature(style) {
				if (this.$attrs.hasOwnProperty(style)) {
					this.buttonStyle.push(style)
				}
			},
			handleClick(e) {
				this.$emit("click", e)
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

  /*  PLAIN STYLE*/
  .plain:focus, .plain:hover {
    background: #fff;
    border-color: #409eff;
    color: #409eff;
  }

  /*  PLAIN PRIMARY STYLE*/
  .primary.plain {
    color: #409eff;
    background: #ecf5ff;
    border-color: #b3d8ff;
  }

  .primary.plain:focus, .primary.plain:hover {
    background: #409eff;
    border-color: #409eff;
    color: #fff;
  }

  /*  PLAIN SUCCESS STYLE*/
  .success.plain {
    color: #67c23a;
    background: #f0f9eb;
    border-color: #c2e7b0;
  }

  .success.plain:focus, .success.plain:hover {
    background: #67c23a;
    border-color: #67c23a;
    color: #fff;
  }

  /*  PLAIN INFO STYLE*/
  .info.plain {
    color: #909399;
    background: #f4f4f5;
    border-color: #d3d4d6;
  }

  .info.plain:focus, .info.plain:hover {
    background: #909399;
    border-color: #909399;
    color: #fff;
  }

  /*  PLAIN WARNING STYLE*/
  .warning.plain {
    color: #e6a23c;
    background: #fdf6ec;
    border-color: #f5dab1;
  }

  .warning.plain:focus, .warning.plain:hover {
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }

  /*  PLAIN DANGER STYLE*/
  .danger.plain {
    color: #f56c6c;
    background: #fef0f0;
    border-color: #fbc4c4;
  }

  .danger.plain:focus, .danger.plain:hover {
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
  }

  /*  ROUND */
  .round {
    border-radius: 20px;
    padding: 12px 23px;
  }

  /*  DISABLE BUTTON*/
  .button.disabled, .button.disabled:focus, .button.disabled:hover {
    color: #c0c4cc;
    cursor: not-allowed;
    background-image: none;
    background-color: #fff;
    border-color: #ebeef5;
  }
</style>