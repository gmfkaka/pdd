<template>
  <div class="login-container">
    <!--登录面板内容部分-->
    <div class="login-inner">
      <!--面板头部-->
      <div class="login-header">
        <div class="login-logo">
          <img src="./images/lk_logo_sm.png" alt="" width="250">
        </div>
        <!--面板标题-->
        <div class="login-header-title">
          <a href="javascript:;" :class="{current:loginMode}" @click="dealLoginMode(true)">验证码登录</a>
          <a href="javascript:;" :class="{current:!loginMode}" @click="dealLoginMode(false)">密码登录</a>
        </div>
      </div>
      <!--面板表单部分-->
      <div class="login-content">
        <form>
          <!--手机验证码登录部分-->
          <div :class="{current:loginMode}">
            <section class="login-message">
              <input type="tel" maxlength="11" placeholder="手机号" v-model="phone">
              <button 
                    v-if="!countDown" 
                    class="get-verification" 
                    :class="{phone_right:phoneRight}"
                    @click.prevent="getVeriftCode"
               >
                    获取验证码
               </button>
              <button 
                    v-else 
                    disabled="disabled" 
                    class="get-verification"
              >
                已发送({{countDown}}s)
              </button>
            </section>
            <section class="login-verification">
              <input type="tel" maxlength="8" placeholder="验证码">
            </section>
            <section class="login-hint">
              温馨提示：未注册拼多多帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">服务协议与隐私政策</a>
            </section>
          </div>
          <!--账号登录部分-->
          <div :class="{current:!loginMode}">
            <section>
              <section class="login-message">
                <input type="tel" maxlength="11" placeholder="用户名/手机/邮箱">
              </section>
              <section class="login-verification">
                <input type="passowrd" maxlength="18" placeholder="密码" v-if="pwdMode">
                <input type="text" maxlength="18" placeholder="密码" v-else>
                 <div class="switch-show">
                    <img @click.prevent="dealPwdMode(false)" :class="{on:pwdMode}" src="./images/hide_pwd.png" alt="" width="20">
                    <img @click.prevent="dealPwdMode(true)" :class="{on:!pwdMode}" src="./images/show_pwd.png" alt="" width="20">
                </div>
              </section>
              <section class="login-message">
                <input type="text" maxlength="11" placeholder="验证码">
                <img class="get-verification" src="./images/captcha.svg" alt="captcha">
              </section>
            </section>
          </div>
          <button class="login-submit">登录</button>
        </form>
        <button class="login-back" @click="$router.back()">返回</button>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name:"Login",
        data(){
            return {
                loginMode:true, //登录方式切换
                phone:"", //手机号码
                countDown:0, //倒计时
                pwdMode:true, //密码显示方式
                pwd:"" //密码
            }
        },
        computed:{
            // 验证手机号
            phoneRight(){
                return /^[1][3,4,5,7,8][0-9]{9}$/.test(this.phone)
            }
        },
        methods:{
            // 1.登录模式
            dealLoginMode(flag){
                this.loginMode = flag
            },
            // 2.前端验证码校验
            getVeriftCode(){
                //1.开启倒计时
                if(this.phoneRight){
                    this.countDown = 60;
                    this.intervalId = setInterval(()=>{
                        this.countDown--;
                        if(this.countDown==0){
                            clearInterval(this.intervalId)
                        }
                    },1000)
                }
            },
            // 3.密码显示方式
            dealPwdMode(flag){
                this.pwdMode =flag
            }
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .login-container
    width 100%
    height 100%
    background #fff
    .login-inner
      padding-top 60px
      width 80%
      margin 0 auto
      .login-header
        .login-logo
          font-size 40px
          font-weight bold
          color #de3025
          text-align center
        .login-header-title
          padding-top 40px
          padding-bottom 10px
          text-align center
          >a
            color #333
            font-size 14px
            padding-bottom 4px
            &:first-child
              margin-right 40px
            &.current
              color #de3025
              font-weight 700
              border-bottom 2px solid #de3025
      .login-content
        >form
          >div
            display none
            &.current
              display block
            input
              width 100%
              height 100%
              padding-left 8px
              box-sizing border-box
              border 1px solid #ddd
              border-radius 4px
              outline 0
              font 400 14px Arial
              &:focus
                border 1px solid #de3025
            .login-message
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .get-verification
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                border 0
                color #ccc
                font-size 14px
                background transparent
                &.phone_right
                  color #de3025
            .login-verification
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .switch-show
                position absolute
                right 10px
                top 12px
                img
                  display none
                img.on
                  display block
            .login-hint
              margin-top 12px
              color #999
              font-size 12px
              line-height 20px
              >a
                color #de3025
          .login-submit
            display block
            width 100%
            height 42px
            margin-top 30px
            border-radius 4px
            background #de3025
            color #fff
            text-align center
            font-size 16px
            line-height 42px
            border 0
        .login-back
          display block
          width 100%
          height 42px
          margin-top 15px
          border-radius 4px
          background transparent
          border: 1px solid #de3025
          color #de3025
          text-align center
          font-size 16px
          line-height 42px
</style>