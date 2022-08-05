<template>
  <div class="barbox">
    <div id="barpie1" style="width: 100%; height: 310px"></div>
    <div id="barpie2" style="width: 100%; height: 310px"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import walden from "../../assets/theme/walden.json";

export default {
  data() {
    return {
      area_base: [
        {
          area_name: "东北",
          area_province: ["黑龙江", "吉林", "辽宁"],
        },
        {
          area_name: "华东",
          area_province: [
            "上海",
            "江苏",
            "浙江",
            "安徽",
            "福建",
            "江西",
            "山东",
            "台湾",
          ],
        },
        {
          area_name: "华北",
          area_province: ["北京", "天津", "山西", "河北", "内蒙古"],
        },
        {
          area_name: "华中",
          area_province: ["河南", "湖北", "湖南"],
        },
        {
          area_name: "华南",
          area_province: ["广东", "广西", "海南", "香港", "澳门"],
        },
        {
          area_name: "西南",
          area_province: ["四川", "贵州", "云南", "重庆", "西藏"],
        },
        {
          area_name: "西北",
          area_province: ["陕西", "甘肃", "青海", "宁夏", "新疆"],
        },
      ],
      piedata: [],
      province_name: [],
      province_value: [0, 0, 0, 0, 0, 0, 0],
      baroption: [],
      pieoption: [],
      sourceData: [],
    };
  },
  mounted() {
    // this.drawchart();
    this.initData();
  },
  methods: {
    initData() {
      this.$agri({
        url: "panoramic/mainTechnologyNumberGroupByArea",
        method: "get",
      }).then((response) => {
        // 获取的后端值
        for (var i in response.data.object) {
          this.sourceData.push({
            // id:response.data.object[i].id,
            value: response.data.object[i].num,
            name: response.data.object[i].name,
          });
        }

        // 处理Bar界面的横坐标标签
        for (var i_x in this.area_base) {
          this.province_name.push(this.area_base[i_x].area_name);
        }
        // 处理Bar界面的数据
        for (var i_y in this.sourceData) {
          for (var ii_y in this.area_base) {
            if (
              this.area_base[ii_y].area_province.indexOf(
                this.sourceData[i_y].name
              ) != -1
            ) {
              this.province_value[ii_y] =
                this.province_value[ii_y] + this.sourceData[i_y].value;
            }
          }
        }
        // for(var initPie in this.area_base){
        //   this.piedata.push(

        //   )
        // }
        for (var i_pie in this.sourceData) {
          // 控制单条数据
          if (
            this.area_base[1].area_province.indexOf(
              this.sourceData[i_pie].name
            ) != -1
          ) {
            // 如果包含省份名称，则修改数据结构
            this.piedata.push({
              name: this.sourceData[i_pie].name,
              value: this.sourceData[i_pie].value,
            });
          }
        }

        console.log(this.province_name);
        const baroption = {
          title: {
            text: "各区域农业主推技术数量",
            left: "center",
            bottom: "5%",
            textStyle: {
              color: "#fff",
              fontSize: 16,
            },
          },
          xAxis: {
            type: "category",
            data: this.province_name,
            axisLabel: {
              interval: 0,
              inside: false,
              // rotate:90,
              color: "#fff",
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            z: 10,
          },
          yAxis: {
            type: "value",
            show: false,
          },
          dataZoom: [
            {
              type: "inside",
            },
          ],
          series: [
            {
              type: "bar",
              // showBackground: true,
              label: {
                show: true, //开启显示
                position: "top", //在上方显示
                textStyle: {
                  //数值样式
                  color: "#fff",
                  fontSize: 16,
                },
              },
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#83bff6" },
                  { offset: 0.5, color: "#188df0" },
                  { offset: 1, color: "#188df0" },
                ]),
              },
              data: this.province_value,
            },
          ],
        };
        // console.log(this.bardata.num)
        this.baroption = baroption;
        const pieoption = {
          title: {
            text: "华东地区农业主推技术比例",
            left: "center",
            bottom: "5%",
            textStyle: {
              color: "#fff",
              fontSize: 16,
            },
          },
          series: [
            {
              name: "Access From",
              type: "pie",
              radius: "50%",
              data: this.piedata,
              label: {
                show: true,
                textStyle: {
                  //数值样式
                  color: "#fff",
                  fontSize: 16,
                },
              },
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: "rgba(0, 0, 0, 0.5)",
                },
              },
            },
          ],
        };
        this.pieoption = pieoption;
        this.drawchart();
      });
    },
    drawchart() {
      echarts.registerTheme("theme", walden);
      //Bar
      let myChartBar = echarts.init(document.getElementById("barpie1"));
      // 设置Bar图表的属性
      myChartBar.setOption(this.baroption);
      // 响应式变化
      window.addEventListener("resize", () => myChartBar.resize(), false);

      myChartBar.on("click", (params) => {
        console.log(params.name + "   Bar.vue界面点击函数传值");
        const clickname = params.name;
        var click_i = -1;
        for (var i in this.area_base) {
          if (clickname == this.area_base[i].area_name) {
            click_i = i;
          }
        }
        this.piedata = [];
        for (var i_pie in this.sourceData) {
          // 控制单条数据
          if (
            this.area_base[click_i].area_province.indexOf(
              this.sourceData[i_pie].name
            ) != -1
          ) {
            // 如果包含省份名称，则修改数据结构
            this.piedata.push({
              name: this.sourceData[i_pie].name,
              value: this.sourceData[i_pie].value,
            });
          }
        }
        const pieoption2 = {
          title: {
            text: params.name+"地区农业主推技术比例",
            left: "center",
            bottom: "5%",
            textStyle: {
              color: "#fff",
              fontSize: 16,
            },
          },
          series: [
            {
              name: "Access From",
              type: "pie",
              radius: "50%",
              data: this.piedata,
              label: {
                show: true,
                textStyle: {
                  //数值样式
                  color: "#fff",
                  fontSize: 16,
                },
              },
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: "rgba(0, 0, 0, 0.5)",
                },
              },
            },
          ],
        };
        myChartPie.setOption(pieoption2);

      });
      //Pie
      let myChartPie = echarts.init(
        document.getElementById("barpie2"),
        "theme"
      );
      // 设置Pie图表的属性
      myChartPie.setOption(this.pieoption);
      // 响应式变化
      window.addEventListener("resize", () => myChartPie.resize(), false);
    },
  },
};
</script>

<style lang="scss" scoped>
.barbox {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>