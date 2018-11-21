<template>
  <div>
    <span v-if="!isLogin" @click="login">登录</span>
    <span v-else @click="removeLogin">退出</span>
    <login :loginShow="loginShow" v-on:loginHide="loginHideFun"/>

    <div class="carousel">
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in 6" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div>
      <button @click="getHello">1</button>
      <div class="">
        <transition name="fade" mode="out-in" appear>
          <p v-if="!mt">hello</p>
          <p v-else>world</p>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  import Login from '../../components/common/my-login'
  import { mapMutations, mapState } from 'vuex'
  export default {
    head(){
      return {
        title:'关于',
        meta:[
          {name:'description',content:'咸鱼的梦想就是搞搞挂起'},
          {name:'keywords',content:'关于,关于,关于,关于,关于,关于,关于,关于,关于'}
        ]
      }
    },
    data() {
      return {
        msg: 'info',
        loginShow:false,
        mt:false
      }
    },
    components:{
      Login
    },
    computed:{
      ...mapState(['isLogin'])
    },
    methods:{
      ...mapMutations(['OUT_USER']),
      login(){
        this.loginShow = !this.loginShow
      },
      loginHideFun(data){
        this.loginShow = data
      },
      removeLogin(){
        this.OUT_USER()
      },
      getHello(){
        this.mt = !this.mt
      },
    }
  }
</script>

<style lang="scss" scoped>
  h2{
    padding:400px 0;
    text-align: center;
  }
  .carousel{
    width:60%;
    margin:100px auto 0;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
