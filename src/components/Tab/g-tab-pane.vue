<template>
  <div class="tab-content">
    <div class="tab-panel">
      <slot></slot>
    </div>
  </div>
</template>

<script>
	export default {
		name: "g-tab-pane"
	}
</script>

<style scoped>
  /*.tabs .tab-panel {*/
  /*  padding: 16px 0;*/
  /*  font-size: 14px;*/
  /*  display: none;*/
  /*}*/

  /*.tabs .tab-panel.active {*/
  /*  display: block;*/
  /*}*/
</style>