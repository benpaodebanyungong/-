<template>
  <div>
    <search></search>
    <navigation></navigation>
    <!-- 详情页内容部分	 -->
    <div class="details">
      <!-- 面包屑导航 -->
      <div class="crumb_wrap">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/phones' }"
            >手机</el-breadcrumb-item
          >
          <el-breadcrumb-item>iPhone</el-breadcrumb-item>
          <el-breadcrumb-item>iPhone6s</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- 产品介绍模块 -->
      <div class="product_intro">
        <div class="preview_wrap">
          <div class="preview_img">
            <img
              @mouseenter="open"
              @mouseout="close"
              @mousemove="move"
              src="../assets/imgs/s3.png"
              alt=""
            />
            <div class="mask" v-show="big.maskIsShow"></div>
            <div class="big" v-show="big.bigIsShow">
              <img src="../assets/imgs/big.jpg" alt="" class="bigImg" />
            </div>
          </div>
          <div class="preview_list">
            <a href="javascript:;" class="arrow_prev"></a>
            <a href="javascript:;" class="arrow_next"></a>
            <ul class="list_item">
              <li v-for="index in chArr.length" :key="index">
                <img :src="chArr[index - 1]" alt="" @click="border" />
              </li>
            </ul>
          </div>
        </div>
        <div class="itemInfo_wrap">
          <div class="sku_name">
            Apple iPhone 11 64G 白色 移动联通电信4G全网通手机
          </div>
          <div class="appleNew">
            推荐选择下方[移动优惠购],手机套餐齐搞定,不用换号,每月还有花费返
          </div>
          <div class="summary">
            <dl class="summary_price">
              <dt>价格</dt>
              <dd>
                <span class="price"
                  >￥{{
                    (
                      cmdtNum *
                      (worth + colorW + versionW + memoryW + typeW)
                    ).toFixed(2)
                  }}
                </span>
                <span class="oldPrice">￥{{ oldPrice.toFixed(2) }}</span>
                <span class="max"
                  >每个账户限量<span>{{ maxNum }}</span
                  >件</span
                >
                <div class="remark">
                  <a href="#product_detail">累计评价612188</a>
                </div>
              </dd>
            </dl>
            <dl class="summary_promotion">
              <dt>促销</dt>
              <dd>
                <em>加购价</em>
                满9999.00另加20.00元，或满19999.00另加30.00元，或满29999.00另加40.00元，即可在购物车换
                购热销商品 <a href="#product_detail">详情</a> >
              </dd>
            </dl>
            <dl class="summary_support">
              <dt>支持</dt>
              <dd>以旧换新，闲置手机回收, 信用卡支付, 微信支付, 支付宝支付</dd>
            </dl>
            <dl class="choose_color">
              <dt>选择颜色</dt>
              <dd>
                <a href="javascript:;" @click="chColor(50)">玫瑰金</a>
                <a href="javascript:;" @click="chColor(20)">金色</a>
                <a href="javascript:;" @click="chColor(0)">白色</a>
                <a href="javascript:;" @click="chColor(100)">土豪色</a>
              </dd>
            </dl>
            <dl class="choose_version">
              <dt>选择版本</dt>
              <dd>
                <a href="javascript:;" @click="chVersion(200)">全网通</a>
                <a href="javascript:;" @click="chVersion(0)">移动版</a>
                <a href="javascript:;" @click="chVersion(0)">电信版</a>
              </dd>
            </dl>
            <dl class="choose_memory">
              <dt>选择规格</dt>
              <dd>
                <a href="javascript:;" @click="chMemory(0)">64G</a>
                <a href="javascript:;" @click="chMemory(200)">128G</a>
                <a href="javascript:;" @click="chMemory(500)">256G</a>
              </dd>
            </dl>
            <dl class="choose_type">
              <dt>购买方式</dt>
              <dd>
                <a href="javascript:;" @click="chType(0)">官方标配</a>
                <el-tooltip effect="dark" placement="top">
                  <template #content>
                    额外赠送：<br />
                    5000mAh充电宝 <br />+0.9米原装数据线</template
                  >
                  <a href="javascript:;" @click="chType(100)">套餐一</a>
                </el-tooltip>
                <el-tooltip effect="dark" placement="top">
                  <template #content>
                    额外赠送：<br />
                    10000mAh充电宝 <br />+0.9米原装数据线</template
                  >
                  <a href="javascript:;" @click="chType(150)">套餐二</a>
                </el-tooltip>
              </dd>
            </dl>
            <div class="choose_btns">
              <el-input-number
                v-model="cmdtNum"
                controls-position="right"
                @change="handleChange"
                :min="1"
                :max="maxNum"
                :disabled="isbuy"
              ></el-input-number>
              <el-button type="danger" @click="carAdd" :disabled="isbuy"
                >加入购物车</el-button
              >
              <router-link to="/payment">
                <el-button type="danger" @click="orderAdd" :disabled="isbuy"
                  >立即购买</el-button
                ></router-link
              >
            </div>
          </div>
        </div>
      </div>
      <!-- 产品细节模块 product_detail	 -->
      <div class="product_detail" id="product_detail">
        <div class="aside">
          <el-tabs type="border-card">
            <el-tab-pane label="推荐品牌">
              <ul class="tab_con">
                <li>
                  <img src="../assets/imgs/aside_img.jpg" alt="" />
                  <h5>华为 HUAWEI P20 Pro 全面屏徕卡</h5>
                  <div class="aside_price">¥19</div>
                  <el-button type="danger" size="mini">加入购物车</el-button>
                </li>
                <li>
                  <img src="../assets/imgs/aside_img.jpg" alt="" />
                  <h5>华为 HUAWEI P20 Pro 全面屏徕卡</h5>
                  <div class="aside_price">¥19</div>
                  <el-button type="danger" size="mini">加入购物车</el-button>
                </li>
                <li>
                  <img src="../assets/imgs/aside_img.jpg" alt="" />
                  <h5>华为 HUAWEI P20 Pro 全面屏徕卡</h5>
                  <div class="aside_price">¥19</div>
                  <el-button type="danger" size="mini">加入购物车</el-button>
                </li>
                <li>
                  <img src="../assets/imgs/aside_img.jpg" alt="" />
                  <h5>华为 HUAWEI P20 Pro 全面屏徕卡</h5>
                  <div class="aside_price">¥19</div>
                  <el-button type="danger" size="mini">加入购物车</el-button>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="相关分类">相关分类</el-tab-pane>
          </el-tabs>
        </div>
        <div class="detail">
          <el-tabs type="card">
            <el-tab-pane label="商品介绍">
              <div class="item">
                <ul class="item_info">
                  <li>分辨率：1920*1080(FHD)</li>
                  <li>后置摄像头：1200万像素</li>
                  <li>前置摄像头：500万像素</li>
                  <li>核 数：其他</li>
                  <li>频 率：以官网信息为准</li>
                  <li>品牌： Apple ♥关注</li>
                  <li>商品名称：APPLEiPhone 6s Plus</li>
                  <li>商品编号：1861098</li>
                  <li>商品毛重：0.51kg</li>
                  <li>商品产地：中国大陆</li>
                  <li>热点：指纹识别，Apple Pay，金属机身，拍照神器</li>
                  <li>系统：苹果（IOS）</li>
                  <li>像素：1000-1600万</li>
                  <li>机身内存：64GB</li>
                </ul>
                <p>
                  <a href="javascript:;" class="more"
                    >查看更多参数<i class="el-icon-arrow-down"></i
                  ></a>
                </p>
                <img src="../assets/imgs/detail_img2.jpg" alt="" />
                <img src="../assets/imgs/detail_img1.jpg" alt="" />
                <img src="../assets/imgs/detail_img3.jpg" alt="" />
              </div>
            </el-tab-pane>
            <el-tab-pane label="规格与包装">规格与包装</el-tab-pane>
            <el-tab-pane label="售后保障">售后保障</el-tab-pane>
            <el-tab-pane label="商品评价"> 商品评价</el-tab-pane>
            <el-tab-pane label="手机社区">手机社区</el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import Navigation from "../components/Navigation.vue";
import Search from "../components/Search.vue";
import { ElMessage } from "element-plus";
import { reactive } from "vue";
export default {
  components: { Search, Navigation },
  name: "Car",
  data() {
    return {
      isbuy: true,
      // 商品数据
      cmdtNum: 1,
      worth: 5299.9,
      oldPrice: 9999.9,
      maxNum: 20,
      // 选择样式
      colorW: 0,
      versionW: 0,
      memoryW: 0,
      typeW: 0,
      colorName: "",
      versionName: "",
      memoryName: "",
      typeName: "",
      chArr: [
        require("../assets/imgs/pre.jpg"),
        require("../assets/imgs/pre.jpg"),
        require("../assets/imgs/pre.jpg"),
        require("../assets/imgs/pre.jpg"),
        require("../assets/imgs/pre.jpg"),
      ],
    };
  },
  methods: {
    handleChange(value) {
      // console.log(value);
      // console.log(this.cmdtNum);
    },
    // 选择图片事件
    border() {
      let colors = document.querySelectorAll(".list_item img");
      for (var i = 0; i < colors.length; i++) {
        colors[i].classList.remove("current");
      }
      event.target.classList.add("current");
    },
    // 选择颜色事件
    chColor(changeWorth) {
      let colors = document.querySelectorAll(".choose_color a");
      // colors得到的是伪数组  里面的每一个元素 colors[i]
      // (1) 我们先把所有的按钮边框颜色去掉  干掉所有人
      for (var i = 0; i < colors.length; i++) {
        colors[i].classList.remove("current");
      }
      // (2) 然后才让当前的元素边框颜色为red 留下我自己
      event.target.classList.add("current");
      this.colorW = changeWorth;
      this.colorName = event.target.innerText;
      // 加入购物车和立即购买按钮是否禁用
      if (
        this.colorName !== "" &&
        this.versionName !== "" &&
        this.memoryName !== "" &&
        this.typeName !== ""
      ) {
        this.isbuy = false;
      } else {
        this.isbuy = true;
      }
    },
    // 选择版本事件
    chVersion(changeWorth) {
      let colors = document.querySelectorAll(".choose_version a");
      for (var i = 0; i < colors.length; i++) {
        colors[i].classList.remove("current");
      }
      event.target.classList.add("current");
      this.versionW = changeWorth;
      this.versionName = event.target.innerText;
      if (
        this.colorName !== "" &&
        this.versionName !== "" &&
        this.memoryName !== "" &&
        this.typeName !== ""
      ) {
        this.isbuy = false;
      } else {
        this.isbuy = true;
      }
    },
    // 选择规格事件
    chMemory(changeWorth) {
      let colors = document.querySelectorAll(".choose_memory a");
      for (var i = 0; i < colors.length; i++) {
        colors[i].classList.remove("current");
      }
      event.target.classList.add("current");
      this.memoryW = changeWorth;
      this.memoryName = event.target.innerText;
      if (
        this.colorName !== "" &&
        this.versionName !== "" &&
        this.memoryName !== "" &&
        this.typeName !== ""
      ) {
        this.isbuy = false;
      } else {
        this.isbuy = true;
      }
    },
    // 购买方式事件
    chType(changeWorth) {
      let colors = document.querySelectorAll(".choose_type a");
      for (var i = 0; i < colors.length; i++) {
        colors[i].classList.remove("current");
      }
      event.target.classList.add("current");
      this.typeW = changeWorth;
      this.typeName = event.target.innerText;
      if (
        this.colorName !== "" &&
        this.versionName !== "" &&
        this.memoryName !== "" &&
        this.typeName !== ""
      ) {
        this.isbuy = false;
      } else {
        this.isbuy = true;
      }
    },
    // 加入购物车事件
    carAdd() {
      let obj = {
        img: require("../assets/imgs/s3.png"),
        content: "Apple iPhone 11 64G 白色 移动联通电信4G全网通手机",
        type:
          "选择：" +
          this.colorName +
          " " +
          this.versionName +
          " " +
          this.memoryName +
          " " +
          this.typeName,
        oldPrice: this.oldPrice,
        newPrice:
          this.worth + this.colorW + this.versionW + this.memoryW + this.typeW,
        maxNum: this.maxNum,
        num: this.cmdtNum,
      };
      this.$store.commit("commodiseAdd", obj);
      ElMessage.success({
        message: "恭喜你，宝贝已经加入购物车",
        type: "success",
        duration: 1500,
        showClose: true,
      });
    },
    // 加入订单时间
    orderAdd() {
      let date = new Date();
      let year = date.getFullYear(); // 返回当前日期的年
      let month = date.getMonth() + 1; // 月份 返回的月份小1个月
      month = month < 10 ? "0" + month : month;
      let dates = date.getDate(); // 返回的是几号
      dates = dates < 10 ? "0" + dates : dates;
      let obj = {
        img: require("../assets/imgs/s3.png"),
        content: "Apple iPhone 11 64G 白色 移动联通电信4G全网通手机",
        type:
          "选择：" +
          this.colorName +
          " " +
          this.versionName +
          " " +
          this.memoryName +
          " " +
          this.typeName,
        orderNumber: "78645876342837",
        orderTime: `${year}年${month}月${dates}日`,
        num: this.cmdtNum,
        total:
          this.worth + this.colorW + this.versionW + this.memoryW + this.typeW,
      };
      this.$store.commit("orderAdd", obj);
    },
  },
  setup() {
    const big = reactive({
      maskIsShow: false,
      bigIsShow: false,
    });
    function open() {
      big.maskIsShow = true;
      big.bigIsShow = true;
    }
    function close() {
      big.maskIsShow = false;
      big.bigIsShow = false;
    }
    function move(e) {
      var preview_img = document.querySelector(".preview_img");
      var mask = document.querySelector(".mask");
      var big = document.querySelector(".big");
      // (1). 先计算出鼠标在盒子内的坐标
      let x = e.pageX - preview_img.offsetLeft;
      let y = e.pageY - preview_img.offsetTop;
      // console.log(x, y);
      // (2) 减去盒子高度 300的一半 是 150 就是我们mask 的最终 left 和top值了
      // (3) 我们mask 移动的距离
      let maskX = x - mask.offsetWidth / 2;
      let maskY = y - mask.offsetHeight / 2;
      // (4) 如果x 坐标小于了0 就让他停在0 的位置
      // 遮挡层的最大移动距离
      let maskMax = preview_img.offsetWidth - mask.offsetWidth;
      if (maskX <= 0) {
        maskX = 0;
      } else if (maskX >= maskMax) {
        maskX = maskMax;
      }
      if (maskY <= 0) {
        maskY = 0;
      } else if (maskY >= maskMax) {
        maskY = maskMax;
      }
      mask.style.left = maskX + "px";
      mask.style.top = maskY + "px";
      // 3. 大图片的移动距离 = 遮挡层移动距离 * 大图片最大移动距离 / 遮挡层的最大移动距离
      // 大图
      let bigIMg = document.querySelector(".bigImg");
      // 大图片最大移动距离
      let bigMax = bigIMg.offsetWidth - big.offsetWidth;
      // 大图片的移动距离 X Y
      let bigX = (maskX * bigMax) / maskMax;
      let bigY = (maskY * bigMax) / maskMax;
      bigIMg.style.left = -bigX + "px";
      bigIMg.style.top = -bigY + "px";
    }
    return { big, open, close, move };
  },
};
</script>
  
<style scoped lang="scss">
@import url("../css/base.css");
@import url("../css/apple.css");
</style>