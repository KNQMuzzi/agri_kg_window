<template>
  <div id="pietool">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span style="color: #5cd9e8">
          <icon name="chart-bar"></icon>
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">农作物比例</span>
          <dv-decoration-3
            style="position: relative; width: 100px; height: 20px; top: -3px"
          />
        </div>
      </div>
      <div>
        <!-- drawertFunctionPie -->
        <div @click="dialogtablePie = true">
          <!-- :modal-append-to-body="false" -->
          <Pie v-on:pieson="tranMsgPie"></Pie>
          <el-dialog
            title="农作物展示"
            :visible.sync="dialogtablePie"
            width="50%"
            append-to-body
            close-on-press-escape
            :destroy-on-close="true"
            direction="rtl"
            :lock-scroll="true"
          >
            <!-- 图片列表 -->
            <div id="drawer">
              <el-row :gutter="12" class="el-row" type="flex" >
                <el-col
                  :span="6"
                  v-for="(item, index) in plantData"
                  :key="item.id"
                  class="el-col"
                >
                  <el-card class="el-card" :key="index" onclick="">
                    <div slot="header" class="clearfix">
                      <span>{{ item.name }}</span>
                    </div>
                    <div>
                      <div class="text item">
                        <div class="item_tag">
                          <span>农作物从属：</span>
                        </div>
                        <div class="item_desr">
                          {{ item.plantingType }}
                        </div>
                      </div>
                      <el-image
                        style="width: 100%; height: 150px"
                        :src="item.url"
                        :fit="fit"
                      ></el-image>
                    </div>
                  </el-card>
                </el-col>
              </el-row>
            </div>
          </el-dialog>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Pie from "../../components/echart/pie.vue";

export default {
  data() {
    return {
      dialogtablePie: false,
      fit:"contain",
      plantID: "",
      plantData: [],
      saticData:[
        {
          id: "1111",
          name: "Test",
          plantingType: "A",
          url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        },
        {
          id: "1111",
          name: "Test",
          plantingType: "A",
          url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        }
      ],
    };
  },
  components: {
    Pie,
  },
  mounted() {},
  methods: {
    // 控制抽屉开关函数
    // drawertFunctionPie() {
    //   switch (this.i) {
    //     case 0:
    //       this.dialogtablePie = true;
    //       this.i = 1;
    //       break;
    //     case 1:
    //       this.dialogtablePie = false;
    //       this.i = 0;
    //       break;
    //   }
    //   // console.log(this.drawertable + "   " + this.i);
    // },
    tranMsgPie(data) {
      console.log(data + " PieTools");
      switch (data) {
        case "示范点":
          this.plantID = 0;
          break;
        case "大田类":
          this.plantID = 1;
          break;
        case "蔬菜类":
          this.plantID = 2;
          break;
        case "水果类":
          this.plantID = 3;
          break;
      }
      this.$agri({
        url: "panoramic/listPlantingItemByTypeId/"+this.plantID,
        method: "get",
      }).then((response) => {
        this.plantData=[];
        for (var i in response.data.object) {
          this.plantData.push({
            id: response.data.object[i].id,
            name: response.data.object[i].name,
            plantingType:response.data.object[i].plantingType.name,
            url:response.data.object[i].imgUrl
          });
        }
        console.log(this.plantData);
      });
    },
  },
};
</script>

<style lang="scss">
#pietool {
  padding: 1rem;
  height: 100%;
  min-width: 300px;
  border-radius: 5px;
  .bg-color-black {
    height: 100%;
    border-radius: 10px;
  }
  .text {
    color: #c3cbde;
  }
  .chart-box {
    margin-top: 1rem;
    width: 170px;
    height: 170px;
    .active-ring-name {
      padding-top: 10px;
    }
  }
}
#drawer {
  .image {
    width: 100%;
    display: block;
  }

  .item {
    margin-bottom: 10px;
  }
  .item_tag {
    float: left;
    text-align: left;
  }
  .item_desr {
    margin-left: 40%;
    min-height: 30px;
    text-align: left;
  }
  .text {
    width: 100%;
    font-size: 12px;
    font-family: "Microsoft YaHei";
    color: #909399;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both;
  }

  .el-card {
    min-width: 100%;
    height: 100%;
    margin-right: 20px;
    /*transition: all .5s;*/
  }
  .el-card:hover {
    margin-top: -5px;
  }
  .el-row {
    margin-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
    // max-height: 600px;
  }
  .el-col {
    border-radius: 4px;
    align-items: stretch;
    margin-bottom: 40px;
  }
}
</style>