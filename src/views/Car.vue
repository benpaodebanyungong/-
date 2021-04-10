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
            购物车帮您一次性完成批量购买与付款，下单更便捷，付款更简单！<a
              href="javascript:;"
              class="style-orange"
              >如何使用购物车</a
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
        <h4>全部商品99</h4>
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
              v-for="index in commodise.length"
              :label="index"
              :key="index"
              :style="{ display: 'block', margin: '0' }"
              class="el_checkbox"
              >{{ index }}</el-checkbox
            >
          </el-checkbox-group>
          <div class="cmdtRight">
            <ul v-for="index in commodise.length" :key="index">
              <li>{{ commodise[index - 1] }}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="carBottom">
        <el-checkbox
          v-model="checkAll"
          @change="handleCheckAllChange"
          class="checkAll"
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
      isNever: false,
      isNone: false,
      isShow: true,
      isBackout: true,
      commodise: [
        // {
        //   img: require("../assets/imgs/测试.jpg"),
        //   content:
        //     "百草味精制猪肉脯零食特产小吃靖江特色风味肉干肉片网红休闲食品",
        //   type: "口味：精制猪肉脯155g（原味）",
        //   oldPrice: "￥39.8",
        //   newPrice: "￥23.9",
        //   num: 1,
        //   allPrice: "23.9",
        // },
        1,
        2,
        3,
        4,
        5,
      ],
      isAble: true,
      // 商品数据
      comsumption: 0,
      cmdtNum: 0,
      deleteNum: 1,
    };
  },
  methods: {
    handleCheckAllChange(val) {
      let index = 1;
      let arr = [];
      for (let i = 0; i < this.commodise.length; i++) {
        arr.push(index);
        index++;
      }
      this.checkedcommodise = val ? arr : [];
      // 用完之后恢复原值
      index = 1;
      arr = [];
      // console.log(val); //ture false
      if (val) {
        this.isAble = false;
      } else {
        this.isAble = true;
      }
    },
    handleCheckedcommodiseChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.commodise.length;
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
      } else {
        this.isAble = false;
      }
    },
    deleteAll() {
      // 无选择状态
      if (this.checkedcommodise.length == 0 && this.checkAll == false) {
        this.$alert("请选择宝贝", "提示", {
          confirmButtonText: "确定",
          confirmButtonClass: "confirmButtonClass",
          type: "warning",
        });
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
            // 显示撤销组件
            this.isNever = true;
          })
          .catch(() => {
            this.$message({
              type: "warning",
              message: "已取消删除",
              duration: 1500,
              showClose: true,
            });
            // 多选框恢复没选中状态
            this.checkAll = false;
            this.checkedcommodise = [];
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
              this.commodise.splice(this.chooseArr[i] - 1, 1);
            }
            // 多选框恢复没选中状态
            // this.checkAll = false;
            this.checkedcommodise = [];
          })
          .catch(() => {
            this.$message({
              type: "warning",
              message: "已取消删除",
              duration: 1500,
              showClose: true,
            });
            // 多选框恢复没选中状态
            // this.checkAll = false;
            this.checkedcommodise = [];
          });
      }
    },
    backout() {
      this.isNever = false;
      // 恢复假删除
      this.isBackout = true;
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
  },
};
</script>
  
<style scoped lang="scss">
@import url("../css/base.css");
@import url("../css/car.css");
</style>