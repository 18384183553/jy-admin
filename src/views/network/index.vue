<template>
  <div class="container">
    <div id="mian1" style="float:left;width:600px;height: 500px"></div>
  </div>
</template>

<script>
  import * as echarts from 'echarts';
  // import {Test} from '@/api/user'
  export default {
    name: '',

    data() {
      return {
        graph: {
          "nodes": [{
              "id": "0",
              "name": "Myriel",
              "symbolSize": 19.12381,
              "value": 28.685715,
            },
            {
              "id": "1",
              "name": "Napoleon",
              "symbolSize": 4.6666666666666665,
              "value": 4,
            },
            {
              "id": "2",
              "name": "MlleBaptistine",
              "symbolSize": 6.323809333333333,
              "value": 9.485714,
            },
            {
              "id": "3",
              "name": "MmeMagloire",
              "symbolSize": 7.323809333333333,
              "value": 9.485714,
            },
            {
              "id": "4",
              "name": "CountessDeLo",
              "symbolSize": 8.6666666666666665,
              "value": 4,
            },
            // {
            //   "id": "5",
            //   "name": "Geborand",
            //   "symbolSize": 9.6666666666666665,
            //   "value": 4,
            // },
            // {
            //   "id": "6",
            //   "name": "Champtercier",
            //   "symbolSize": 10.6666666666666665,
            //   "value": 4,
            // },
            // {
            //   "id": "7",
            //   "name": "Cravatte",
            //   "symbolSize": 4.6666666666666665,
            //   "value": 4,
            // },
            // {
            //   "id": "8",
            //   "name": "Count",
            //   "symbolSize": 3.6666666666666665,
            //   "value": 4,
            // },
            // {
            //   "id": "9",
            //   "name": "OldMan",
            //   "symbolSize": 4.6666666666666665,
            //   "value": 4,
            // },
            // {
            //   "id": "10",
            //   "name": "Labarre",
            //   "symbolSize": 6.2232,
            //   "value": 4,
            // },

          ],
          "links": [{
              "source": "1",
              "target": "0"
            },
            {
              "source": "2",
              "target": "0"
            },
            {
              "source": "3",
              "target": "0"
            },
            {
              "source": "3",
              "target": "2"
            },
            {
              "source": "4",
              "target": "0"
            },
            {
              "source": "5",
              "target": "0"
            },
            {
              "source": "6",
              "target": "0"
            },
            {
              "source": "7",
              "target": "0"
            },
            {
              "source": "8",
              "target": "0"
            },
            {
              "source": "9",
              "target": "0"
            },

          ],
          "categories": [{
              "name": "类目0"
            },

          ]

        }
      }
    },
    methods: {
      initData() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('mian1'));
        console.log(this.graph)
        this.graph.nodes.forEach(function (node) {
          node.label = {
            show: node.symbolSize > 30
          };
        });
        console.log(this.graph)
        let option = {
          tooltip: {},
          animationDuration: 2000,
          animationEasingUpdate: 'quinticInOut',

          tooltip: {
            formatter: function (x) {
              return x.data.name
            }
          },
          // 当前echart是否开启动画（true/false）
          animation: true,
          // 当前echart超过这个值（100）时将关闭动画 -- 关闭阙值
          animationThreshold: 10000,
          // 当前echart的动画时常
          animationDuration: 100000,
          // 当前echart的动画效果更新时
          animationEasingUpdate: "quinticInOut",
          series: [{
              name: "", // 标题
              type: "graph", // echart类型
              layout: "none", // 布局参数：none/force/circular
              force: {
                repulsion: 100000,
                edgeLength: 200 // 线的长度
              }, // 力导向图的参数配置，查文档吧👇
              // [https://echarts.apache.org/zh/option.html#%2Fsearch%2Fforce](https://echarts.apache.org/zh/option.html#/search/force)
              label: {
                show: true,
                position: 'right',
                formatter: function (x) {
                  console.log(x)
                  return x.data.name
                }
              },
              data: this.graph.nodes,
              links: this.graph.links,
              categories: this.graph.categories,
              roam: true,
              legendHoverLink: true,
              focusNodeAdjacency: true,
              draggable: true, // 可移动
              roam: true, //添加缩放和移动
              lineStyle: {
                color: "source",
                curveness: 0.3
              }
            }
          ]
        }
        myChart.setOption(option);

      },
      mounted() {
        // Test().then(res => {
        //   console.log(1)
        // }).catch(err => {
        //   console.log(2)
        // })
        this.initData();
      },
      
      created() {

      }
    }
  }
</script>
<style>


</style>
