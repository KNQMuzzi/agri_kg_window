<template>
  <div>
    <div id="zhexian" style="width: 100%; height: 310px"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import walden from "../../assets/theme/walden.json";

export default {
  data() {
    return {
      dateData:[],
    };
  },
  mounted() {
    this.drawchart();
  },
  methods: {
    drawchart() {
      echarts.registerTheme("theme", walden);
      for(var i=0;i<7;i++){
        this.dateData.push(Math.round(Math.random()*100));
      }

      let myChart = echarts.init(document.getElementById("zhexian"));
      // 绘制图表
      const option = {
        title: {
          text: "用户活跃度展示",
          left: "center",
          bottom: "5%",
          textStyle: {
            color: "#fff",
            fontSize: 16,
          },
        },
        grid: {
          top: "20%",
          left: "10%",
          right: "10%",
          bottom: "15%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
          axisLabel: {
            margin: 30,
            color: "#ffffff63",
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: true,
            length: 25,
            lineStyle: {
              color: "#ffffff1f",
            },
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#ffffff1f",
            },
          },
        },
        yAxis: [
          {
            type: "value",
            position: "right",
            axisLabel: {
              margin: 20,
              color: "#ffffff63",
            },

            axisTick: {
              show: true,
              length: 15,
              lineStyle: {
                color: "#ffffff1f",
              },
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: "#ffffff1f",
              },
            },
            axisLine: {
              lineStyle: {
                color: "#fff",
                width: 2,
              },
            },
          },
        ],
        series: [
          {
            name: "注册总量",
            type: "line",
            smooth: true, //是否平滑曲线显示
            showAllSymbol: true,
            symbol: "circle",
            symbolSize: 6,
            lineStyle: {
              normal: {
                color: "#fff", // 线条颜色
              },
            },
            label: {
              show: true,
              position: "top",
              textStyle: {
                color: "#fff",
              },
            },
            itemStyle: {
              color: "red",
              borderColor: "#fff",
              borderWidth: 3,
            },
            tooltip: {
              show: false,
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "#eb64fb",
                    },
                    {
                      offset: 1,
                      color: "#3fbbff0d",
                    },
                  ],
                  false
                ),
              },
            },
            data: /* [393, 438, 485, 631, 689, 824, 987, 1000, 1100, 1200] */this.dateData,
          },
        ],
      };
      myChart.setOption(option);
      window.onresize = function () {
        // 自适应大小
        myChart.resize();
      };
    },
  },
};
</script>
