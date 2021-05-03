<template>
  <div id="app">
    <!-- 搜索栏 -->
    <search></search>
    <!-- 轮播图上分的导航栏 -->
    <div id="slideshow-head">
      <div class="slideshow-head-son">
        <div class="slideshow-head-left">全部商品分类</div>
        <div class="slideshow-head-certen">
          <span class="cloud"></span>
          <ul>
            <li v-for="index in 8" :key="index">
              <a href="javascript:;">{{ navigationArr[index - 1] }}</a>
            </li>
          </ul>
        </div>
        <div class="slideshow-head-right">公示：协议|规则|证照</div>
      </div>
    </div>
    <!-- 轮播图 -->
    <div
      id="slideshow-certen"
      :style="{ 'background-color': bg.colArr[bg.index] }"
    >
      <div class="slideshow-son">
        <div class="slideshow-left">
          <ul>
            <li>
              <img src="../assets/imgs/1.png" alt="" />
              <router-link to="/phones">手机</router-link> /<a
                href="javascript:;"
                >数码</a
              >/<a href="javascript:;">通信</a>
            </li>
            <li>
              <img src="../assets/imgs/2.png" alt="" /><a href="javascript:;"
                >电脑</a
              >/<a href="javascript:;">办公</a>/<a href="javascript:;">电竞</a>
            </li>
            <li>
              <img src="../assets/imgs/3.png" alt="" /><a href="javascript:;"
                >家居</a
              >/<a href="javascript:;">家具</a>/<a href="javascript:;">厨具</a>
            </li>
            <li>
              <img src="../assets/imgs/4.png" alt="" /><a href="javascript:;"
                >男装</a
              >/<a href="javascript:;">女装</a>/<a href="javascript:;">童装</a>
            </li>
            <li>
              <img src="../assets/imgs/5.png" alt="" /><a href="javascript:;"
                >美妆</a
              >/<a href="javascript:;">清洁</a>/<a href="javascript:;">宠物</a>
            </li>
            <li>
              <img src="../assets/imgs/6.png" alt="" /><a href="javascript:;"
                >箱包</a
              >/<a href="javascript:;">珠宝</a>/<a href="javascript:;"
                >奢侈品</a
              >
            </li>
            <li>
              <img src="../assets/imgs/7.png" alt="" /><a href="javascript:;"
                >运动户外</a
              >/<a href="javascript:;">钟表</a>
            </li>
            <li>
              <img src="../assets/imgs/8.png" alt="" /><a href="javascript:;"
                >汽车</a
              >/<a href="javascript:;">汽车用品</a>
            </li>
            <li>
              <img src="../assets/imgs/9.png" alt="" /><a href="javascript:;"
                >母婴</a
              >/<a href="javascript:;">玩具乐器</a>
            </li>
            <li>
              <img src="../assets/imgs/10.png" alt="" /><a href="javascript:;"
                >食品</a
              >/<a href="javascript:;">酒类</a>/<a href="javascript:;">生鲜</a>
            </li>
            <li>
              <img src="../assets/imgs/11.png" alt="" /><a href="javascript:;"
                >医药保健</a
              >/<a href="javascript:;">情趣</a>
            </li>
            <li>
              <img src="../assets/imgs/12.png" alt="" /><a href="javascript:;"
                >图书</a
              >/<a href="javascript:;">音像</a>/<a href="javascript:;"
                >电子书</a
              >
            </li>
            <li>
              <img src="../assets/imgs/13.png" alt="" /><a href="javascript:;"
                >彩票</a
              >/<a href="javascript:;">旅行</a>/<a href="javascript:;">充值</a>
            </li>
            <li>
              <img src="../assets/imgs/14.png" alt="" /><a href="javascript:;"
                >理财</a
              >/<a href="javascript:;">众筹</a>/<a href="javascript:;">保险</a>
            </li>
            <li>
              <img src="../assets/imgs/15.png" alt="" /><a href="javascript:;"
                >厨卫</a
              >/<a href="javascript:;">厨具</a>/<a href="javascript:;">家电</a>
            </li>
          </ul>
        </div>
        <div class="slideshow-certen">
          <img
            :src="bg.imgArr[bg.index]"
            alt=""
            :style="{ width: '780px', height: '470px' }"
          />
          <el-row :style="{ position: 'absolute', bottom: '0px' }">
            <li
              v-for="index in 4"
              :key="index"
              :style="{ 'margin-left': '12px' }"
            >
              <img
                :src="slideshowArr[index - 1]"
                alt=""
                :style="{
                  width: '180px',
                  height: '110px',
                  'border-radius': '8px',
                }"
              />
            </li>
          </el-row>
        </div>
        <div class="slideshow-right">
          <div class="news">
            <div class="news-hd">
              Love购快报
              <a href="javascript:;">更多<i class="el-icon-arrow-right"></i></a>
            </div>
            <div class="news-bd">
              <ul>
                <li><a href="javascript:;">【特惠】爆款耳机5折秒！</a></li>
                <li><a href="javascript:;">【特惠】健康好礼低至5折！</a></li>
                <li><a href="javascript:;">【特惠】爆款耳机5折秒！</a></li>
                <li><a href="javascript:;">【特惠】9.9元洗100张照片！</a></li>
                <li><a href="javascript:;">【特惠】智能空调立省1000</a></li>
              </ul>
            </div>
          </div>
          <div class="lifeservice">
            <ul>
              <li v-for="index in 12" :key="index">
                <img :src="rightArr[index - 1]" alt="" />
                <a href="javascript:;">{{ rightNameArr[index - 1] }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 商品显示页面 -->
    <div id="content">
      <div class="content">
        <!-- 商品内容 -->
        <div class="cmdtTitle">
          <div class="title_l">
            <img src="../assets/imgs/time_up.png" alt="" />
            <p>距离下一场</p>
            <!-- 倒计时 -->
            <div class="count_down">
              <span>{{ count_down.hour }}</span> :
              <span>{{ count_down.minute }}</span> :
              <span>{{ count_down.second }}</span>
            </div>
            <a href="javascript:;">更多 <i class="el-icon-arrow-right"></i></a>
          </div>
          <div class="title_r">
            <p>推荐榜单<span>抢大额神券</span></p>
            <a href="javascript:;">更多 <i class="el-icon-arrow-right"></i></a>
          </div>
        </div>
        <!-- 商品内容第一栏左侧 -->
        <ul>
          <li v-for="index in 3" :key="index">
            <img :src="cmdtArr1[index - 1]" alt="" />
            <p>{{ informationArr1[index - 1].name }}</p>
            <p>
              <span class="rmb1">￥</span>
              <span class="rmb2">{{ informationArr1[index - 1].price }}</span>
              <span class="rmb3"
                >￥{{ informationArr1[index - 1].oldprice }}</span
              >
            </p>
            <!-- 商品已售数量进度条 -->
            <el-progress :percentage="pgBarArr1[index - 1]" color="red">
              <span class="pgContent">已抢{{ pgBarArr1[index - 1] }}%</span>
            </el-progress>
          </li>
        </ul>
        <!-- 商品内容第一栏右侧 -->
        <ul>
          <li v-for="index in 3" :key="index">
            <img :src="cmdtArr2[index - 1]" alt="" />
            <p>{{ informationArr2[index - 1].name }}</p>
            <p>
              <span class="rmb1">￥</span>
              <span class="rmb2">{{ informationArr2[index - 1].price }}</span>
              <span class="rmb3"
                >￥{{ informationArr2[index - 1].oldprice }}</span
              >
            </p>
            <!-- 商品已售数量进度条 -->
            <el-progress :percentage="pgBarArr2[index - 1]" color="red">
              <span class="pgContent">已抢{{ pgBarArr2[index - 1] }}%</span>
            </el-progress>
          </li>
        </ul>
        <div class="cmdtTitle">
          <div class="title_l1">
            <p>推荐榜单<span>抢大额神券</span></p>
            <a href="javascript:;">更多 <i class="el-icon-arrow-right"></i></a>
          </div>
          <div class="title_r">
            <p>推荐榜单<span>抢大额神券</span></p>
            <a href="javascript:;">更多 <i class="el-icon-arrow-right"></i></a>
          </div>
        </div>
        <!-- 商品内容第二栏左侧 -->
        <ul>
          <li v-for="index in 3" :key="index">
            <img :src="cmdtArr1[index - 1]" alt="" />
            <p>{{ informationArr1[index - 1].name }}</p>
            <p>
              <span class="rmb1">￥</span>
              <span class="rmb2">{{ informationArr1[index - 1].price }}</span>
              <span class="rmb3"
                >￥{{ informationArr1[index - 1].oldprice }}</span
              >
            </p>
            <el-progress :percentage="pgBarArr1[index - 1]" color="red">
              <span class="pgContent">已抢{{ pgBarArr1[index - 1] }}%</span>
            </el-progress>
          </li>
        </ul>
        <!-- 商品内容第二栏右侧 -->
        <ul>
          <li v-for="index in 3" :key="index">
            <img :src="cmdtArr2[index - 1]" alt="" />
            <p>{{ informationArr2[index - 1].name }}</p>
            <p>
              <span class="rmb1">￥</span>
              <span class="rmb2">{{ informationArr2[index - 1].price }}</span>
              <span class="rmb3"
                >￥{{ informationArr2[index - 1].oldprice }}</span
              >
            </p>
            <el-progress :percentage="pgBarArr2[index - 1]" color="red">
              <span class="pgContent">已抢{{ pgBarArr2[index - 1] }}%</span>
            </el-progress>
          </li>
        </ul>
        <div class="cmdtTitle">
          <div class="title_l1">
            <p>推荐榜单<span>抢大额神券</span></p>
            <a href="javascript:;">更多 <i class="el-icon-arrow-right"></i></a>
          </div>
          <div class="title_r">
            <p>推荐榜单<span>抢大额神券</span></p>
            <a href="javascript:;">更多 <i class="el-icon-arrow-right"></i></a>
          </div>
        </div>
        <!-- 商品内容第三栏左侧 -->
        <ul>
          <li v-for="index in 3" :key="index">
            <img :src="cmdtArr1[index - 1]" alt="" />
            <p>{{ informationArr1[index - 1].name }}</p>
            <p>
              <span class="rmb1">￥</span>
              <span class="rmb2">{{ informationArr1[index - 1].price }}</span>
              <span class="rmb3"
                >￥{{ informationArr1[index - 1].oldprice }}</span
              >
            </p>
            <el-progress :percentage="pgBarArr1[index - 1]" color="red">
              <span class="pgContent">已抢{{ pgBarArr1[index - 1] }}%</span>
            </el-progress>
          </li>
        </ul>
        <!-- 商品内容第三栏右侧 -->
        <ul>
          <li v-for="index in 3" :key="index">
            <img :src="cmdtArr2[index - 1]" alt="" />
            <p>{{ informationArr2[index - 1].name }}</p>
            <p>
              <span class="rmb1">￥</span>
              <span class="rmb2">{{ informationArr2[index - 1].price }}</span>
              <span class="rmb3"
                >￥{{ informationArr2[index - 1].oldprice }}</span
              >
            </p>
            <el-progress :percentage="pgBarArr2[index - 1]" color="red">
              <span class="pgContent">已抢{{ pgBarArr2[index - 1] }}%</span>
            </el-progress>
          </li>
        </ul>
        <div class="cmdtTitle">
          <div class="title_l1">
            <p>推荐榜单<span>抢大额神券</span></p>
            <a href="javascript:;">更多 <i class="el-icon-arrow-right"></i></a>
          </div>
          <div class="title_r">
            <p>推荐榜单<span>抢大额神券</span></p>
            <a href="javascript:;">更多 <i class="el-icon-arrow-right"></i></a>
          </div>
        </div>
        <!-- 商品内容第四栏左侧 -->
        <ul>
          <li v-for="index in 3" :key="index">
            <img :src="cmdtArr1[index - 1]" alt="" />
            <p>{{ informationArr1[index - 1].name }}</p>
            <p>
              <span class="rmb1">￥</span>
              <span class="rmb2">{{ informationArr1[index - 1].price }}</span>
              <span class="rmb3"
                >￥{{ informationArr1[index - 1].oldprice }}</span
              >
            </p>
            <el-progress :percentage="pgBarArr1[index - 1]" color="red">
              <span class="pgContent">已抢{{ pgBarArr1[index - 1] }}%</span>
            </el-progress>
          </li>
        </ul>
        <!-- 商品内容第四栏右侧 -->
        <ul>
          <li v-for="index in 3" :key="index">
            <img :src="cmdtArr2[index - 1]" alt="" />
            <p>{{ informationArr2[index - 1].name }}</p>
            <p>
              <span class="rmb1">￥</span>
              <span class="rmb2">{{ informationArr2[index - 1].price }}</span>
              <span class="rmb3"
                >￥{{ informationArr2[index - 1].oldprice }}</span
              >
            </p>
            <el-progress :percentage="pgBarArr2[index - 1]" color="red">
              <span class="pgContent">已抢{{ pgBarArr2[index - 1] }}%</span>
            </el-progress>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
  
<script>
import { reactive } from "vue";
import Search from "../components/Search.vue";
import Indexjs from "../js/index.js";
export default {
  components: { Search },
  name: "Index",
  data() {
    return {
      // list:['1','2','3','4'],
      // 轮播图上分导航栏
      navigationArr: [
        "Love秒杀",
        "Love优惠",
        "Love家电",
        "Love超市",
        "Love生鲜",
        "Love同城",
        "Love国际",
        "Love云",
      ],
      // 绝对定位在轮播图下方的图像
      slideshowArr: [
        require("../assets/imgs/slideshow-certen1.jpg"),
        require("../assets/imgs/slideshow-certen2.jpg"),
        require("../assets/imgs/slideshow-certen3.jpg"),
        require("../assets/imgs/slideshow-certen4.jpg"),
      ],
      // 轮播图右侧内容
      rightArr: [
        require("../assets/imgs/right1.png"),
        require("../assets/imgs/right2.png"),
        require("../assets/imgs/right3.png"),
        require("../assets/imgs/right4.png"),
        require("../assets/imgs/right5.png"),
        require("../assets/imgs/right6.png"),
        require("../assets/imgs/right7.png"),
        require("../assets/imgs/right8.png"),
        require("../assets/imgs/right9.png"),
        require("../assets/imgs/right10.png"),
        require("../assets/imgs/right11.png"),
        require("../assets/imgs/right12.png"),
      ],
      rightNameArr: [
        "领红包",
        "领云钻",
        "抢神券",
        "充话费",
        "水电煤",
        "Love卡",
        "理财",
        "分期",
        "公益",
        "加油卡",
        "旧换新",
        "保险",
      ],
      // 商品内容 第一栏左侧
      cmdtArr1: [
        require("../assets/imgs/commodity1.jpg"),
        require("../assets/imgs/commodity2.jpg"),
        require("../assets/imgs/commodity3.jpg"),
      ],
      informationArr1: [
        { name: "二手电视", price: "1666.80", oldprice: "5666.80" },
        { name: "二手音响", price: "129.90", oldprice: "169.90" },
        { name: "整箱沙琪玛", price: "35.60", oldprice: "82.50" },
      ],
      pgBarArr1: [25, 33, 47],
      // 商品内容 第一栏右侧
      cmdtArr2: [
        require("../assets/imgs/commodity4.jpg"),
        require("../assets/imgs/commodity5.jpg"),
        require("../assets/imgs/commodity6.jpg"),
      ],
      informationArr2: [
        { name: "我是嘻嘻哈哈", price: "66.30", oldprice: "99.90" },
        { name: "我是嘻嘻哈哈", price: "38.80", oldprice: "78.80" },
        { name: "我是嘻嘻哈哈", price: "19.90", oldprice: "66.80" },
      ],
      pgBarArr2: [99, 62, 12],
    };
  },
  methods: {
    format(percentage) {
      return percentage === 100 ? "被抢光" : `${percentage}%`;
    },
  },
  setup() {
    //轮播图部件
    let bg = reactive({
      index: 0,
      colArr: [
        "rgb(181,62,232)",
        "rgb(240,250,226)",
        "rgb(55,55,55)",
        "rgb(186,181,87)",
      ],
      imgArr: [
        require("../assets/imgs/focus1.jpg"),
        require("../assets/imgs/focus2.jpg"),
        require("../assets/imgs/focus3.jpg"),
        require("../assets/imgs/focus4.jpg"),
      ],
    });
    let timer = setInterval(bgChange, 3000);
    function bgChange() {
      if (bg.index === 3) {
        bg.index = 0;
      } else {
        bg.index++;
      }
    }
    // 倒计时
    let count_down = reactive({
      hour: "倒",
      minute: "记",
      second: "时",
    });
    let inputTime = +new Date("2021-4-30 20:00:00"); // 返回的是用户输入时间总的毫秒数
    countDown(); // 我们先调用一次这个函数，防止第一次刷新页面有空白
    // 2. 开启定时器
    let clear = setInterval(countDown, 1000); //过了一秒钟后回调函数
    function countDown() {
      let nowTime = +new Date(); // 返回的是当前时间总的毫秒数
      if (nowTime < inputTime) {
        let times = (inputTime - nowTime) / 1000; // times是剩余时间总的秒数
        let d = parseInt(times / 60 / 60 / 24); //天
        // d = d < 10 ? '0' + d : d;
        let h = parseInt((times / 60 / 60) % 24); //时
        h = h + d * 24; //将剩下的天数转换为小时添加给h
        h = h < 10 ? "0" + h : h;
        count_down.hour = h; // 把剩余的小时给给时间赋值
        let m = parseInt((times / 60) % 60); // 分
        m = m < 10 ? "0" + m : m;
        count_down.minute = m;
        let s = parseInt(times % 60); // 当前的秒
        s = s < 10 ? "0" + s : s;
        count_down.second = s;
      } else {
        clearInterval(clear); //清除定时器
        count_down.hour = "结";
        count_down.minute = "束";
        count_down.second = "了";
      }
    }
    // return 必须放在底部
    return { bg, timer, count_down, clear, countDown };
  },
  mounted() {
    Indexjs.clouds();
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
@import url("../css/base.css");
@import url("../css/index.css");
</style>
