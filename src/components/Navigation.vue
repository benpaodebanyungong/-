<template>
  <div>
    <div class="line">
      <div class="nav">
        <ul>
          <li v-for="index in 8" :key="index">
            <router-link to="/phones">{{ narNameArr[index - 1] }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "Navigation",
  data() {
    return {
      narNameArr: [
        "正品手机",
        "二手手机",
        "手机配件",
        "营业厅",
        "以旧换新",
        "手机维修",
        "智能数码",
        "酷潮新品",
      ],
    };
  },
};
</script>
  
<style scoped lang="scss">
@import url("../css/navigation.css");
</style>