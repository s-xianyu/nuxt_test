<template>
  <div>
    <el-button  v-if="!isLogin" @click="login" type="success">登录</el-button>
    <el-button v-else @click="removeLogin" type="danger">退出</el-button>
    <login :loginShow="loginShow" v-on:loginHide="loginHideFun"/>
    <el-button id="onc" type="primary" round>引入jqery 点击事件</el-button>
    <span class="number">0</span>
    <div class="input">
      初次上牌日期：
      <el-select v-model="value2" placeholder="选择年份">
        <el-option
          v-for="item in options2"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled">
        </el-option>
      </el-select>
      <el-select v-if="value2 == ''? '' :'disabled'" v-model="value3" placeholder="选择月份">
        <el-option
          v-for="item in options3"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled">
        </el-option>
      </el-select>
    </div>
    <my-top/>
  </div>
</template>

<script>
  import Login from '../../components/common/my-login'
  import MyTop from '../../components/common/my-top'
  import { mapMutations, mapState } from 'vuex'
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
        msg: 'info',
        loginShow:false,
        mt:false,
        options2: [{
          value: '2019',
          label: '2019'
        }, {
          value: '2018',
          label: '2018',
          disabled: true
        }, {
          value: '2017',
          label: '2017'
        }, {
          value: '2016',
          label: '2016'
        }, {
          value: '选项5',
          label: '2015'
        }],
        options3: [{
          value: '1',
          label: '1月'
        }, {
          value: '2',
          label: '2月',
          disabled: true
        }, {
          value: '3',
          label: '3月'
        }, {
          value: '4',
          label: '4月'
        }, {
          value: '5',
          label: '5月'
        }],
        value2:'',
        value3:''
      }
    },
    components:{
      Login,
      MyTop
    },
    computed:{
      ...mapState(['isLogin'])
    },
    methods:{
      ...mapMutations(['OUT_USER']),
      login(){
        this.loginShow = !this.loginShow
      },
      loginHideFun(data){
        this.loginShow = data
      },
      removeLogin(){
        this.OUT_USER()
      },
    },
    mounted () {
      // $('body').click(function(){
      //   console.log(this.value2)
      //   console.log(this.value3)
      // }.bind(this));
      let n = 1;
      let m = document.getElementById('onc');
      m.onclick = ()=>{
        console.log(n++);
      }

      $('#onc').on('click',function(){
        $(this).next('span').html(n++);
      })
    },
  }
</script>

<style lang="scss" scoped>
  h2{
    padding:400px 0;
    text-align: center;
  }
</style>
