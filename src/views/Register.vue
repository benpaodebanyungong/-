<template>
  <div id="register">
    <div class="registerarea">
      <div class="head">
        <div class="neg_logo">
          <img class="neg_logo-img" src="../assets/imgs/logo.png" alt="" />
          <img
            class="neg_logo-name"
            src="../assets/imgs/logo-name.png"
            alt=""
          />
        </div>
        <span class="reg_name">注册新用户</span>
        <div class="reg_login">
          我已经注册，马上<router-link to="/login">登录</router-link>
        </div>
      </div>
      <div class="reg_center">
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
                <span
                  :class="[phsRight ? 'success' : 'error']"
                  v-show="phsShow"
                >
                  <!-- 正确错误提醒 -->
                  <i
                    :class="[phsRight ? 'el-icon-success' : 'el-icon-error']"
                  ></i
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
                <span
                  :class="[msgRight ? 'success' : 'error']"
                  v-show="msgShow"
                >
                  <i
                    :class="[msgRight ? 'el-icon-success' : 'el-icon-error']"
                  ></i
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
                  @focus="isHint"
                  class="inp"
                  oninput="value = value.replace( /[\u4E00-\u9FA5]/g,'')"
                ></el-input>
                <!-- 正确错误结果提醒 -->
                <span
                  :class="[pswRight ? 'success' : 'error']"
                  v-show="pswShow"
                >
                  <i
                    :class="[pswRight ? 'el-icon-success' : 'el-icon-error']"
                  ></i
                  >{{ inpPsw }}
                </span>
                <br />
                <span class="pswHint" v-show="pswHint"
                  >1~18个字符，由大写字母，小写字母、数字和符号的三种以上组合</span
                >
              </li>
              <li class="safe">
                安全程度： <em :class="[pswWeak ? 'ruo' : 'ruoOpa']">弱</em>
                <em :class="[pswCenter ? 'zhong' : 'zhongOpa']">中</em>
                <em :class="[pswStrong ? 'qiang' : 'qiangOpa']">强</em>
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
                  <i
                    :class="[agRight ? 'el-icon-success' : 'el-icon-error']"
                  ></i
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
                  :style="{ margin: '10px 0 0 70px' }"
                  >完成注册</el-button
                >
              </li>
            </ul>
          </form>
        </div>
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
      pswHint: false,

      againpsw: "",
      agShow: false,
      agRight: false,
      inpAg: "",

      checked: false,
      Disabled: true,

      pswWeak: false,
      pswCenter: false,
      pswStrong: false,
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
    isHint() {
      this.pswHint = true;
    },
    isPsw() {
      // this.pswHint = false;
      //判断密码强弱
      let Num = 0; //数字的个数
      let UpperCase = 0; // 大写字母的个数
      let LowerCase = 0; // 小写字母的个数
      let Sign = 0; // 符号的个数
      let types = 0; //类型的数量
      for (let i = 0; i < this.password.length; i++) {
        let char = this.password.charCodeAt(i); //将每一位转换为ascall码值
        // console.log(char);
        if (char >= 48 && char <= 57) {
          Num += 1;
        } else if (char >= 65 && char <= 90) {
          UpperCase += 1;
        } else if (char >= 97 && char <= 122) {
          LowerCase += 1;
        } else if (
          (char >= 32 && char <= 47) ||
          (char >= 58 && char <= 64) ||
          (char >= 91 && char <= 96) ||
          (char >= 123 && char <= 126)
        ) {
          Sign += 1;
        }
      }
      // 利用布尔类型返回值0和1来判断类型的数量
      types =
        Boolean(Num) + Boolean(UpperCase) + Boolean(LowerCase) + Boolean(Sign);
      if (types == 3 || types == 4) {
        this.pswWeak = false;
        this.pswCenter = false;
        this.pswStrong = true;
      } else if (types == 1) {
        this.pswWeak = true;
        this.pswCenter = false;
        this.pswStrong = false;
      } else if (types == 2) {
        this.pswWeak = false;
        this.pswCenter = true;
        this.pswStrong = false;
      } else {
        this.pswWeak = false;
        this.pswCenter = false;
        this.pswStrong = false;
      }
      /* console.log("输入的字符串中有数字" + Num + "个 大写字母" + UpperCase + "个 小写字母" + LowerCase + "个 符号" + Sign); */

      if (this.password.length == 0) {
        this.pswShow = true;
        this.pswRight = false;
        this.inpPsw = "密码不能为空";
      } else if (this.password.length !== 0 && this.pswStrong == false) {
        this.pswShow = true;
        this.pswRight = false;
        this.inpPsw = "密码强度过低";
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