<template>
  <Tab @tab-change="onTabChange" active="user">
    <TabPanel index="user" label="xxx">XXX</TabPanel>
    <TabPanel index="role" label="yyy">YYY</TabPanel>
    <TabPanel index="config" label="zzz">ZZZ</TabPanel>
  </Tab>
</template>

<script>
	import Tab from "../components/Tab/Tab"
	import TabPanel from "../components/Tab/TabPanel"

	export default {
		name: "Tabs",
		components: {Tab, TabPanel},
		methods: {
			onTabChange(index) {
				console.log("tab 改变了", index)
			}
		}
	}
</script>

<style scoped>

</style>
