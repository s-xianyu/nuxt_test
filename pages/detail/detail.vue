<template>
  <h2>{{ msg }} id:{{id}}</h2>
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

<style scoped>

</style>
