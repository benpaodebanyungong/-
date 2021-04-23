<template>
  <div id="shoppingCar">
    <search></search>
    <div class="cmdtNone" v-show="isNone">
      <!-- 面包导航栏 -->
      <div class="nav">
        <div class="nav_left">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>我的Love购</el-breadcrumb-item>
            <el-breadcrumb-item>我的购物车</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="nav_right">
          <p>
            购物车帮您一次性完成批量购买与付款，下单更便捷，付款更简单！
            <el-button
              type="text"
              @click="openAboutCar"
              :style="{ color: '#ff8000', 'font-size': '12px' }"
              >如何使用购物车？</el-button
            >
          </p>
        </div>
      </div>
      <div class="ps">
        <p>您的购物车还是空的，赶紧行动吧！您可以：</p>
        <p>看看 <a href="javascript:;" class="style-orange">我的收藏夹</a></p>
        <p>
          看看
          <router-link to="/order" class="style-orange"
            >已经购买的宝贝</router-link
          >
        </p>
      </div>
    </div>
    <div class="shoppingCar" v-show="isShow">
      <div class="carHead">
        <h4>全部商品{{ $store.state.carNum }}</h4>
        <div class="right">
          已选商品（不含运费）：<span class="style-red">{{
            comsumption.toFixed(2)
          }}</span
          >&nbsp;
          <el-button size="mini" type="danger" :disabled="isAble"
            >结算</el-button
          >
        </div>
      </div>
      <div class="carCenter">
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
            <td>配置</td>
            <td>单价</td>
            <td>数量</td>
            <td>金额</td>
            <td>操作</td>
          </tr>
        </div>
        <div class="cmdtNever" v-show="isNever">
          <div class="border">
            <p>
              成功删除{{ deleteNum }}宝贝，如有误，可<a
                href="javascript:;"
                @click="backout"
                >撤销本次删除</a
              >
            </p>
          </div>
        </div>
        <div class="center" v-show="isBackout">
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
              <li>{{ $store.state.commodise[index - 1].type }}</li>
              <li>
                <p class="rmb1">
                  ￥{{ $store.state.commodise[index - 1].oldPrice.toFixed(2) }}
                </p>
                <p class="rmb2">
                  ￥{{ $store.state.commodise[index - 1].newPrice.toFixed(2) }}
                </p>
              </li>
              <li>
                <el-input-number
                  size="mini"
                  v-model="$store.state.commodise[index - 1].num"
                  :style="{ width: '100px' }"
                  @change="handleChange"
                  :min="1"
                  :max="$store.state.commodise[index - 1].maxNum"
                ></el-input-number>
                <p>限量{{ $store.state.commodise[index - 1].maxNum }}件</p>
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
                <p><a href="javascript:;">移入收藏夹</a></p>
                <p><a href="javascript:;" @click="del(index)">删除</a></p>
                <p><a href="javascript:;">相识宝贝</a></p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="carBottom">
        <el-checkbox
          v-model="checkAll"
          @change="handleCheckAllChange"
          class="checkAll"
          :disabled="allDiabled"
          ><span :style="{ 'font-size': '12px' }">全选</span></el-checkbox
        >
        <tr class="tr2">
          <td>
            <el-button
              type="danger"
              :disabled="isAble"
              :style="{ width: '100px', height: '50.4px' }"
              >结算</el-button
            >
          </td>
          <td>{{ comsumption.toFixed(2) }}</td>
          <td>合计（不含运费）：</td>
          <td>
            已选择商品 <span class="cmdtnum">{{ cmdtNum }}</span
            >件
          </td>
        </tr>
        <tr class="tr1">
          <td><a href="javascript:;" @click="deleteAll">删除</a></td>
          <td><a href="javascript:;">移入收藏夹</a></td>
          <td><a href="javascript:;">分享</a></td>
        </tr>
      </div>
    </div>
  </div>
</template>
  
<script>
import Search from "../components/Search.vue";
export default {
  components: { Search },
  name: "Car",
  data() {
    return {
      checkAll: false,
      checkedcommodise: [],
      chooseArr: [],
      big: -1,
      allDiabled: false,
      isNever: false,
      isNone: false,
      isShow: true,
      isBackout: true,
      isAble: true,
      // 商品数据
      comsumption: 0,
      cmdtNum: 0,
      deleteNum: 1,
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
    deleteAll() {
      // 无选择状态
      if (this.checkedcommodise.length == 0 && this.checkAll == false) {
        this.$alert("请选择宝贝", "提示", {
          confirmButtonText: "确定",
          confirmButtonClass: "confirmButtonClass",
          type: "warning",
        }).catch((action) => {});
      }
      // 全选状态下
      else if (this.checkAll == true) {
        this.$confirm("确定要删除这些宝贝吗?", "提示", {
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
            // 假删除
            this.isBackout = false;
            // 多选框恢复没选中状态
            this.checkAll = false;
            // 价格清空
            this.comsumption = 0;
            // 商品数量清空
            this.cmdtNum = 0;
            // 显示撤销组件
            this.isNever = true;
            this.deleteNum = this.$store.state.commodise.length;
            //禁用全选框
            this.allDiabled = true;
            // 禁用结算按钮
            this.isAble = true;
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
              this.$store.state.commodise.splice(this.chooseArr[i] - 1, 1);
            }
            // 更改购物车的数量显示
            this.$store.state.carNum = this.$store.state.commodise.length;
            // 多选框恢复没选中状态
            // this.checkAll = false;
            this.checkedcommodise = [];
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
      }
    },
    backout() {
      this.isNever = false;
      // 恢复假删除
      this.isBackout = true;
      //恢复全选框
      this.allDiabled = false;
      //恢复结算按钮
      this.isAble = false;
      // 多选框恢复没选中状态
      this.checkAll = false;
      this.checkedcommodise = [];
      this.$message({
        type: "success",
        duration: 1500,
        showClose: true,
        message: "您已经成功恢复删除宝贝",
      });
    },
    openAboutCar() {
      this.$alert(
        "<p>一、将宝贝加入购物车</p><p>二、查看购物车</p><p>三、管理购物车</p><p>四、确认购买</p>",
        "关于购物车",
        {
          confirmButtonText: "确定",
          dangerouslyUseHTMLString: true,
          type: "success",
          confirmButtonClass: "confirmButtonClass",
        }
      ).catch((action) => {});
    },
  },
};
</script>
  
<style scoped lang="scss">
@import url("../css/base.css");
@import url("../css/car.css");
</style>