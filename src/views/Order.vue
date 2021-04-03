<template>
  <div>
    <!-- <router-link to="/order/search"></router-link> -->
    <router-view></router-view>
    <p>我是订单界面</p>
  </div>
</template>
  
<script>
export default {
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