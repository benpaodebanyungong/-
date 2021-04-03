<template>
  <div id="register">
    <div class="registerarea">
      <h3>
        注册新用户
        <div class="login">我有账号，去<a href="#">登陆</a></div>
      </h3>
      <div class="reg_form">
        <form action="">
          <ul>
            <li>
              <label for="">手机号：</label>
              <!-- 输入框 -->
              <el-input
                placeholder="请输入手机号码"
                clearable
                maxlength="11"
                v-model="phones"
                @blur="isPhones"
                class="inp"
                oninput="value = value.replace(/[^\d]/g,'')"
              ></el-input>
              <!-- 结果提醒 -->
              <span :class="[phsRight ? 'success' : 'error']" v-show="phsShow">
                <!-- 正确错误提醒 -->
                <i :class="[phsRight ? 'success_icon' : 'error_icon']"></i
                >{{ inpPhs }}
              </span>
            </li>
            <li>
              <label for="">短信验证码：</label>
              <!-- 输入框 -->
              <el-input
                placeholder="请输入短信验证码"
                clearable
                maxlength="6"
                v-model="message"
                @blur="isMsg"
                class="inp"
                oninput="value = value.replace(/[^\d]/g,'')"
              ></el-input>
              <!-- 正确错误结果提醒 -->
              <span :class="[msgRight ? 'success' : 'error']" v-show="msgShow">
                <i :class="[msgRight ? 'success_icon' : 'error_icon']"></i
                >{{ inpMsg }}
              </span>
            </li>
            <li>
              <label for="">登录密码：</label>
              <!-- 输入框 -->
              <el-input
                placeholder="请输入登录密码"
                show-password
                maxlength="18"
                v-model="password"
                @blur="isPsw"
                class="inp"
                oninput="value = value.replace( /[\u4E00-\u9FA5]/g,'')"
              ></el-input>
              <!-- 正确错误结果提醒 -->
              <span :class="[pswRight ? 'success' : 'error']" v-show="pswShow">
                <i :class="[pswRight ? 'success_icon' : 'error_icon']"></i
                >{{ inpPsw }}
              </span>
            </li>
            <li class="safe">
              安全程度： <em class="ruo">弱</em> <em class="zhong">中</em>
              <em class="qiang">强</em>
            </li>
            <li>
              <label for="">确认密码：</label>
              <el-input
                placeholder="请再次输入登录密码"
                show-password
                maxlength="18"
                v-model="againpsw"
                @blur="isAgPsw"
                class="inp"
                oninput="value = value.replace( /[\u4E00-\u9FA5]/g,'')"
              ></el-input>
              <span :class="[agRight ? 'success' : 'error']" v-show="agShow">
                <i :class="[agRight ? 'success_icon' : 'error_icon']"></i
                >{{ inpAg }}
              </span>
            </li>
            <li class="agree">
              <!-- <el-checkbox v-model="checked" @click="isCk">同意协议并注册 <a href="javascript:;">《知晓用户协议》</a></el-checkbox> -->
              <input type="checkbox" name="" @click="isCk($event)" />
              同意协议并注册 <a href="javascript:;">《知晓用户协议》</a>
            </li>
            <li>
              <el-button
                type="success"
                @click="submit"
                round
                :disabled="Disabled"
                class="btn"
                :style="{ margin: '30px 0px 0px 70px' }"
                >完成注册</el-button
              >
            </li>
          </ul>
        </form>
      </div>
    </div>
  </div>
</template>
  
<script>
import { reactive } from "vue";
export default {
  name: "Register",
  data() {
    return {
      phones: "",
      phsShow: false,
      phsRight: false,
      inpPhs: "",

      message: "",
      msgShow: false,
      msgRight: false,
      inpMsg: "",

      password: "",
      pswShow: false,
      pswRight: false,
      inpPsw: "",

      againpsw: "",
      agShow: false,
      agRight: false,
      inpAg: "",

      checked: false,
      Disabled: true,
    };
  },
  methods: {
    isPhones() {
      if (this.phones.length == 11) {
        this.phsShow = true;
        this.phsRight = true;
        this.inpPhs = "输入格式正确!";
      } else {
        this.phsShow = true;
        this.phsRight = false;
        this.inpPhs = "格式错误，请输入11位的手机号码!";
      }
      // 每更改一次，就对按钮状态进行判断
      this.isDisabled();
    },
    isMsg() {
      if (this.message.length == 6) {
        this.msgShow = true;
        this.msgRight = true;
        this.inpMsg = "输入格式正确";
      } else {
        this.msgShow = true;
        this.msgRight = false;
        this.inpMsg = "格式错误，请输入6位的短信验证码!";
      }
      this.isDisabled();
    },
    isPsw() {
      if (this.password.length == 0) {
        this.pswShow = true;
        this.pswRight = false;
        this.inpPsw = "密码不能为空";
      } else {
        this.pswShow = true;
        this.pswRight = true;
        this.inpPsw = "输入格式正确";
        // 当先写入第二次密码，后写入第一次密码，对第二次已显示的结果进行新的判断
        if (this.againpsw === this.password && this.againpsw.length !== 0) {
          // this.agShow = true;
          this.agRight = true;
          this.inpAg = "密码输入一致";
        } else {
          // this.agShow = true;
          this.agRight = false;
          this.inpAg = "密码输入不一致";
        }
        this.isDisabled();
      }
      this.isDisabled();
    },
    isAgPsw() {
      if (this.againpsw === this.password && this.againpsw.length !== 0) {
        this.agShow = true;
        this.agRight = true;
        this.inpAg = "密码输入一致";
      } else {
        this.agShow = true;
        this.agRight = false;
        this.inpAg = "密码输入不一致";
      }
      this.isDisabled();
    },
    isCk(e) {
      // 给点击事件传入参数$event,从$event里面获取这个checkbox 选中状态true或false
      this.checked = e.target.checked;
      this.isDisabled();
    },
    isDisabled() {
      // 当所有的条件都为真，激活按钮
      if (
        this.phsShow == true &&
        this.phsRight == true &&
        this.msgShow == true &&
        this.msgRight == true &&
        this.pswShow == true &&
        this.pswRight == true &&
        this.agShow == true &&
        this.agRight == true &&
        this.checked == true
      ) {
        this.Disabled = false;
      } else {
        this.Disabled = true;
        // console.log('没成功');
        // console.log(this.phsShow,this.phsRight,this.msgShow,this.msgRight,this.pswShow,this.pswRight,this.agShow,this.agRight,this.checked);
      }
    },
    // 提交按钮
    submit() {
      this.$confirm("保存信息, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "保存成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消保存",
          });
        });
    },
  },
  setup() {
    // let regInput = reactive({
    // });
    // return{regInput};
  },
};
</script>
  
<style scoped lang="scss">
@import url("../css/base.css");
@import url("../css/register.css");
</style>