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
          <el-menu-item index="1"
            >所有订单{{ $store.state.order.length }}</el-menu-item
          >
          <el-menu-item index="2">待付款</el-menu-item>
          <el-menu-item index="3">待发货</el-menu-item>
          <el-menu-item index="4">待收货</el-menu-item>
          <el-menu-item index="5">待评价</el-menu-item>
        </el-menu>
      </div>
      <div class="orderNone" v-show="$store.state.isOrderNone">
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
      <div class="orderCenter" v-show="$store.state.isOrderShow">
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
            v-model="checkedorder"
            @change="handleCheckedorderChange"
            class="el_checkbox_group"
          >
            <el-checkbox
              v-for="index in $store.state.order.length"
              :label="index"
              :key="index"
              :style="{ display: 'block', margin: '0' }"
              class="el_checkbox"
              >{{ index }}</el-checkbox
            >
          </el-checkbox-group>
          <div class="cmdtRight">
            <ul v-for="index in $store.state.order.length" :key="index">
              <li>
                <router-link to="/phones"
                  ><img
                    class="small"
                    :src="$store.state.order[index - 1].img"
                    @mouseover="open(index)"
                    @mouseout="close(index)"
                    alt=""
                /></router-link>
                <div class="big" v-show="isBig(index)">
                  <img :src="$store.state.order[index - 1].img" alt="" />
                </div>
              </li>
              <li>
                <router-link to="/phones">{{
                  $store.state.order[index - 1].content
                }}</router-link>
                <p class="type">{{ $store.state.order[index - 1].type }}</p>
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
              <li>{{ $store.state.order[index - 1].orderNumber }}</li>
              <li>
                <p>{{ $store.state.order[index - 1].orderTime }}</p>
              </li>
              <li>
                {{ $store.state.order[index - 1].num }}
              </li>
              <li>￥{{ $store.state.order[index - 1].total.toFixed(2) }}</li>
              <li>
                <p><a href="javascript:;">确认收货</a></p>
                <p><a href="javascript:;" @click="del(index)">删除订单</a></p>
                <p><a href="javascript:;">评价</a></p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="orderBottom" v-show="$store.state.isOrderShow">
        <el-checkbox
          v-model="checkAll"
          @change="handleCheckAllChange"
          class="checkAll"
          :disabled="allDiabled"
          ><span :style="{ 'font-size': '12px' }">全选</span></el-checkbox
        >
        <a href="javascript:;" @click="delAll">批量删除订单</a>
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

      checkAll: false,
      checkedorder: [],
      chooseArr: [],
      chooseArr: [],
      big: -1,
      allDiabled: false,
      isAble: true,
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
    handleCheckAllChange(val) {
      let index = 1;
      let arr = [];
      for (let i = 0; i < this.$store.state.order.length; i++) {
        arr.push(index);
        index++;
      }
      this.checkedorder = val ? arr : [];
    },
    handleCheckedorderChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.$store.state.order.length;
      // 将用户选择的值降序后传递给数组chooseArr
      function up(a, b) {
        return b - a;
      }
      this.chooseArr = value.sort(up);
      if (checkedCount == 0) {
        this.isAble = true;
      } else {
        this.isAble = false;
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
          this.$store.state.order.splice(index - 1, 1);
          // 多选框恢复没选中状态
          this.checkAll = false;
          this.checkedorder = [];
          // 内容全部删除过后 显示订单为空组件
          if (this.$store.state.order.length === 0) {
            this.$store.state.isOrderNone = true;
            this.$store.state.isOrderShow = false;
          }
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
    delAll() {
      // 无选择状态
      if (this.checkedorder.length == 0 && this.checkAll == false) {
        this.$alert("请选择宝贝", "提示", {
          confirmButtonText: "确定",
          confirmButtonClass: "confirmButtonClass",
          type: "warning",
        }).catch((action) => {});
      }
      // 全选状态下
      else if (this.checkAll == true) {
        this.$confirm("确定要删除所有的订单吗?", "！该操作不可逆", {
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
            // 真删除（删除所有数据）
            this.$store.state.order.splice(0, this.$store.state.order.length);
            // 多选框恢复没选中状态
            this.checkAll = false;
            this.checkedorder = [];
            // 内容全部删除过后 显示订单为空组件
            if (this.$store.state.order.length === 0) {
              this.$store.state.isOrderNone = true;
              this.$store.state.isOrderShow = false;
            }
          })
          .catch(() => {
            this.$message({
              type: "warning",
              message: "已取消删除",
              duration: 1500,
              showClose: true,
            });
          });
      }
      // 部分选择状态
      else {
        this.$confirm("确定要删除这些宝贝吗?", "！该操作不可逆", {
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
            for (let i = 0; i < this.chooseArr.length; i++) {
              this.$store.state.order.splice(this.chooseArr[i] - 1, 1);
            }
            // 多选框恢复没选中状态
            // this.checkAll = false;
            this.checkedorder = [];
          })
          .catch(() => {
            this.$message({
              type: "warning",
              message: "已取消删除",
              duration: 1500,
              showClose: true,
            });
          });
      }
    },
  },
};
</script>
  
<style scoped lang="scss">
@import url("../css/base.css");
@import url("../css/order.css");
</style>