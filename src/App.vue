<template>
  <div id="app">
    <!-- 回到顶部按钮 -->
    <el-backtop :bottom="90"></el-backtop>
    <!-- 在导航栏固定在头部 -->
    <el-affix :offset="0"
      ><div id="navigation-bar">
        <div class="head">
          <div class="fl">
            <router-link to="/index"
              ><li :style="{ 'font-weight': 'bold', color: 'rgb(255,128,0)' }">
                Love购物主页&emsp;
              </li></router-link
            >
            <li>
              <span :style="{ color: '#666' }">购买前请</span>
              <router-link to="/login">
                <span class="style-blue"> 登录 </span></router-link
              >
              <router-link to="/register"
                ><span class="style-blue">免费注册</span></router-link
              >
            </li>
          </div>
          <div class="fr">
            <router-link to="/order" target="_blank"
              ><li>我的订单</li></router-link
            >
            <li class="spacer"></li>
            <li>
              <a href="javsscript:;">我的Love购<i class="icomoon"></i></a>
            </li>
            <li class="spacer"></li>
            <li><a href="javsscript:;">Love购会员</a></li>
            <li class="spacer"></li>
            <li>
              <a href="javsscript:;">关注Love购<i class="icomoon"></i></a>
            </li>
            <li class="spacer"></li>
            <li>
              <a href="javsscript:;">网站导航<i class="icomoon"></i></a>
            </li>
          </div>
        </div>
      </div></el-affix
    >
    <router-view></router-view>
    <!-- 底部模块的制作 end -->
    <footer id="footer">
      <div class="footer">
        <div class="mod_service">
          <ul>
            <li>
              <img src="./assets/imgs/footer1.jpg" alt="" />
              <div class="service_txt">
                <h4>正品保障</h4>
                <p>正品保障,提供发票</p>
              </div>
            </li>
            <li>
              <img src="./assets/imgs/footer2.jpg" alt="" />
              <div class="service_txt">
                <h4>急速物流</h4>
                <p>如约送货，送货入门</p>
              </div>
            </li>
            <li>
              <img src="./assets/imgs/footer3.jpg" alt="" />
              <div class="service_txt">
                <h4>售后无忧</h4>
                <p>30天包退，365天包换</p>
              </div>
            </li>
            <li>
              <img src="./assets/imgs/footer4.jpg" alt="" />
              <div class="service_txt">
                <h4>帮助中心</h4>
                <p>您的购物指南</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="mod_help">
          <dl>
            <dt>服务指南</dt>
            <dd><a href="javsscript:;">购物流程</a></dd>
            <dd><a href="javsscript:;">会员介绍</a></dd>
            <dd><a href="javsscript:;">生活旅行/团购</a></dd>
            <dd><a href="javsscript:;">常见问题</a></dd>
            <dd><a href="javsscript:;">大家电</a></dd>
            <dd><a href="javsscript:;">联系客服</a></dd>
          </dl>
          <dl>
            <dt>服务指南</dt>
            <dd><a href="javsscript:;">购物流程</a></dd>
            <dd><a href="javsscript:;">会员介绍</a></dd>
            <dd><a href="javsscript:;">生活旅行/团购</a></dd>
            <dd><a href="javsscript:;">常见问题</a></dd>
            <dd><a href="javsscript:;">大家电</a></dd>
            <dd><a href="javsscript:;">联系客服</a></dd>
          </dl>
          <dl>
            <dt>服务指南</dt>
            <dd><a href="javsscript:;">购物流程</a></dd>
            <dd><a href="javsscript:;">会员介绍</a></dd>
            <dd><a href="javsscript:;">生活旅行/团购</a></dd>
            <dd><a href="javsscript:;">常见问题</a></dd>
            <dd><a href="javsscript:;">大家电</a></dd>
            <dd><a href="javsscript:;">联系客服</a></dd>
          </dl>
          <dl>
            <dt>服务指南</dt>
            <dd><a href="javsscript:;">购物流程</a></dd>
            <dd><a href="javsscript:;">会员介绍</a></dd>
            <dd><a href="javsscript:;">生活旅行/团购</a></dd>
            <dd><a href="javsscript:;">常见问题</a></dd>
            <dd><a href="javsscript:;">大家电</a></dd>
            <dd><a href="javsscript:;">联系客服</a></dd>
          </dl>
          <dl>
            <dt>服务指南</dt>
            <dd><a href="javsscript:;">购物流程</a></dd>
            <dd><a href="javsscript:;">会员介绍</a></dd>
            <dd><a href="javsscript:;">生活旅行/团购</a></dd>
            <dd><a href="javsscript:;">常见问题</a></dd>
            <dd><a href="javsscript:;">大家电</a></dd>
            <dd><a href="javsscript:;">联系客服</a></dd>
          </dl>
          <dl>
            <dt>&nbsp;帮助中心</dt>
            <dd>
              <img
                src="./assets/imgs/wx_lzh.jpg"
                alt=""
                :style="{ width: '90px', height: '90px' }"
              />
              <br />&nbsp;Contact U
            </dd>
          </dl>
        </div>
        <div class="mod_copyright">
          <div class="links">
            <el-button type="text" @click="openAbout">关于我们</el-button>
            |<el-button type="text" @click="openContact">联系我们</el-button> |
            联系客服 | 商家入驻 | 营销中心 | 手机Love购 | 友情链接 | 销售联盟 |
            Love购社区 | Love公益 | English Site | 与您联系
          </div>
          <div class="copyright">
            地址:广东省中山市电子科技大学中山学院&emsp;邮编:528400&emsp;电话:400-123-4000&emsp;传真:010-12345678&emsp;邮箱:1348237773@qq.com
            <br />
            粤ICP备08001234号&emsp;粤公网安备123456789101
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
  
<script>
import { reactive } from "vue";
import Indexjs from "./js/index.js";
export default {
  name: "App",
  data() {
    return {};
  },
  methods: {
    openAbout() {
      this.$alert("<p>&emsp;LZH</p>", "关于我们", {
        confirmButtonText: "确定",
        dangerouslyUseHTMLString: true,
      });
    },
    openContact() {
      this.$alert("<p>&emsp;扫右下方二维码即可添加微信！</p>", "联系我们", {
        confirmButtonText: "确定",
        dangerouslyUseHTMLString: true,
      });
    },
  },
  setup() {},
};
</script>
  
<style scoped lang="scss">
@import url("./css/base.css");
@import url("./app.css");
</style>
