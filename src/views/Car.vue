<template>
  <div id="shoppingCar">
    <search></search>
    <div class="shoppingCar">
      <div class="carHead">
        <h4>全部商品99</h4>
        <div class="right">
          已选商品（不含运费）：<span class="style-red">{{
            comsumption.toFixed(2)
          }}</span
          >&nbsp;
          <el-button size="mini" type="danger" :disabled="true">结算</el-button>
        </div>
      </div>
      <div class="carCenter">
        <div class="title">
          <el-checkbox
            :indeterminate="isIndeterminate"
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
        <div class="center">
          <el-checkbox-group
            v-model="checkedcommodise"
            @change="handleCheckedcommodiseChange"
          >
            <el-checkbox
              v-for="value in commodise"
              :label="value"
              :key="value"
              :style="{ display: 'block' }"
              class="checkbox"
              ><span :style="{ 'font-size': '12px' }">{{ value }}</span>
            </el-checkbox>
          </el-checkbox-group>
        </div>
      </div>
      <div>
        <div class="carBottom">
          <el-checkbox
            :indeterminate="isIndeterminate"
            v-model="checkAll"
            @change="handleCheckAllChange"
            class="checkAll"
            ><span :style="{ 'font-size': '12px' }">全选</span></el-checkbox
          >
          <tr class="tr2">
            <td>
              <el-button
                type="danger"
                :disabled="true"
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
            <td><a href="javascript:;">删除</a></td>
            <td><a href="javascript:;">移入收藏夹</a></td>
            <td><a href="javascript:;">分享</a></td>
          </tr>
        </div>
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
      commodise: ["1", "2", "3", "4"],
      isIndeterminate: false,
      // 商品数据
      comsumption: 0,
      cmdtNum: 0,
    };
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedcommodise = val ? this.commodise : [];
      this.isIndeterminate = false;
    },
    handleCheckedcommodiseChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.commodise.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.commodise.length;
    },
  },
};
</script>
  
<style scoped lang="scss">
@import url("../css/base.css");
@import url("../css/car.css");
</style>