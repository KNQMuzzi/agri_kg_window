<template>
  <div id="center">
    <div class="up">
      <div
        class="bg-color-black item"
        v-for="item in this.streamRowsData"
        :key="item.title"
      ><!-- v-for="item in this.streamRowsData" item in this.titleItem -->
        <p class="ml-3 colorBlue fw-b fs-xl">{{ item.title }}</p>
        <div>
          <dv-digital-flop
            class="dv-dig-flop ml-1 mt-2 pl-3"
            :config="item.number"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      test: [],
      titleItem: [
        {
          title: "主推技术总数",
          number: {
            // number: [120],
            number: [4944],
            textAlign: "left",
            content: "{nt}",
            style: {
              fontSize: 26,
            },
          },
        },
        {
          title: "专利技术总数",
          number: {
            number: [152401],
            textAlign: "left",
            content: "{nt}",
            style: {
              fontSize: 26,
            },
          },
        },
        {
          title: "农资农机数量",
          number: {
            number: [2393],
            textAlign: "left",
            content: "{nt}",
            style: {
              fontSize: 26,
            },
          },
        },
        {
          title: "主推品种总数",
          number: {
            number: [33855],
            textAlign: "left",
            content: "{nt}",
            style: {
              fontSize: 26,
            },
          },
        },
        {
          title: "推广数据总数",
          number: {
            number: [277728],
            textAlign: "left",
            content: "{nt}",
            style: {
              fontSize: 26,
            },
          },
        },
        {
          title: "科技文章总数",
          number: {
            number: [23353],
            textAlign: "left",
            content: "{nt}",
            style: {
              fontSize: 26,
            },
          },
        },
      ],
      streamRowsData: [],
    };
  },
  mounted() {
    this.initData();
  },
  methods: {
    initData() {
      this.$agri({
        // url: "panoramic/streamRows",
        url: "/options/listNotDel",
        method: "get",
      }).then((response) => {
        /* for (var i in response.data.object) {
          const arr = [];
          var nameShow = "";
          switch (response.data.object[i].name) {
            case "patent":
              nameShow = "专利技术总数";
              break;
            case "user_visit_info":
              nameShow = "用户访问量";
              break;
            case "technology_article":
              nameShow = "主推技术总数";
              break;
            case "pest":
              nameShow = "病虫害百科";
              break;
            case "user":
              nameShow = "用户数量";
              break;
          }
          arr.push(response.data.object[i].num);
          this.streamRowsData.push({
            number: {
              number: arr,
              textAlign: "left",
              content: "{nt}",
              style: {
                fontSize: 26,
              },
            },
            title: nameShow,
          });
          // this.test.push(response.data.object[i].num)
        }
        this.streamRowsData.push(
          {number: {
              number: [30],
              textAlign: "left",
              content: "{nt}",
              style: {
                fontSize: 26,
              },
            },
            title: "农作物种类",}
        )
        console.log(this.streamRowsData);
        // console.log(this.test); */

        var res = [];
        for (var i in response.data.object){
          if(response.data.object[i].key == "windowsStreamRowsData"){
            res = JSON.parse(response.data.object[i].value) ;
            break;
          }
        }
        console.log("请求后端计数牌成功")
        for (var j in res){
          //需要将数字处理成数组形式
          const arr = [];
          arr.push(res[j].number);
          this.streamRowsData.push({number: {number: arr,textAlign: "left",content: "{nt}", style: {fontSize: 26,}, },title: res[j].title,})
        }

        // console.log(this.streamRowsData)
        console.log("计数牌数据渲染完成")

      });
    },
  },
};
</script>

<style lang="scss" scoped>
#center {
  display: flex;
  flex-direction: column;
  .up {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .item {
      border-radius: 6px;
      padding-top: 8px;
      margin-top: 8px;
      width: 32%;
      height: 70px;
      .dv-dig-flop {
        width: 150px;
        height: 30px;
      }
    }
  }
}
</style>
