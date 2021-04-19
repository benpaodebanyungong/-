<template>
  <div>
    <!-- <router-view></router-view> -->
    <search></search>
    <p>我是订单界面</p>
  </div>
</template>
  
<script>
import Search from "../components/Search.vue";
export default {
  components: { Search },
  name: "Order",
  data() {
    return {};
  },
};
</script>
  
<style scoped lang="scss">
@import url("../css/base.css");
@import url("../css/order.css");
</style>