<template>
  <my-list/>
</template>

<script>
  import MyList from '../components/list/my-list'
  export default {
    head(){
      return {
        title:'首页0.0',
        meta:[
          {name:'description',content:'咸鱼的梦想就是搞搞挂起'},
          {name:'keywords',content:'咸鱼,咸鱼,咸鱼,咸鱼,咸鱼,咸鱼,咸鱼,咸鱼'}
        ]
      }
    },
    components:{
      MyList
    },
    data () {
      { project: 'default' }
    },
    async asyncData(app){

    },
  }
</script>

<style scoped>

</style>
