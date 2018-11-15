<template>
  <h2>我是设置页面</h2>
</template>

<script>
  export default {
    head(){
      return {
        title:'设置',
        meta:[
          {name:'description',content:'咸鱼的梦想就是搞搞挂起'},
          {name:'keywords',content:'设置,设置,设置,设置,设置,设置,设置,设置,设置,设置'}
        ]
      }
    },
    data() {
      return {
        msg: 'amend'
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
