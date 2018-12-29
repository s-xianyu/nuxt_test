<template>
  <h2>
    范围：{{assessPrice}}</br>
    <hr>
    车辆ID:{{car.carId}}</br>
    车辆名称:{{car.brandFullName}}
  </h2>
</template>

<script>
  import axios from '../../plugins/axios'

  export default {
    data() {
      return {
        msg: 'detail',
      }
    },
    async asyncData({ params }) {
      try{
        let uid = { id:params.id}
        const { data } = await axios.get(`/api/mobile/carDetail.json`,{params:uid})
        return data;
      }catch (error) {
        console.log(error)
      }
    }
  }
</script>

<style lang="scss" scoped>
  h2{
    padding:200px 0;
    text-align: center;
  }
</style>
