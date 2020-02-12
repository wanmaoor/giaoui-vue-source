<template>
  <div class="container">
    <Tab @tab-change="onTabChange" active="user">
      <TabPanel index="user" label="this is a long tab">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic,
        ratione?
      </TabPanel>
      <TabPanel index="role" label="short tab">Lorem ipsum dolor sit amet.</TabPanel>
      <TabPanel index="config" label="this is a huge long long tab ">Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Adipisci aliquam, doloribus eius esse et excepturi fugiat porro quisquam voluptas voluptates.
      </TabPanel>
    </Tab>
  </div>
</template>

<script>
	import Tab from "../components/Tab/Tab"
	import TabPanel from "../components/Tab/TabPanel"

	export default {
		name: "Tabs",
		components: {Tab, TabPanel},
		methods: {
			onTabChange(index) {
				console.log("tab changes: ", index)
			}
		}
	}
</script>

<style scoped>
  .container {
    max-width: 800px;
    height: 10vh;
    margin: 30px auto;
    border-radius: 4px;
    box-shadow: 0 0 4px 0px rgba(0, 0, 0, 0.3);
    padding: 15px;
  }
</style>
