<template>
  <div class="login" v-if="loginShow">
    <div class="bg"></div>
    <el-collapse-transition name="el-zoom-in-center">
      <div class="loginCon transition-box">
        <div class="top">
          <span>登录/注册</span>
          <span class="el-icon-close icon" @click="loginClose"></span>
        </div>
        <div class="center">
          <el-input type="text" v-model="userName" placeholder="请输入用户名"></el-input>
          <el-input type="password" v-model="passWord" placeholder="请输入密码"></el-input>
        </div>
        <div class="bottom">
          <el-button type="primary" @click="login" icon="el-icon-news">登录</el-button>
        </div>
      </div>
    </el-collapse-transition>
  </div>
</template>

<script>
  import { mapMutations,mapActions } from 'vuex'
  export default {
    data() {
      return {
        userName:'',
        passWord:'',
        userToggle:false
      }
    },
    mounted(){
      this.getUser()
    },
    props:['loginShow'],
    methods:{
      ...mapMutations(['RECORD_USER']),
      ...mapActions(['getUser']),
      login(){
        if(!this.userName){
          this.$alert('请输入用户名','提示',{
            confirmButtonText:'确定',
          })
        }else if(!this.passWord){
          this.$alert('请输入密码','提示',{
            confirmButtonText:'确定',
          })
        }else{
          let userInfo = this.userName
          this.RECORD_USER(userInfo)
          this.$emit('loginHide',!this.loginShow)
        }
      },
      loginClose(){
        this.$emit('loginHide',!this.loginShow)
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/style/common";
  .login{
    position:fixed;
    top:0;
    right:0;
    bottom:0;
    left:0;
    z-index: 100;
    .bg{
      position:absolute;
      top:0;
      right:0;
      bottom:0;
      left:0;
      background:rgba(0,0,0,.3);
    }
    .loginCon{
      @include center;
      @include wh(420px,auto);
      background:#fff;
      @include borRadius(8px);
      border:8px solid #409eff;
      .top{
        @include flexCenter(center);
        margin:0 8px;
        height:55px;
        line-height: 55px;
        border-bottom:2px solid #409eff;
        & > span{
          flex:1;
          font-size:16px;
          color:#409eff;
          font-weight: bolder;
          padding:0 10px;
        }
        span.icon{
          font-size:26px;
          @include flexCenter(flex-end);
          cursor: pointer;
          font-weight: normal;
          color:#999;
        }
      }
      .center{
        padding: 20px;
        .el-input{
          margin:10px 0;
        }
      }
      .bottom{
        padding:0 20px;
        button{
          @include wh(100%,45px);
          display: block;
          margin:0 auto 20px;
        }
      }
    }
  }
</style>
