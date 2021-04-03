<template>
  <div>
    <!-- 搜索栏 -->
    <div id="search">
      <div class="logo">
        <img class="logo-img" src="../assets/imgs/logo.png" alt="" />
        <img class="logo-name" src="../assets/imgs/logo-name.png" alt="" />
      </div>
      <div class="search-bar">
        <el-row>
          <el-input
            v-model="inpSearch"
            placeholder="请输入内容"
            class="search-input"
          ></el-input>
          <el-button
            type="primary"
            icon="el-icon-search"
            class="search-button"
            :style="{
              'background-color': 'rgb(255, 128, 0)',
              'border-color': 'rgb(255, 128, 0)',
            }"
            >搜索</el-button
          >
        </el-row>
      </div>
      <div class="shopcar">
        <router-link to="/car"
          ><a href="javascript:;"
            ><i class="car"> </i>&nbsp;我的购物车<i class="arrow">  </i></a
          ><i class="count">{{ num }}</i></router-link
        >
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "Search",
  data() {
    return {
      num: 99,
      inpSearch: "",
    };
  },
};
</script>
  
<style scoped lang="scss">
// 使用elementplus的组件
.search-input {
  width: 410px;
  height: 40px;
  margin: 30px 0 30px 45px;
}
.search-button {
  width: 120px;
  height: 40px;
  margin: 30px 0;
}
@import url("../css/search.css");
</style>