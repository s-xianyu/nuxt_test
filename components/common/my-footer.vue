<template>
  <div class="footer">
    <p class="end">2018.11 . xianyu    Demo</p>
    <div class="end">The dream of salted fish is to hang high</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'm-footer'
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "../../assets/style/common";
.footer{
  padding:0 30px;
  margin-bottom:30px;
  color:#666;
  text-align: right;
  .end{
    padding:10px 50px 0 0;
  }
}
</style>
