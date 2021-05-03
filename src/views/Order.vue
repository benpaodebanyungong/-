<template>
  <div id="order">
    <personal></personal>
    <div class="order">
      <div class="orderHead">
        <el-menu
          class="el-menu-demo"
          :default-active="activeIndex"
          mode="horizontal"
          text-color="#000000"
          active-text-color="#ff8000"
        >
          <el-menu-item index="1">所有订单3</el-menu-item>
          <el-menu-item index="2">待付款</el-menu-item>
          <el-menu-item index="3">待发货</el-menu-item>
          <el-menu-item index="4">待收货3</el-menu-item>
          <el-menu-item index="5">待评价</el-menu-item>
        </el-menu>
      </div>
      <div class="orderNone" v-show="isNone">
        <div class="ps">
          <p>这里没有订单哦，赶紧行动吧！您可以：</p>
          <p>
            看看
            <router-link to="/car" class="style-orange">我的购物车</router-link>
          </p>
          <p>
            看看
            <router-link to="/" class="style-orange">商品首页</router-link>
          </p>
        </div>
      </div>
      <div class="orderCenter" v-show="isShow">
        <div class="title">
          <el-checkbox
            v-model="checkAll"
            @change="handleCheckAllChange"
            class="checkAll"
            :disabled="allDiabled"
            ><span :style="{ 'font-size': '12px' }">全选</span></el-checkbox
          >
          <tr>
            <td>商品信息</td>
            <td>订单号</td>
            <td>时间</td>
            <td>数量</td>
            <td>金额</td>
            <td>操作</td>
          </tr>
        </div>
        <div class="center">
          <el-checkbox-group
            v-model="checkedcommodise"
            @change="handleCheckedcommodiseChange"
            class="el_checkbox_group"
          >
            <el-checkbox
              v-for="index in $store.state.commodise.length"
              :label="index"
              :key="index"
              :style="{ display: 'block', margin: '0' }"
              class="el_checkbox"
              >{{ index }}</el-checkbox
            >
          </el-checkbox-group>
          <div class="cmdtRight">
            <ul v-for="index in $store.state.commodise.length" :key="index">
              <li>
                <router-link to="/phones"
                  ><img
                    class="small"
                    :src="$store.state.commodise[index - 1].img"
                    @mouseover="open(index)"
                    @mouseout="close(index)"
                    alt=""
                /></router-link>
                <div class="big" v-show="isBig(index)">
                  <img :src="$store.state.commodise[index - 1].img" alt="" />
                </div>
              </li>
              <li>
                <router-link to="/phones">{{
                  $store.state.commodise[index - 1].content
                }}</router-link>
                <p class="payment">
                  <el-tooltip
                    content="支持信用卡支付"
                    placement="bottom-start"
                    effect="light"
                  >
                    <img src="../assets/imgs/xcard.png" />
                  </el-tooltip>
                  <el-tooltip
                    content="支持微信支付"
                    placement="bottom-start"
                    effect="light"
                  >
                    <img src="../assets/imgs/WeChat.png" />
                  </el-tooltip>
                  <el-tooltip
                    content="支持支付宝支付"
                    placement="bottom-start"
                    effect="light"
                  >
                    <img src="../assets/imgs/zhifubao.png" />
                  </el-tooltip>
                </p>
              </li>
              <li>233534656738403244555</li>
              <li>
                <p>2021年4月21日</p>
              </li>
              <li>
                {{ $store.state.commodise[index - 1].num }}
              </li>
              <li>
                ￥{{
                  (
                    $store.state.commodise[index - 1].newPrice *
                    $store.state.commodise[index - 1].num
                  ).toFixed(2)
                }}
              </li>
              <li>
                <p><a href="javascript:;">确认收货</a></p>
                <p><a href="javascript:;" @click="del(index)">删除订单</a></p>
                <p><a href="javascript:;">评价</a></p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="orderBottom" v-show="isShow">
        <el-checkbox
          v-model="checkAll"
          @change="handleCheckAllChange"
          class="checkAll"
          :disabled="allDiabled"
          ><span :style="{ 'font-size': '12px' }">全选</span></el-checkbox
        >
        <a href="javascript">批量删除订单</a>
      </div>
    </div>
  </div>
</template>
  
<script>
import personal from "../components/Personal.vue";
export default {
  components: { personal },
  name: "Order",
  data() {
    return {
      activeIndex: "1",
      isNone: false,

      checkAll: false,
      checkedcommodise: [],
      chooseArr: [],
      big: -1,
      allDiabled: false,
      isShow: true,
      isAble: true,
      // 商品数据
      comsumption: 0,
      cmdtNum: 0,
    };
  },
  methods: {
    isBig(index) {
      if (this.big === index) return true;
      return false;
    },
    open(index) {
      this.big = index;
    },
    close(index) {
      this.big = -1;
    },
    handleChange() {
      // 全选状态下
      if (this.checkAll) {
        this.comsumption = 0;
        for (let i = 0; i < this.$store.state.commodise.length; i++) {
          this.comsumption +=
            this.$store.state.commodise[i].newPrice *
            this.$store.state.commodise[i].num;
        }
      } else {
        this.comsumption = 0;
        for (let i = 0; i < this.chooseArr.length; i++) {
          this.comsumption +=
            this.$store.state.commodise[this.chooseArr[i] - 1].newPrice *
            this.$store.state.commodise[this.chooseArr[i] - 1].num;
        }
      }
    },
    handleCheckAllChange(val) {
      let index = 1;
      let arr = [];
      for (let i = 0; i < this.$store.state.commodise.length; i++) {
        arr.push(index);
        index++;
      }
      this.checkedcommodise = val ? arr : [];
      // 用完之后恢复原值
      index = 1;
      arr = [];
      // console.log(val); //ture false
      if (val) {
        this.cmdtNum = this.$store.state.commodise.length;
        for (let i = 0; i < this.$store.state.commodise.length; i++) {
          this.comsumption +=
            this.$store.state.commodise[i].newPrice *
            this.$store.state.commodise[i].num;
        }
        this.isAble = false;
      } else {
        this.cmdtNum = 0;
        this.comsumption = 0;
        this.isAble = true;
      }
    },
    handleCheckedcommodiseChange(value) {
      let checkedCount = value.length;
      this.cmdtNum = value.length;
      this.checkAll = checkedCount === this.$store.state.commodise.length;
      // 将用户选择的值降序后传递给数组chooseArr
      function up(a, b) {
        return b - a;
      }
      this.chooseArr = value.sort(up);
      // console.log(this.chooseArr);
      // console.log(this.chooseArr[0]);
      // console.log(value); //[] index[1,2]
      if (checkedCount == 0) {
        this.isAble = true;
        this.comsumption = 0;
      } else {
        this.isAble = false;
        // 每点击一次就计算一次最终价格，保证数据的实时更新
        this.comsumption = 0;
        for (let i = 0; i < this.chooseArr.length; i++) {
          // console.log(this.$store.state.commodise[this.chooseArr[i] - 1].newPrice);
          // console.log(this.$store.state.commodise[this.chooseArr[i] - 1].num);
          this.comsumption +=
            this.$store.state.commodise[this.chooseArr[i] - 1].newPrice *
            this.$store.state.commodise[this.chooseArr[i] - 1].num;
          // console.log(this.comsumption);
        }
      }
    },
    del(index) {
      this.$confirm("确定要删除已完成订单?", "！该操作不可逆", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        confirmButtonClass: "confirmButtonClass",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!",
            duration: 1500,
            showClose: true,
          });
          // 真删除（删除数据）
          this.$store.state.commodise.splice(index - 1, 1);
          // 更改购物车的数量显示
          this.$store.state.carNum = this.$store.state.commodise.length;
          // 多选框恢复没选中状态
          this.checkAll = false;
          this.checkedcommodise = [];
          // 内容全部删除过后 显示购物车为空组件
          if (this.$store.state.commodise.length === 0) {
            this.isNone = true;
            this.isShow = false;
          }
          // 价格清空
          this.comsumption = 0;
          // 商品数量清空
          this.cmdtNum = 0;
        })
        .catch(() => {
          this.$message({
            type: "warning",
            message: "已取消删除",
            duration: 1500,
            showClose: true,
          });
        });
    },
  },
};
</script>
  
<style scoped lang="scss">
@import url("../css/base.css");
@import url("../css/order.css");
</style>