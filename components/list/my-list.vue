<template>
  <div class="list">
    <div class="listCar">
      <ul>
        <li v-for="item in list">
          <span class="carImg"><img :src="item.photoAddress" :alt="item.seriesBrandCarStyle"></span>
          <div class="carText">
            <p>{{ item.buyDate }}{{ item.seriesBrandCarStyle }}</p>
            <div class="city">
              <span class="ellipse">{{ item.location }}</span>
              <span>￥<em>{{item.price}}</em>万</span>
            </div>
          </div>
          <div class="lines">
            <i class="line"></i>
            <i class="line"></i>
            <i class="line"></i>
            <i class="line"></i>
          </div>
          <div class="hover">
            <nuxt-link :to="{path:'/detail/'+item.id}">
              <p>本车可议价</p>
              <p>查看详情</p>
            </nuxt-link>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'list',
        list:null,
        car:{
          cityCode:null,
          year:null,
          serial:null,
          priceInterval:null,
          pageSize:null,
          order:null,
          currPage:null
        }
      }
    },
    mounted(){
      this.getData()
    },
    computed:{
      params(){
        return {
          areaCode: this.car.cityCode,
          year: this.car.year,
          serial: this.car.serial,
          priceInterval: this.car.priceInterval,
          pageSize: this.car.pageSize,
          order: this.car.order,
          currPage: this.car.currPage
        }
      }
    },
    methods: {
      async getData() {
        this.$axios.post('/api/mobile/filteData.json',
          { params:this.params}
        ).then(res=>{
          this.list = res.data.carList
        }).catch(err=>{
          console.log(err)
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "../../assets/style/common";
  .list{
    max-width:1200px;
    height:auto;
    margin:0 auto;
    padding-bottom:20px;
    .listCar{
      ul{
        li{
          width:210px;
          display: inline-block;
          margin:20px 10px;
          background:#f1f1f1;
          cursor:pointer;
          position:relative;
          box-shadow:  0 0 10px #bfbfbf;
          transition: .3s ease-in-out;
          .carImg{
            display: block;
            img{
              max-height:140px;
              width:100%;
            }
          }
          .carText{
            padding:10px;
            p{
              font-size:14px;
              color:#999;
              height: 40px;
              overflow: hidden;
            }
            .city{
              @include flexCenter(center);
              margin:10px 0;
              & > span{
                flex:1;
                font-size:12px;
                color:#338;
                font-weight: bold;
              }
              & > span:last-child{
                @include flexCenter(flex-end);
                em{
                  margin:0 2px;
                  font-size:18px;
                  font-weight: bold;
                }
              }
            }
          }
          .lines{
            position:absolute;
            top:0;
            bottom:0;
            left:0;
            right:0;
            i{
              transition: all .3s linear;
              background:#338;
              height:2px;
              position:absolute;
              z-index: 100;
            }
            i:nth-child(1){top:0;left:0;width:0;height:2px;}
            i:nth-child(2){top:0;right:0;height:0;width:2px;}
            i:nth-child(3){left:0;bottom:0;height:0;width:2px}
            i:nth-child(4){right:0;bottom:0;width:0;height:2px;}
          }
          .hover{
            position:absolute;
            top:0;
            bottom:0;
            left:0;
            right:0;
            display: none;
            a{
              color:#fff;
              overflow: hidden;
              width:100%;
              height:100%;
              text-align: center;
              p{
                animation: showIn .3s ease-in;
              }
              p:nth-child(1){
                margin: 55px 0 15px;
              }
            }
          }
        }
        li:hover{
          transform: translate(0,10px);
          transition: .3s ease-in-out;
        }
        li:hover .hover{display:block}
        li:hover .lines:after{
          content: '';
          position:absolute;
          top:0;
          bottom:0;
          left:0;
          right:0;
          background: rgba(0,0,0,.4);
        }
        li:hover .lines i:nth-child(1){width:100%;}
        li:hover .lines i:nth-child(2){height:100%;}
        li:hover .lines i:nth-child(3){height:100%;}
        li:hover .lines i:nth-child(4){width:100%;}
      }
    }
  }
  @keyframes showIn {
    0%{
      opacity: 0;
      transform: scale(1.5);
    }
    100%{
      opacity: 1;
      transform: scale(1);
    }
  }
</style>
