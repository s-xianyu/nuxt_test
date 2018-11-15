<template>
  <div>
    <el-container>
      <el-header>
       <my-header/>
      </el-header>
      <el-main>
        <nuxt/>
      </el-main>
      <el-footer>
        <my-footer/>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
  import MyHeader from '../components/common/my-header'
  import MyFooter from '../components/common/my-footer'
  export default {
    components: {
      MyHeader,
      MyFooter
    }
  }
</script>
<style lang="scss" scoped>
  @import "../assets/style/common";
  main{
    width:100%;
    min-height:500px;
  }
</style>
