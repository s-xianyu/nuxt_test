<template>
  <h2>车辆ID:{{id}}</h2>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'detail',
        id:''
      }
    },
    mounted(){
      this.id = this.$route.query.id
    }
  }
</script>

<style lang="scss" scoped>
  h2{
    padding:200px 0;
    text-align: center;
  }
</style>
