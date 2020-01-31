<template>
  <!--  <div class="container">-->
  <!--    <h2>选项卡</h2>-->
  <!--    <div class="tabs">-->
  <!--      <div class="tab-header">-->
  <!--        <span class="tab-item active">用户管理</span>-->
  <!--        <span class="tab-item">xxxxx</span>-->
  <!--        <span class="tab-item">yyy</span>-->
  <!--        <span class="tab-item">z</span>-->
  <!--        <span class="line"></span>-->
  <!--      </div>-->
  <!--      <div class="tab-content">-->
  <!--        <div class="tab-panel active">1&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;1</div>-->
  <!--        <div class="tab-panel">2&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;2</div>-->
  <!--        <div class="tab-panel">3&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;4</div>-->
  <!--        <div class="tab-panel">4&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;4</div>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </div>-->
  <div class="container">
    <div class="tabs">
      <slot></slot>
    </div>
  </div>
</template>

<script>
	export default {
		name: "gTabs",
		mounted() {console.log(this.$children)}
	}
</script>

<style scoped>
  .container {
    max-width: 800px;
    margin: 30px auto;
    border-radius: 4px;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);
    padding: 15px;
  }

  /*.tabs .tab-header {*/
  /*  display: flex;*/
  /*  font-size: 13px;*/
  /*  color: #303030;*/
  /*  line-height: 2;*/
  /*  font-weight: 500;*/
  /*  border-bottom: 2px solid #ddd;*/
  /*  position: relative;*/
  /*}*/
  /*.tabs .tab-header .line {*/
  /*  position: absolute;*/
  /*  height: 2px;*/
  /*  bottom: 0;*/
  /*  background: #409eff;*/
  /*  transform: translateX(0);*/
  /*  transition: all 0.3s;*/
  /*  margin-bottom: -2px;*/
  /*}*/
  /*.tabs .tab-item {*/
  /*  margin-right: 30px;*/
  /*  cursor: pointer;*/
  /*}*/
  /*.tabs .tab-item:hover {*/
  /*  color: #409eff;*/
  /*}*/
  /*.tabs .tab-item.active {*/
  /*  color: #409eff;*/
  /*}*/

  /*.tabs .tab-panel {*/
  /*  padding: 16px 0;*/
  /*  font-size: 14px;*/
  /*  display: none;*/
  /*}*/
  /*.tabs .tab-panel.active {*/
  /*  display: block;*/
  /*}*/
</style>