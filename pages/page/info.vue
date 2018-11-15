<template>
  <h2>我是关于页面</h2>
</template>

<script>
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
        msg: 'info'
      }
    }
  }
</script>

<style lang="scss" scoped>
  h2{
    padding:400px 0;
    text-align: center;
  }
</style>
