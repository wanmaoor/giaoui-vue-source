<template>
  <g-tabs @tab-click="handleClick" v-model="activeName">
    <g-tab-pane label="用户管理" name="first">xxx</g-tab-pane>
    <g-tab-pane label="详细列表" name="second">yyy</g-tab-pane>
    <g-tab-pane label="其他" name="third">zzz</g-tab-pane>
  </g-tabs>
</template>

<script>
	import gTabs from "../components/Tab/g-tabs.vue"

	export default {
		name: "Tabs",
		components: {GTabPane, gTabs},
		data() {
			return {
				activeName: "first"
			}
		},
		methods: {
			handleClick(tab, event) {
				console.log(tab, event)
			}
		},
	}
</script>

<style scoped>

</style>