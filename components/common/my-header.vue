<template>
  <div class="header">
    <div class="head">
      <div class="left"><nuxt-link to="/">Hello Mr</nuxt-link></div>
      <div class="right">
        <ul>
          <nuxt-link tag="li" to="/"><span>首页</span></nuxt-link>
          <nuxt-link tag="li" to="/hx/reg"><span>充值</span></nuxt-link>
          <nuxt-link tag="li" to="/hx/amend"><span>修改</span></nuxt-link>
          <nuxt-link tag="li" to="/hx/info"><span>关于</span></nuxt-link>
          <li @click="openLogin" v-if="!isLogin"><span>登录<i class="el-icon-caret-bottom"></i></span></li>
          <li v-else>
            <span  @click="userToggle = !userToggle">欢迎您<i class="el-icon-caret-bottom"></i></span>
            <div class="userShow" v-if="userToggle">
              <ol>
                <li>
                  <nuxt-link tag="span" to="/"><img src="/timg.jpg" alt=""></nuxt-link>
                  <span>{{loginInfo}}</span>
                </li>
                <li><span @click="removeLogin">退出登录</span></li>
              </ol>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <login :loginShow="loginShow" v-on:loginHide="loginHideFun"/>
    <!--<div class="login" v-if="loginShow">-->
      <!--<div class="bg"></div>-->
      <!--<el-collapse-transition name="el-zoom-in-center">-->
        <!--<div class="loginCon transition-box">-->
          <!--<div class="top">-->
            <!--<span>登录/注册</span>-->
            <!--<span class="el-icon-close icon" @click="loginClose"></span>-->
          <!--</div>-->
          <!--<div class="center">-->
            <!--<el-input type="text" v-model="userName" placeholder="请输入用户名"></el-input>-->
            <!--<el-input type="password" v-model="passWord" placeholder="请输入密码"></el-input>-->
          <!--</div>-->
          <!--<div class="bottom">-->
            <!--<el-button type="primary" @click="login" icon="el-icon-news">登录</el-button>-->
          <!--</div>-->
        <!--</div>-->
      <!--</el-collapse-transition>-->
    <!--</div>-->
  </div>
</template>

<script>
  import Login from '../common/my-login'
  import { mapMutations,mapState } from 'vuex'
  export default {
    data() {
      return {
        loginShow: false,
        userName:'',
        passWord:'',
        userToggle:false
      }
    },
    components:{Login},
    async fetch({store,params}){
      await store.dispatch(`getUser`)
    },
    computed:{
      ...mapState(['isLogin','loginInfo'])
    },
    methods:{
      ...mapMutations(['OUT_USER']),

      openLogin(){
        this.loginShow = !this.loginShow
        this.userToggle = false
      },
      loginHideFun:function(data){
        this.loginShow = data
      },
      removeLogin(){
        this.OUT_USER()
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "../../assets/style/common";
.header{
  @include fixed(top,0);
  background:#338;
  padding:0 20px;
  z-index: 1000;
  .head{
    @include flexCenter(center);
    @include wh(80%,60px);
    margin: 0 auto;
    & > div {
      flex:1;
      color:#fff;
      font-size:16px;
    }
    .left{
      a{
        font-size:28px;
        font-family: cursive;
        color:#ddeefb;
      }
    }
    .right{
      @include flexCenter(flex-end);
      ul{
        width:450px;
        display: flex;
        & > li{
          flex:1;
          @include flexCenter(center);
          cursor: pointer;
          height:40px;
          margin:20px 1px 0;
          position:relative;
          span{
            width:100%;
            text-align: center;
            color:#ddeefb;
          }
          .userShow{
            position:absolute;
            bottom:-111px;
            right:-21px;
            background:#338;
            @include borRadius(0 0 5px 5px);
            @include wh(127px,auto);
            transition: all .3s;
            ol{
              padding:10px 0;
              li{
                @include flexCenter(center);
                margin-bottom:10px;
                span{
                  flex:1;
                  img{
                    @include wh(50px,50px);
                    @include borRadius(50%);

                  }
                }
              }
            }
          }
        }
        /*li:nth-child(-n+4):hover{*/
          /*border-width: 1px 1px 0 1px;*/
          /*border-style: solid;*/
          /*border-color: #fff;*/
          /*border-radius: 5px 5px 0 0;*/
          /*margin:20px 0 0;*/
        /*}*/
        li.nuxt-link-exact-active{
          background:#fff;
          border-radius: 5px 5px 0 0;
          span{
            color:#999;
          }
        }
        li:last-child{
          padding-left:20px;
        }
      }
    }
  }
  .login{
    position:fixed;
    top:0;
    right:0;
    bottom:0;
    left:0;
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
}
</style>
