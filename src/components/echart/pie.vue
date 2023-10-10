<template>
  <div>
    <!-- 400px -->
    <div id="piemain" style="width: 100%; height: 310px"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import walden from "../../assets/theme/walden.json";

export default {
  data() {
    return {
      option: [],
      piedata: [],
      piedataTran:"",
    };
  },
  mounted() {
    this.initData();
  },
  methods: {
    initData() {
      this.$agri({
        url: "panoramic/numberOfCropInEachType",
        method: "get",
      }).then((response) => {
        for (var i in response.data.object) {
          this.piedata.push({
            value: response.data.object[i].num,
            name: response.data.object[i].name,
          });
        }
        console.log(this.piedata)
        const option = {
          title: {
            text: "农作物占比",
            left: "center",
            top: "7%",
            textStyle: {
              color: "#fff",
              fontSize: 20,
            },
          },
          legend: {
            top: "bottom",
            textStyle: {
                  //数值样式
                  color: "#fff",
                  fontSize: 16,
                },
          },
          series: [
            {
              name: "Nightingale Chart",
              type: "pie",
              label: {
                show:true,
                textStyle: {
                  //数值样式
                  color: "#fff",
                  fontSize: 16,
                },
              },
              radius: [9, 90],
              center: ["50%", "50%"],
              roseType: "area",
              itemStyle: {
                borderRadius: 8,
              },
              data: this.piedata,
            },
          ],
        };

        this.option = option;

        this.drawchart();
      });
    },
    drawchart() {
      echarts.registerTheme("theme", walden);

      let myChart = echarts.init(document.getElementById("piemain"), "theme");
      // 绘制图表

      myChart.setOption(this.option);
      window.onresize = function () {
        // 自适应大小
        myChart.resize();
      };
      myChart.on("click", (params) =>{
        // console.log(params)
        // console.log("pie.vue - PirDataTran");
        this.piedataTran = params.name;
        this.$emit('pieson',this.piedataTran);
        console.log(this.piedataTran+" pie.vue - PirDataTran");
      });
    },
  },
};
</script>
