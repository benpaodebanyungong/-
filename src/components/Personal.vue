<template>
  <div id="personal">
    <div class="personalNav">
      <a href="javascript:;" class="pLogo"
        ><img src="../assets/imgs/p_logo.png" alt=""
      /></a>
      <div class="pContent">
        <a href="javascript:;">首页</a>
        <a href="javascript:;">个人中心</a>
        <router-link to="/order">我的订单</router-link>
      </div>
      <div class="OrShopcar">
        <router-link to="/car">
          <el-badge
            :value="$store.state.carNum"
            :max="99"
            class="item"
            type="danger"
          >
            <i class="el-icon-shopping-cart-full"></i>&nbsp;我的购物车
          </el-badge>
        </router-link>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "personal",
  data() {
    return {};
  },
};
</script>
  
<style scoped lang="scss">
@import url("../css/personal.css");
</style>