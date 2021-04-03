<template>
  <div id="phContent">
    <search></search>
    <navigation></navigation>
    <div class="phContent">
      <ul>
        <li v-for="index in 10" :key="index">
          <router-link to="/apple">
            <img :src="phArr[index - 1]" alt="" class="imgBig" />
          </router-link>
          <img :src="phArr[index - 1]" alt="" class="imgSmall" />
          <p>
            <span class="rmb1">￥</span>
            <span class="rmb2">{{ phNameArr[index - 1].price }}</span>
            <span class="rmb3">￥{{ phNameArr[index - 1].oldprice }}</span>
          </p>
          <router-link to="/apple">{{ phNameArr[index - 1].name }}</router-link>
          <p>{{ phMemoryArr[index - 1] }}</p>
          <a href="javascript:;">{{ phEvaluateArr[index - 1] }}</a
          ><span class="evaluate">评价</span>
          <p class="love">Love自营店</p>
          <el-progress :percentage="pgBarArr[index - 1]" color="red">
            <span class="pgContent">已抢{{ pgBarArr[index - 1] }}%</span>
          </el-progress>
        </li>
      </ul>
    </div>
  </div>
</template>
  
<script>
import Navigation from "../components/Navigation.vue";
import Search from "../components/Search.vue";
export default {
  components: { Search, Navigation },
  name: "Car",
  data() {
    return {
      phArr: [
        require("../assets/imgs/phone1.jpg"),
        require("../assets/imgs/phone2.jpg"),
        require("../assets/imgs/phone3.jpg"),
        require("../assets/imgs/phone4.jpg"),
        require("../assets/imgs/phone5.jpg"),
        require("../assets/imgs/phone6.jpg"),
        require("../assets/imgs/phone7.jpg"),
        require("../assets/imgs/phone8.jpg"),
        require("../assets/imgs/phone9.jpg"),
        require("../assets/imgs/phone10.jpg"),
      ],
      phNameArr: [
        {
          name: "Apple iPhone 11 64G 白色 移动联通电信4G全网通手机",
          price: "1600.80",
          oldprice: "5600.80",
        },
        {
          name:
            "Apple iPhone 11 64G 白色 iosA13芯片 2019款 移动联通电信4G全网通手机",
          price: "2900.90",
          oldprice: "6900.90",
        },
        {
          name:
            "一加 OnePlus 8T 5G旗舰 全网通 12GB 青域 65W Warp闪充 骁龙865全网通",
          price: "3500.60",
          oldprice: "8200.50",
        },
        {
          name:
            "华为/HUAWEI Mate40 RS 保时捷设计 典藏版 12GB+512GB 陶瓷黑 麒麟9000",
          price: "6600.30",
          oldprice: "9900.90",
        },
        {
          name:
            "苹果(Apple) iPhone 11 128GB 黑色 简配版 移动联通电信4G全网通手机",
          price: "3800.80",
          oldprice: "7800.80",
        },
        {
          name:
            "小米(MI) Redmi K30 120Hz流速屏索尼6400万后置四摄全面屏4500mAh超长续航",
          price: "4800.80",
          oldprice: "8800.80",
        },
        {
          name:
            "硕王（SAILF） M30 安卓智能手机 6+64G 炫酷黑 6.5英寸水滴全面屏 4G全网通",
          price: "1800.80",
          oldprice: "4800.80",
        },
        {
          name:
            "朵唯(DOOV) X11Pro 安卓智能手机 6+128G 翡翠绿 6.53英寸水滴全面屏 4G全网通",
          price: "2800.80",
          oldprice: "5800.80",
        },
        {
          name:
            "小米（MI）10 5G 8GB+256GB 冰海蓝 骁龙865 1亿像素8k电影相机30W疾速闪充",
          price: "3100.80",
          oldprice: "7100.80",
        },
        {
          name:
            "苹果(Apple) iPhone 12 128GB 白色 移动联通电信5G全网通手机 双卡双待 iphone12",
          price: "5200.80",
          oldprice: "9800.80",
        },
        {
          name:
            "iQOO U1x 晨霜白 4G+64G 高通骁龙662 5000mAh大电池强续航 1300万全场景三摄",
          price: "1300.80",
          oldprice: "4500.80",
        },
      ],
      phMemoryArr: [
        "64G|128G",
        "128G|256G",
        "64G|256G",
        "128G|256G",
        "64G|128G",
        "256G|512G",
        "28G|256G",
        "256G|512G",
        "128G|256G",
        "128G|512G",
      ],
      phEvaluateArr: [
        "999+",
        "620+",
        "120+",
        "999+",
        "580+",
        "777+",
        "614+",
        "123+",
        "444+",
        "785+",
      ],
      pgBarArr: [25, 33, 47, 99, 62, 5, 45, 63, 78, 12],
    };
  },
};
</script>
  
<style scoped lang="scss">
@import url("../css/base.css");
@import url("../css/phones.css");
</style>