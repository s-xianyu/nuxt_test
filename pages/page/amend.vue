<template>
  <div class="amend">
    <div id="container" style="max-width: 1200px;height:400px;"></div>
  </div>
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
    },
    mounted(){
      var dom = document.getElementById("container");
      var myChart = echarts.init(dom);
      var app = {},
      option = null;
      app.title = '折柱混合';

      option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        toolbox: {
          feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        legend: {
          data:['出价','预约批发','降价通知','咨询底价','收藏','查看电话','看同类车','潜在线索','线索总量']
        },
        xAxis: [
          {
            type: 'category',
            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
            axisPointer: {
              type: 'shadow'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '在售车辆数',
            min: 0,
            max: 200,
            interval: 20,
            axisLabel: {
              formatter: '{value}'
            }
          }
        ],
        series: [
          {
            name:'出价',
            type:'bar',
            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
          },
          {
            name:'预约批发',
            type:'bar',
            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
          },
          {
            name:'降价通知',
            type:'line',
            data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
          },
          {
            name:'咨询底价',
            type:'bar',
            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
          },
          {
            name:'收藏',
            type:'bar',
            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
          },
          {
            name:'查看电话',
            type:'line',
            data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
          },
          {
            name:'看同类车',
            type:'bar',
            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
          },
          {
            name:'潜在线索',
            type:'bar',
            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
          },
          {
            name:'线索总量',
            type:'line',
            data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
          }
        ]
      };
      ;
      if (option && typeof option === "object") {
        myChart.setOption(option, true);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .amend{
    min-width: 1200px;
  }
  #container{
    margin:0 auto;
  }
  h2{
    padding:400px 0;
    text-align: center;
  }
</style>
