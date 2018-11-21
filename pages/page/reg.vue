<template>
  <div>
   <h2>{{msg}}</h2>
  </div>
</template>

<script>
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
      }
    },
  }
</script>

<style lang="scss" scoped>
h2{
  padding:400px 0;
  text-align: center;
}
</style>
