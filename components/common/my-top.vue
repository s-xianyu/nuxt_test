<template>
    <div class="top" v-if="scroll" @click="toTop">
        <i class="el-icon-upload2"></i>
    </div>
</template>
<script>
export default {
    data(){
      return {
        scroll:false
      }

    },
    mounted(){
      window.addEventListener('scroll',this.scrollTop);
    },
    methods:{
      scrollTop:function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        console.log(scrollTop)
        let WindowTop = window.outerHeight;
        if(scrollTop > 10){
         this.scroll = true;
        }else{
          this.scroll = false;
        }
      },
      toTop:function(){
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
        window.pageYOffset = 0
      }
    }
}
</script>
<style scoped lang="scss">
  @import "../../assets/style/common";
  .top{
    @include wh(50px,50px);
    position: fixed;
    right:20px;
    bottom:100px;
    z-index: 100;
    @include flexCenter(center);
    @include borRadius(50%);
    box-shadow: 0 0 10px #999;
    cursor: pointer;
    i{
      font-size: 18px;
    }
  }
</style>


