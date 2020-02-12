<template>
  <Tab @tab-change="onTabChange" active="user">
    <TabPanel index="user" label="this is a long tab">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic,
      ratione?
    </TabPanel>
    <TabPanel index="role" label="short tab">Lorem ipsum dolor sit amet.</TabPanel>
    <TabPanel index="config" label="this is a huge long long tab ">Lorem ipsum dolor sit amet, consectetur adipisicing
      elit. Adipisci aliquam, doloribus eius esse et excepturi fugiat porro quisquam voluptas voluptates.
    </TabPanel>
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
