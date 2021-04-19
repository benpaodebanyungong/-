<template>
  <div>
    <div id="login">
      <div class="login">
        <div class="head">
          <div class="neg_logo">
            <img class="neg_logo-img" src="../assets/imgs/logo.png" alt="" />
            <img
              class="neg_logo-name"
              src="../assets/imgs/logo-name.png"
              alt=""
            />
          </div>
          <span class="reg_name">欢迎登入</span>
          <div class="reg_login">
            没有登录账号，马上<router-link to="/register">注册</router-link>
          </div>
        </div>
        <div class="log_center">
          <div class="log_from">
            <el-tabs type="border-card" :stretch="true">
              <el-tab-pane label="账号登入">
                <ul>
                  <li>
                    <el-input
                      placeholder="手机/用户名"
                      prefix-icon="el-icon-s-custom"
                      v-model="idName"
                      @blur="isIdName"
                    >
                    </el-input>
                    <br />
                    <span
                      :class="[idRight ? 'success' : 'error']"
                      v-show="idShow"
                    >
                      <i
                        :class="[idRight ? 'el-icon-success' : 'el-icon-error']"
                      ></i
                      >{{ inpMsg }}
                    </span>
                  </li>
                  <li>
                    <el-input
                      placeholder="请输入密码"
                      prefix-icon="el-icon-s-goods"
                      v-model="password"
                      @blur="isPsw"
                      oninput="value = value.replace( /[\u4E00-\u9FA5]/g,'')"
                      show-password
                    ></el-input>
                    <br />
                    <span
                      :class="[pswRight ? 'success' : 'error']"
                      v-show="pswShow"
                    >
                      <i
                        :class="[
                          pswRight ? 'el-icon-success' : 'el-icon-error',
                        ]"
                      ></i
                      >{{ inpPsw }}
                    </span>
                  </li>
                  <li>
                    <a href="javascript:;"
                      ><i class="el-icon-mobile-phone">手机验证码登入</i></a
                    ><a href="javascript:;"
                      ><span class="mem_a">忘记密码？</span></a
                    >
                  </li>
                  <li>
                    <el-button type="success" @click="submit" round class="btn"
                      >登录</el-button
                    >
                  </li>
                  <li>
                    没有登录账号，马上<router-link to="/register"
                      ><span class="style-blue">注册</span></router-link
                    >
                  </li>
                  <el-divider :style="{ margin: '0' }"
                    >使用以下账号登入</el-divider
                  >
                  <li>
                    <a href="javascript:;"
                      ><img src="../assets/imgs/QQ.png" alt="" />&nbsp;QQ</a
                    >&nbsp;|&nbsp;
                    <a href="javascript:;"
                      ><img
                        src="../assets/imgs/WeChat.png"
                        alt=""
                      />&nbsp;微信</a
                    >&nbsp;|&nbsp;
                    <a href="javascript:;"
                      ><img
                        src="../assets/imgs/zhifubao.png"
                        alt=""
                      />&nbsp;支付宝</a
                    >&nbsp;|&nbsp;
                  </li>
                </ul>
              </el-tab-pane>
              <el-tab-pane label="扫码登入">功能暂未开发</el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "Login",
  data() {
    return {
      idName: "",
      password: "",

      idRight: false,
      idShow: false,
      inpMsg: "",

      pswRight: false,
      pswShow: false,
      inpPsw: "",
    };
  },
  methods: {
    submit() {},
    isIdName() {
      if (this.idName.length == 0) {
        this.idShow = true;
        this.idRight = false;
        this.inpMsg = "手机/用户名不能为空！";
      } else {
        this.idShow = false;
      }
    },
    isPsw() {
      if (this.password.length == 0) {
        this.pswShow = true;
        this.pswRight = false;
        this.inpPsw = "密码不能为空";
      } else {
        this.pswShow = false;
      }
    },
    // 登入按钮
    submit() {
      this.$confirm("保存信息, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          if (this.idName == "帅气的华" || this.idName == "13599721590") {
            this.$message({
              type: "success",
              message: "登入成功!",
            });
            // 成功后跳转页面
            this.$router.push({ path: "/" });
            // 显示为用户
            this.$store.state.isUser = true;
          } else {
            this.$message({
              type: "error",
              message: "账户名与密码不匹配，请重新输入",
            });
            // 清空输入框
            this.idName = "";
            this.password = "";
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消保存",
          });
        });
    },
  },
};
</script>
  
<style scoped lang="scss">
@import url("../css/base.css");
@import url("../css/login.css");
</style>