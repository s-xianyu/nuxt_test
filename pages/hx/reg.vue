<template>
  <div>
    <div class="carousel">
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in 6" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <ul class="ul">
      <nuxt-link
        v-for="item in lis"
        tag="li"
        :to="{path:'/hx/page/'+item.id}">{{item.name}}</nuxt-link>
    </ul>
    <nuxt-child></nuxt-child>
    <my-top/>
  </div>
</template>

<script>
  import MyTop from '../../components/common/my-top'
  export default {
    head(){
      return {
        title:'充值',
        meta:[
          {name:'description',content:'咸鱼的梦想就是搞搞挂起'},
          {name:'keywords',content:'充值,充值,充值,充值,充值,充值,充值,充值,充值'}
        ]
      }
    },
    data() {
      return {
        msg: 'reg',
        title:'充值',
        lis:[
          {name:'滚动置顶',id:'scroll'},
          {name:'其他',id:'2'},
        ]
      }
    },
    components:{
      MyTop
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/style/common";
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
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
  .ul{
    li{

      display: inline-block;
      @include wh(160px,50px);
      @include font(16px,50px);
      text-align: center;
      background-color: #f56c6c;
      border-color: #f56c6c;
      color:#fff;
      @include borRadius(4px);
      margin:0 10px;
      cursor: pointer;
      &:hover{
        background-color: #f56350;
        border-color: #f56350;
      }
    }
  }
</style>
