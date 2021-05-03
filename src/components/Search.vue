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
          <el-autocomplete
            class="search-input"
            v-model="inpSearch"
            :fetch-suggestions="querySearch"
            placeholder="请输入内容"
            @select="handleSelect"
            @keyup.enter="isSearch(inpSearch)"
            :style="{ width: '410px', margin: '30px 0 30px 45px' }"
          ></el-autocomplete>
          <el-button
            type="primary"
            icon="el-icon-search"
            class="search-button"
            @click="isSearch(inpSearch)"
            :style="{
              'background-color': 'rgb(255, 128, 0)',
              'border-color': 'rgb(255, 128, 0)',
            }"
            >搜索</el-button
          >
        </el-row>
      </div>
      <div class="shopcar">
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
import { ref, onMounted } from "vue";
import { ElMessage } from "element-plus";
import router from "../router/index.js";
export default {
  name: "Search",
  data() {
    return {
      inpSearch: "",
    };
  },
  methods: {},
  setup() {
    const restaurants = ref([]);
    let search = [];
    const querySearch = (queryString, cb) => {
      var results = queryString
        ? restaurants.value.filter(createFilter(queryString))
        : restaurants.value;
      // 调用 callback 返回建议列表的数据
      search = restaurants.value.filter(createFilter(queryString));
      cb(results);
    };
    const createFilter = (queryString) => {
      return (restaurant) => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    };
    const loadAll = () => {
      return [
        {
          value:
            "Apple iPhone 11 64G 白色 iosA13芯片 2019款 移动联通电信4G全网通手机",
        },
        {
          value:
            "一加 OnePlus 8T 5G旗舰 全网通 12GB 青域 65W Warp闪充 骁龙865全网通",
        },
        {
          value:
            "华为/HUAWEI Mate40 RS 保时捷设计 典藏版 12GB+512GB 陶瓷黑 麒麟9000",
        },
        {
          value:
            "Apple苹果 iPhone 11 128GB 黑色 简配版 移动联通电信4G全网通手机",
        },
        {
          value:
            "小米(MI) Redmi K30 120Hz流速屏索尼6400万后置四摄全面屏4500mAh超长续航",
        },
        { value: "Apple iPhone 11 64G 白色 移动联通电信4G全网通手机" },
        {
          value:
            "硕王（SAILF） M30 安卓智能手机 6+64G 炫酷黑 6.5英寸水滴全面屏 4G全网通",
        },
        {
          value:
            "朵唯(DOOV) X11Pro 安卓智能手机 6+128G 翡翠绿 6.53英寸水滴全面屏 4G全网通",
        },
        {
          value:
            "小米（MI）10 5G 8GB+256GB 冰海蓝 骁龙865 1亿像素8k电影相机30W疾速闪充",
        },
        {
          value:
            "Apple苹果 iPhone 12 128GB 白色 移动联通电信5G全网通手机 双卡双待 iphone12",
        },
        {
          value:
            "iQOO U1x 晨霜白 4G+64G 高通骁龙662 5000mAh大电池强续航 1300万全场景三摄",
        },
      ];
    };
    const handleSelect = (item) => {
      // console.log(item);
    };
    onMounted(() => {
      restaurants.value = loadAll();
    });
    const isSearch = (inpSearch) => {
      if (search.length == 0 && inpSearch.length != 0) {
        ElMessage({
          message: "找不到对应商品，请重新输入！",
          type: "warning",
          duration: 3000,
          showClose: true,
        });
      } else if (inpSearch == 0) {
        ElMessage({
          message: "关键字不能为空，请重新输入！",
          type: "error",
          duration: 3000,
          showClose: true,
        });
      } else {
        ElMessage({
          message: "关键字查询成功！",
          type: "success",
          duration: 1000,
          showClose: true,
        });
        router.push("/phones");
      }
    };
    return {
      restaurants,
      querySearch,
      createFilter,
      loadAll,
      isSearch,
      handleSelect,
    };
  },
};
</script>
  
<style scoped lang="scss">
// 使用elementplus的组件
.search-button {
  width: 120px;
  height: 40px;
  margin: 30px 0;
}
@import url("../css/search.css");
</style>

