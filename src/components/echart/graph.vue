<template>
  <div>
    <div>
      <!-- 750px -->
      <div id="relationChart" style="width: 100%; height: 900px"></div>
    </div>
  </div>
</template>

<script>
import walden from "../../assets/theme/walden.json";
// import graphdata from "../../assets/json/graphdata.json";
import * as echarts from "echarts";
export default {
  data() {
    return {
      nodename: "植物界",
      numbers: 25,
      garphdatanodes: [],
      garphdatalinks: [],
      colorList:[],
      nodescount: 0,
      relationscount: 0,
      //AvoidRepetition
      // node_list:[],
      // link_list:[],

      option: [],
      subtext: "",
    };
  },
  mounted() {
    // this.initDataTset();
    this.initPramater();
    this.initData();
  },
  methods: {
    initDataTset() {
      /* var chartDom = document.getElementById("relationChart");
      var myChart = echarts.init(chartDom);
      var option;
      var graph = graphdata;
      graph.nodes.forEach(function (node) {
        node.symbolSize = 5;
      });
      option = {
        title: {
          text: "Les Miserables",
          subtext: "Default layout",
          top: "bottom",
          left: "right",
        },
        tooltip: {},
        legend: [
          {
            // selectedMode: 'single',
            data: graph.categories.map(function (a) {
              return a.name;
            }),
          },
        ],
        series: [
          {
            name: "Les Miserables",
            type: "graph",
            layout: "force",
            data: graph.nodes,
            links: graph.links,
            categories: graph.categories,
            roam: true,
            label: {
              position: "right",
            },
            force: {
              repulsion: 100,
            },
          },
        ],
      };
      console.log(graph.nodes);
      myChart.setOption(option);
      myChart.on("click", () => {
        var graphdata2 = graphdata;
        for (var i_test = 0; i_test < 5; i_test++) {
          graphdata2.nodes.push({
            id: "" + graphdata.nodes.length + 1,
            name: "Tset" + i_test,
            symbolSize: 19.1238 + i_test,
            x: -266.82776 + i_test,
            y: 299.6904 + i_test,
            value: 28.685715 + i_test,
            category: 9,
          });
        }
        graphdata2.categories.push({ name: "J" });
        var option2 = {
          title: {
            text: "Les Miserables",
            subtext: "Default layout",
            top: "bottom",
            left: "right",
          },
          tooltip: {},
          legend: [
            {
              // selectedMode: 'single',
              data: graphdata2.categories.map(function (a) {
                return a.name;
              }),
            },
          ],
          series: [
            {
              name: "Les Miserables",
              type: "graph",
              layout: "force",
              data: graphdata2.nodes,
              links: graphdata2.links,
              categories: graphdata2.categories,
              roam: true,
              label: {
                position: "right",
              },
              force: {
                repulsion: 100,
              },
            },
          ],
        };

        myChart.setOption(option2);
      }); */
    },
    initPramater(){
      this.$agri({
        url: "/options/listNotDel",
        method: "get",
      }).then((response) => {
        var res = [];
        for (var i in response.data.object){
          if(response.data.object[i].key == "windowsNode"){
            res = JSON.parse(response.data.object[i].value) ;
            break;
          }
        }
        console.log(res)
        console.log("请求后端参数“知识图谱数据”成功")
        this.nodename = res[0].nodename;
        this.numbers = res[0].nodenumber;
        console.log("后端参数“知识图谱数据”转换成功")

      });
    },
    initData() {
      this.colorList = [
        //   绿色
        new echarts.graphic.LinearGradient(0, 0, 1, 1, [
          {
            offset: 0,
            color: "rgba(59, 181, 182, 1)",
          },
          {
            offset: 1,
            color: "rgba(66, 227, 151, 0.2)",
          },
        ]),
        //   橙色
        new echarts.graphic.LinearGradient(1, 0, 0, 1, [
          {
            offset: 0,
            color: "rgba(254, 220, 69, 1)",
          },
          {
            offset: 1,
            color: "rgba(251, 112, 153, 0.2)",
          },
        ]),
        //   蓝色
        new echarts.graphic.LinearGradient(0, 1, 1, 0, [
          {
            offset: 0,
            color: "rgba(0, 138, 255, 1)",
          },
          {
            offset: 1,
            color: "rgba(0, 216, 255, 0.2)",
          },
        ]),
        //   粉色
        new echarts.graphic.LinearGradient(0, 0, 1, 1, [
          {
            offset: 0,
            color: "rgba(246, 191, 159, 1)",
          },
          {
            offset: 1,
            color: "rgba(219, 138, 222, 0.2)",
          },
        ]),
        //   天蓝色
        new echarts.graphic.LinearGradient(1, 0, 0, 1, [
          {
            offset: 0,
            color: "rgba(247, 138, 158, 1)",
          },
          {
            offset: 0.5,
            color: "rgba(245, 111, 135, 0.5)",
          },
          {
            offset: 1,
            color: "rgba(254, 152, 139, 0.2)",
          },
        ]),
        //   水蓝色
        new echarts.graphic.LinearGradient(0, 1, 1, 0, [
          {
            offset: 0,
            color: "rgba(144, 125, 228, 1)",
          },
          {
            offset: 1,
            color: "rgba(33, 223, 209, 0.2)",
          },
        ]),
        //   粉紫色
        new echarts.graphic.LinearGradient(0, 0, 1, 1, [
          {
            offset: 0,
            color: "rgba(32, 156, 255, 1)",
          },
          {
            offset: 1,
            color: "rgba(104, 224, 207, 0.2)",
          },
        ]),
        //   红橙色
        new echarts.graphic.LinearGradient(1, 0, 0, 1, [
          {
            offset: 0,
            color: "rgba(94, 209, 225, 1)",
          },
          {
            offset: 0.5,
            color: "rgba(191, 194, 254, 0.5)",
          },
          {
            offset: 1,
            color: "rgba(232, 189, 219, 0.2)",
          },
        ]),
        new echarts.graphic.LinearGradient(0, 1, 1, 0, [
          {
            offset: 0,
            color: "rgba(238, 114, 125, 1)",
          },
          {
            offset: 1,
            color: "rgba(253, 162, 63, 0.2)",
          },
        ]),
      ];
      //Get Count of NodesAndRelation
      this.$http({
        url: "relationCount/",
        method: "get",
      }).then((response) => {
        // 副标题统计节点关系数量
        this.nodescount = response.data.object["nodecount"];
        this.relationscount = response.data.object["relationcount"];
        // 副标题设置
        this.subtext =
          "节点数量：" +
          this.nodescount +
          "\n" +
          "关系数量：" +
          this.relationscount;
        // console.log(this.subtext);

        //获取节点关系数据
        this.$http({
          url: "relationBig/" + this.nodename + "/" + this.numbers,
          method: "get",
        }).then((response) => {
          const graphres = response.data.object;
          // 设置节点
          const node_list = [];
          for (var i in graphres.nodesList) {
            //避免重复
            if (node_list.indexOf(graphres.nodesList[i].id) != -1) {
              continue;
            }
            // 向数组中添加节点
            node_list.push(graphres.nodesList[i].id);
            // 设置子节点样式
            var node_with_style = {
              id: "" + graphres.nodesList[i].id,
              name: graphres.nodesList[i].properties.title,
              value: graphres.nodesList[i].properties.detail,
              symbolSize: 50,
              category: graphres.nodesList[i].label[0],
              itemStyle: {
                normal: {
                  color: "#009999",
                },
              },
            };
            // 设置节点颜色
            if (graphres.nodesList[i].label[0] == "NewNode") {
              node_with_style.itemStyle.normal.color = /* "#009999" */this.colorList[2];
            } else if (graphres.nodesList[i].label[0] == "HudongItem") {
              node_with_style.itemStyle.normal.color = /* "#CC3366" */this.colorList[3];
            } else if (graphres.nodesList[i].label[0] == "Weather") {
              node_with_style.itemStyle.normal.color = /* "#FFCC00" */this.colorList[1];
            }
            if (graphres.nodesList[i].properties.title == this.nodename) {
              node_with_style.x = 518;
              node_with_style.y = 314;
              // node_with_style.fixed  = true;
            }
            this.garphdatanodes.push(node_with_style);
          }
          // 设置边
          for (var j in graphres.relationList) {
            this.garphdatalinks.push({
              id: "" + graphres.relationList[j].id,
              source: "" + graphres.relationList[j].source,
              target: "" + graphres.relationList[j].target,
              name: graphres.relationList[j].properties.type,
            });
          }
          console.log(this.garphdatanodes);
          console.log(this.garphdatalinks);
          const option = {
            title: {
              text: "农业知识图谱",
              subtext: this.subtext,
              top: /* "bottom" */ "2%",
              left: "left",
              // bottom: "5%",
              textStyle: {
                color: "#fff",
                fontSize: 30,
              },
              subtextStyle: {
                fontSize: 20,
              },
            },
            animationDurationUpdate: 1500,
            animationEasingUpdate: "quinticInOut",
            series: [
              {
                type: "graph",
                // layout: "circular",
                layout: "force",
                data: this.garphdatanodes,
                links: this.garphdatalinks,
                // 节点是否可拖拽
                draggable: true,
                // 是否开启鼠标缩放和平移漫游
                roam: "move",
                // 是否在鼠标移到节点上的时候突出显示节点以及节点的边和邻接节点
                focusNodeAdjacency: true,
                // 箭头
                edgeSymbol: ["circle", "arrow"],
                edgeSymbolSize: [0, 8],
                // 节点文本配置
                label: {
                  // position: "right",
                  color:'#fff',
                  show: true,
                },
                labellayout: {
                  hideOverlap: true,
                },
                force: {
                  repulsion: 500, //斥力
                  edgeLength: 8, //默认距离
                  
                },
              },
            ],
          };
          this.option = option;
          // console.log(option);
          this.drawChart();
        });
      });
    },
    drawChart() {
      //设置echarts主题
      echarts.registerTheme("theme", walden);
      //基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(
        document.getElementById("relationChart"),
        "theme"
      );
      // 自适应大小
      window.onresize = function () {
        myChart.resize();
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(this.option);
      // console.log(this.option);

      // 图表事件监听
      myChart.on("click", (chartparams) => {
        console.log(chartparams.name + "  Graph.vue");
        this.nodename = chartparams.name;
        this.numbers = 10;
        var option_click = [];

        // 更新图谱
        this.$http({
          url: "relationBig/" + this.nodename + "/" + this.numbers,
          method: "get",
        }).then((response) => {
          const graphres_click = response.data.object;

          let graphCanvas2 = document
            .getElementById("relationChart")
            .getBoundingClientRect();
          // 获取点击前的节点唯一id值
          const node_list_click = [];
          for (var ii in this.garphdatanodes) {
            node_list_click.push(this.garphdatanodes[ii].id);
          }
          console.log(node_list_click);
          // 获取点击前的关系唯一id值
          const link_list_click = [];
          for (var jj in this.garphdatalinks) {
            link_list_click.push(this.garphdatalinks[jj].id);
          }
          // 设置节点
          for (var i in graphres_click.nodesList) {
            //避免重复
            if (
              node_list_click.indexOf("" + graphres_click.nodesList[i].id) != -1
            ) {
              continue;
            }
            // 向数组中添加节点
            node_list_click.push("" + graphres_click.nodesList[i].id);
            var node_with_style = {
              id: "" + graphres_click.nodesList[i].id,
              x: Math.floor(Math.random() * (graphCanvas2.width - 150) + 50),
              y: Math.floor(Math.random() * (graphCanvas2.height - 150) + 50),
              name: graphres_click.nodesList[i].properties.title,
              symbolSize: 50,
              category: graphres_click.nodesList[i].label[0],
              itemStyle: {
                normal: {
                  color: "#009900",
                },
              },
            };
            if (graphres_click.nodesList[i].label[0] == "NewNode") {
              node_with_style.itemStyle.normal.color = /* "#009999" */this.colorList[2];
            } else if (graphres_click.nodesList[i].label[0] == "HudongItem") {
              node_with_style.itemStyle.normal.color = /* "#CC3366" */this.colorList[3];
            } else if (graphres_click.nodesList[i].label[0] == "Weather") {
              node_with_style.itemStyle.normal.color = /* "#FFCC00" */this.colorList[1];
            }
            console.log("#Click get Node Success");
            this.garphdatanodes.push(node_with_style);
          }
          // 设置关系
          for (var j in graphres_click.relationList) {
            //避免重复
            if (
              link_list_click.indexOf("" + graphres_click.relationList[j].id) !=
              -1
            ) {
              continue;
            }
            // 向数组中添加节点
            link_list_click.push("" + graphres_click.relationList[j].id);
            this.garphdatalinks.push({
              id: "" + graphres_click.relationList[j].id,
              source: "" + graphres_click.relationList[j].source,
              target: "" + graphres_click.relationList[j].target,
              name: graphres_click.relationList[j].properties.type,
            });
            console.log("#Click get Link Success");
          }
          console.log(
            "====================================PUSHED===================================="
          );
          console.log(node_list_click);
          console.log(link_list_click);
          console.log(this.garphdatanodes);
          console.log(this.garphdatalinks);

          option_click = {
            title: {
              text: "农业知识图谱",
              subtext: this.subtext,
              top: /* "bottom" */ "2%",
              left: "left",
              // bottom: "5%",
              textStyle: {
                color: "#fff",
                fontSize: 30,
              },
              subtextStyle: {
                fontSize: 20,
              },
            },
            toolbox: {
              show: true,
              feature: {
                restore: {},
                saveAsImage: {},
              },
            },
            animationDurationUpdate: 1500,
            animationEasingUpdate: "quinticInOut",
            series: [
              {
                type: "graph",
                // layout: "circular",
                layout: "force",
                data: this.garphdatanodes,
                // links: this.graphdatalinks,
                links: this.garphdatalinks,
                // 节点是否可拖拽
                draggable: true,
                // 是否开启鼠标缩放和平移漫游
                roam: true,
                // 是否在鼠标移到节点上的时候突出显示节点以及节点的边和邻接节点
                focusNodeAdjacency: true,
                // 箭头
                edgeSymbol: ["circle", "arrow"],
                edgeSymbolSize: [0, 8],

                // 节点文本配置
                label: {
                  // position: "right",
                  show: true,
                },
                labellayout: {
                  hideOverlap: true,
                },
                force: {
                  repulsion: 600, //斥力
                  edgeLength: [2, 6], //默认距离
                },
              },
            ],
          };
          console.log(
            "====================================OPTION_CLICK===================================="
          );
          console.log(option_click);

          myChart.setOption(option_click);
        });
      });
    },
  },
};
</script>
