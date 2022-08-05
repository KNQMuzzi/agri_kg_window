<template>
  <div>
    <div>
      <!-- 750px -->
      <div id="mapbarChart" style="width: 100%; height: 525px"></div>
    </div>
  </div>
</template>

<script>
import CHINA from "../../assets/json/CHINA.json";
// eslint-disable-next-line no-unused-vars
import china from "../../assets/js/china";
import walden from "../../assets/theme/walden.json";
import * as echarts from "echarts";
export default {
  data() {
    return {
      mapbardata: 0,
      // Staic_Data_Part
      data_staic: [
        { name: "浙江", value: 69, id: 1 },
        { name: "四川", value: 92, id: 2 },
        { name: "江西", value: 47, id: 3 },
        { name: "云南", value: 37, id: 4 },
        { name: "重庆", value: 1, id: 5 },
      ],
      data:[],
      //BackEndData
      option: [],
      // Option_Settiong
      name_title: "农业主推技术数据地域分布情况",
      subname: "数据来源自各省市农业农村厅",
      nameColor: "#fff",
      name_fontFamily: "等线",
      subname_fontSize: 15,
      name_fontSize: 30,
    };
  },
  mounted() {
    this.initData();
    /* console.log("1");
    this.drawchart(); */
  },
  methods: {
    initData() {
      this.$agri({
        url: "panoramic/mainTechnologyNumberGroupByArea",
        method: "get",
      }).then((response) => {
        for (var ij in response.data.object) {
          this.data.push({
            id: response.data.object[ij].id,
            value: response.data.object[ij].num,
            name: response.data.object[ij].name,
          });
          
        }
      
      var mapDataList = [];
      /*获取地图数据*/
      var mapName = "china";
      var geoCoordMap = {};
      var mapFeatures = echarts.getMap(mapName).geoJson.features;
      mapFeatures.forEach(function (v) {
        // 地区名称
        var name = v.properties.name;
        // 地区经纬度
        geoCoordMap[name] = v.properties.cp;
      });

      for (var i = 0; i < this.data.length; i++) {
        var geoCoord = geoCoordMap[this.data[i].name];
        if (geoCoord) {
          mapDataList.push({
            name: this.data[i].name,
            value: geoCoord.concat(this.data[i].value),
          });
        }
      }
      console.log(mapDataList)
      const option = {
        title: {
          text: this.name_title,
          subtext: this.subname,
          x: "center",
          top: "7%",
          textStyle: {
            color: this.nameColor,
            fontFamily: this.name_fontFamily,
            fontSize: this.name_fontSize,
          },
          subtextStyle: {
            fontSize: this.subname_fontSize,
            fontFamily: this.name_fontFamily,
          },
        },
        visualMap: {
          show: true,
          min: 0,
          max: 200,
          left: "left",
          top: "bottom",
          text: ["高", "低"], // 文本，默认为数值文本
          calculable: true,
          seriesIndex: [1],
          textStyle:{
            color:"#fff",
            fontWeight: "bold",
          },
          inRange: {
            color: ["#1488CC", "#2B32B2"], // 浅蓝
          },
        },
        geo: {
          show: true,
          map: mapName,
          label: {
            normal: {
              show: false,
            },
            emphasis: {
              show: false,
            },
          },
          roam: true,
          itemStyle: {
            normal: {
              areaColor: "#031525",
              borderColor: "#3B5077",
            },
            emphasis: {
              areaColor: "#2B91B7",
            },
          },
        },
        series: [
          {
            name: "散点",
            type: "scatter",
            coordinateSystem: "geo",
            data: mapDataList,
            symbolSize: function (val) {
              return val[2] / 10;
            },
            label: {
              normal: {
                formatter: "{b}",
                position: "right",
                show: true,
                textStyle: {
                  //数值样式
                  color: "#fff",
                  fontSize: 16,
                },
              },
              emphasis: {
                show: true,
              },
            },
            itemStyle: {
              normal: {
                color: "#05C3F9",
              },
            },
          },
          {
            type: "map",
            map: mapName,
            geoIndex: 0,
            aspectScale: 0.75, //长宽比
            showLegendSymbol: false, // 存在legend时显示
            label: {
              normal: {
                show: true,
                textStyle: {
                  //数值样式
                  color: "#fff",
                  fontSize: 16,
                },
              },
              emphasis: {
                show: false,
                textStyle: {
                  color: "#fff",
                },
              },
            },
            roam: true,
            itemStyle: {
              normal: {
                areaColor: "#031525",
                borderColor: "#3B5077",
              },
              emphasis: {
                areaColor: "#2B91B7",
              },
            },
            animation: false,
            data: this.data,
          },
          {
            name: "点",
            type: "scatter",
            coordinateSystem: "geo",
            symbol: "pin", //气泡
            symbolSize: function (val) {
              var a = 80 / 471;
              var b = 20 - a * 9;
              b = 100 - a * 480;
              return a * val[2] + b;
            },
            label: {
              normal: {
                formatter:function(data){ return data.value[2]; },
                show: true,
                textStyle: {
                  //数值样式
                  color: "#fff",
                  fontSize: 16,
                },
              },
            },
            itemStyle: {
              normal: {
                color: "#F62157", //标志颜色
              },
            },
            zlevel: 6,
            data: mapDataList,
          },
          {
            name: "Top 5",
            type: "effectScatter",
            coordinateSystem: "geo",
            data: mapDataList
              .sort(function (a, b) {
                return b.value - a.value;
              })
              .slice(0, 5),
            symbolSize: function (val) {
              return val[2] / 10;
            },
            showEffectOn: "render",
            rippleEffect: {
              brushType: "stroke",
            },
            hoverAnimation: true,
            label: {
              normal: {
                formatter: "{b}",
                position: "right",
                show: true,
                textStyle: {
                  //数值样式
                  color: "#fff",
                  fontSize: 16,
                },
              },
            },
            itemStyle: {
              normal: {
                color: "yellow",
                shadowBlur: 10,
                shadowColor: "yellow",
              },
            },
            zlevel: 1,
          },
        ],
      };
      this.option = option;
      this.drawchart();
      });
    },
    drawchart() {
      // 注册地图
      echarts.registerMap("CHINA", CHINA);
      //实例化主题
      echarts.registerTheme("theme", walden);
      // 基于准备好的dom，初始化echarts实例
      const myChart = echarts.init(
        document.getElementById("mapbarChart"),
        "theme"
      );
      console.log(this.option);
      myChart.setOption(this.option);
      // myChart.setOption(this.option);
      myChart.on("click", (params) => {
        for (var i in this.data) {
          if (this.data[i].name === params.name) {
            this.mapbardata = this.data[i].id;
            console.log(params.name + " ID:" + this.mapbardata);
            this.$emit("mapbarson", this.mapbardata);
            break;
          } else {
            console.log("Error,Cannt get");
            this.$emit("mapbarson", -1);
          }
        }
      });
    },
  },
};
</script>
