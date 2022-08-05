<template>
  <div id="maptool">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span style="color: #5cd9e8">
          <icon name="chart-bar"></icon>
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">农业主推技术分布展示</span>
          <dv-decoration-3
            style="position: relative; width: 100px; height: 20px; top: -3px"
          />
        </div>
      </div>

      <div @click="dialogtableMapbar = true">
        <Mapbar v-on:mapbarson="tranMsg"></Mapbar>
        <el-dialog
          title="主推技术列表"
          :visible.sync="dialogtableMapbar"
          width="50%"
          append-to-body
          close-on-press-escape
          :destroy-on-close="true"
          direction="rtl"
          :lock-scroll="true"
        >
          <el-table :data="gridData"
          max-height="700px">
            <el-table-column
              property="technologyArea.name"
              label="省份/区域"
              width="250"
            ></el-table-column>
            <el-table-column
              property="name"
              label="主推技术标题"
              width="400"
            ></el-table-column>
            <el-table-column property="source" label="来源"></el-table-column>
          </el-table>
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<script>
import Mapbar from "../../components/echart/mapbar.vue";

export default {
  data() {
    return {
      dialogtableMapbar: false,
      i: 0,
      gridData: [],
      sourceData: [
        {
          id: 221,
          name: "双季稻“三控”施肥技术",
          technologyArea: {
            id: 18,
            name: "江西",
            gmtModified: null,
            gmtCreate: null,
            deleted: null,
          },
          source: "江西省农业农村厅",
          otherInfo: "",
          gmtModified: null,
          gmtCreate: 1640349716000,
          deleted: 0,
          content: null,
        },
        {
          id: 222,
          name: "江西省油菜高产高效关键技术",
          technologyArea: {
            id: 18,
            name: "江西",
            gmtModified: null,
            gmtCreate: null,
            deleted: null,
          },
          source: "江西省农业农村厅",
          otherInfo: "",
          gmtModified: null,
          gmtCreate: 1640349847000,
          deleted: 0,
          content: null,
        },
        {
          id: 223,
          name: "优质稻“两优一增”壮杆保优标准化栽培技术",
          technologyArea: {
            id: 18,
            name: "江西",
            gmtModified: null,
            gmtCreate: null,
            deleted: null,
          },
          source: "江西省农业农村厅",
          otherInfo: "",
          gmtModified: null,
          gmtCreate: 1640349942000,
          deleted: 0,
          content: null,
        },
        {
          id: 224,
          name: "水稻测土配方施肥技术",
          technologyArea: {
            id: 18,
            name: "江西",
            gmtModified: null,
            gmtCreate: null,
            deleted: null,
          },
          source: "江西省土壤肥料技术推广站",
          otherInfo: "",
          gmtModified: null,
          gmtCreate: 1640349982000,
          deleted: 0,
          content: null,
        },
        {
          id: 226,
          name: "桑蚕方格蔟自动化上蔟技术",
          technologyArea: {
            id: 18,
            name: "江西",
            gmtModified: null,
            gmtCreate: null,
            deleted: null,
          },
          source: "江西省农业厅经济作物站",
          otherInfo: "",
          gmtModified: null,
          gmtCreate: 1640350095000,
          deleted: 0,
          content: null,
        },
        {
          id: 227,
          name: "生态茶园标准化生产技术",
          technologyArea: {
            id: 18,
            name: "江西",
            gmtModified: null,
            gmtCreate: null,
            deleted: null,
          },
          source: "江西省经济作物技术推广站",
          otherInfo: "",
          gmtModified: null,
          gmtCreate: 1640350120000,
          deleted: 0,
          content: null,
        },
        {
          id: 228,
          name: "根部施药防治柑橘木虱技术",
          technologyArea: {
            id: 18,
            name: "江西",
            gmtModified: null,
            gmtCreate: null,
            deleted: null,
          },
          source: "赣南师范大学国家脐橙工程技术研究中心",
          otherInfo: "",
          gmtModified: null,
          gmtCreate: 1640350158000,
          deleted: 0,
          content: null,
        },
        {
          id: 229,
          name: "南丰蜜橘省力化树体管理技术",
          technologyArea: {
            id: 18,
            name: "江西",
            gmtModified: null,
            gmtCreate: null,
            deleted: null,
          },
          source: "江西省农业科学院园艺研究所",
          otherInfo: "",
          gmtModified: null,
          gmtCreate: 1640350193000,
          deleted: 0,
          content: null,
        },
        {
          id: 230,
          name: "井冈蜜柚水肥一体化技术",
          technologyArea: {
            id: 18,
            name: "江西",
            gmtModified: null,
            gmtCreate: null,
            deleted: null,
          },
          source: "吉安市井冈山农业科技园管委会",
          otherInfo: "",
          gmtModified: null,
          gmtCreate: 1640350215000,
          deleted: 0,
          content: null,
        },
        {
          id: 231,
          name: "江西省主要特色蔬菜连作障碍综合防治关键技术",
          technologyArea: {
            id: 18,
            name: "江西",
            gmtModified: null,
            gmtCreate: null,
            deleted: null,
          },
          source: "江西农业大学",
          otherInfo: "",
          gmtModified: null,
          gmtCreate: 1640350254000,
          deleted: 0,
          content: null,
        },
        {
          id: 232,
          name: "拱棚二膜越冬番茄栽培技术",
          technologyArea: {
            id: 18,
            name: "江西",
            gmtModified: null,
            gmtCreate: null,
            deleted: null,
          },
          source: "江西省赣州市农业和粮食局",
          otherInfo: "",
          gmtModified: null,
          gmtCreate: 1640350300000,
          deleted: 0,
          content: null,
        },
        {
          id: 233,
          name: "广丰马家柚轻简化修剪技术",
          technologyArea: {
            id: 18,
            name: "江西",
            gmtModified: null,
            gmtCreate: null,
            deleted: null,
          },
          source: "江西农业大学农学院",
          otherInfo: "",
          gmtModified: null,
          gmtCreate: 1640350370000,
          deleted: 0,
          content: null,
        },
        {
          id: 234,
          name: "‘赣南早’脐橙及其配套栽培技术",
          technologyArea: {
            id: 18,
            name: "江西",
            gmtModified: null,
            gmtCreate: null,
            deleted: null,
          },
          source: "赣南师范大学国家脐橙工程技术研究中心",
          otherInfo: "",
          gmtModified: null,
          gmtCreate: 1640350395000,
          deleted: 0,
          content: null,
        },
        {
          id: 235,
          name: "早熟梨轻简化生产技术",
          technologyArea: {
            id: 18,
            name: "江西",
            gmtModified: null,
            gmtCreate: null,
            deleted: null,
          },
          source: "江西省农业科学院土壤肥料与资源环境研究所",
          otherInfo: "",
          gmtModified: null,
          gmtCreate: 1640350427000,
          deleted: 0,
          content: null,
        },
        {
          id: 236,
          name: "南丰蜜橘留树保鲜技术",
          technologyArea: {
            id: 18,
            name: "江西",
            gmtModified: null,
            gmtCreate: null,
            deleted: null,
          },
          source: "江西省农业科学院园艺研究所",
          otherInfo: "",
          gmtModified: null,
          gmtCreate: 1640350465000,
          deleted: 0,
          content: null,
        },
        {
          id: 237,
          name: "广丰马家柚土壤生物覆盖技术",
          technologyArea: {
            id: 18,
            name: "江西",
            gmtModified: null,
            gmtCreate: null,
            deleted: null,
          },
          source: "江西农业大学农学院",
          otherInfo: "",
          gmtModified: null,
          gmtCreate: 1640350518000,
          deleted: 0,
          content: null,
        },
        {
          id: 238,
          name: "设施蔬菜（茄果类）绿色优质高效栽培技术",
          technologyArea: {
            id: 18,
            name: "江西",
            gmtModified: null,
            gmtCreate: null,
            deleted: null,
          },
          source: "江西省经济作物技术推广站",
          otherInfo: "",
          gmtModified: null,
          gmtCreate: 1640350543000,
          deleted: 0,
          content: null,
        },
        {
          id: 239,
          name: "露地蔬菜（叶菜类）绿色优质高效栽培技术",
          technologyArea: {
            id: 18,
            name: "江西",
            gmtModified: null,
            gmtCreate: null,
            deleted: null,
          },
          source: "江西省经济作物技术推广站",
          otherInfo: "",
          gmtModified: null,
          gmtCreate: 1640350563000,
          deleted: 0,
          content: null,
        },
        {
          id: 240,
          name: "地方特色蔬菜绿色优质高效栽培技术",
          technologyArea: {
            id: 18,
            name: "江西",
            gmtModified: null,
            gmtCreate: null,
            deleted: null,
          },
          source: "江西省经济作物技术推广站",
          otherInfo: "",
          gmtModified: null,
          gmtCreate: 1640350594000,
          deleted: 0,
          content: null,
        },
        {
          id: 241,
          name: "稻鳖共作技术模式",
          technologyArea: {
            id: 18,
            name: "江西",
            gmtModified: null,
            gmtCreate: null,
            deleted: null,
          },
          source: "江西省水产技术推广站",
          otherInfo: "",
          gmtModified: null,
          gmtCreate: 1640350849000,
          deleted: 0,
          content: null,
        },
        {
          id: 242,
          name: "稻虾（小龙虾）综合种养技术",
          technologyArea: {
            id: 18,
            name: "江西",
            gmtModified: null,
            gmtCreate: null,
            deleted: null,
          },
          source: "江西省水产技术推广站",
          otherInfo: "",
          gmtModified: null,
          gmtCreate: 1640350881000,
          deleted: 0,
          content: null,
        },
        {
          id: 243,
          name: "池塘养殖尾水处理技术",
          technologyArea: {
            id: 18,
            name: "江西",
            gmtModified: null,
            gmtCreate: null,
            deleted: null,
          },
          source: "江西省水产技术推广站",
          otherInfo: "",
          gmtModified: null,
          gmtCreate: 1640351257000,
          deleted: 0,
          content: null,
        },
        {
          id: 244,
          name: "草鱼人工免疫防疫技术",
          technologyArea: {
            id: 18,
            name: "江西",
            gmtModified: null,
            gmtCreate: null,
            deleted: null,
          },
          source: "江西省水产技术推广站",
          otherInfo: "",
          gmtModified: null,
          gmtCreate: 1640351307000,
          deleted: 0,
          content: null,
        },
        {
          id: 245,
          name: "池塘工程化循环流水养殖技术",
          technologyArea: {
            id: 18,
            name: "江西",
            gmtModified: null,
            gmtCreate: null,
            deleted: null,
          },
          source: "江西省水产技术推广站",
          otherInfo: "",
          gmtModified: null,
          gmtCreate: 1640351388000,
          deleted: 0,
          content: null,
        },
        {
          id: 246,
          name: "水稻生产全程机械化侧深施肥技术",
          technologyArea: {
            id: 18,
            name: "江西",
            gmtModified: null,
            gmtCreate: null,
            deleted: null,
          },
          source: "江西省农业机械化技术推广监测站",
          otherInfo: "",
          gmtModified: null,
          gmtCreate: 1640351412000,
          deleted: 0,
          content: null,
        },
        {
          id: 247,
          name: "棉花高产栽培集成技术应用推广",
          technologyArea: {
            id: 18,
            name: "江西",
            gmtModified: null,
            gmtCreate: null,
            deleted: null,
          },
          source: "江西省经济作物技术推广站",
          otherInfo: "",
          gmtModified: null,
          gmtCreate: 1640351506000,
          deleted: 0,
          content: null,
        },
        {
          id: 248,
          name: "高床节水育肥猪舍设计技术",
          technologyArea: {
            id: 18,
            name: "江西",
            gmtModified: null,
            gmtCreate: null,
            deleted: null,
          },
          source: "江西省畜牧技术推广站 ",
          otherInfo: "",
          gmtModified: null,
          gmtCreate: 1640351532000,
          deleted: 0,
          content: null,
        },
        {
          id: 249,
          name: "蛋鸭笼养技术",
          technologyArea: {
            id: 18,
            name: "江西",
            gmtModified: null,
            gmtCreate: null,
            deleted: null,
          },
          source: "江西省畜牧技术推广站",
          otherInfo: "",
          gmtModified: null,
          gmtCreate: 1640351723000,
          deleted: 0,
          content: null,
        },
        {
          id: 250,
          name: "优质肉羊品种培育及繁育技术",
          technologyArea: {
            id: 18,
            name: "江西",
            gmtModified: null,
            gmtCreate: null,
            deleted: null,
          },
          source: "江西省农业科学院畜牧兽医研究所",
          otherInfo: "",
          gmtModified: null,
          gmtCreate: 1640351747000,
          deleted: 0,
          content: null,
        },
        {
          id: 251,
          name: "优质牧草高产栽培、青贮及农副产品保存技术",
          technologyArea: {
            id: 18,
            name: "江西",
            gmtModified: null,
            gmtCreate: null,
            deleted: null,
          },
          source: "江西省畜牧技术推广站",
          otherInfo: "",
          gmtModified: null,
          gmtCreate: 1640351919000,
          deleted: 0,
          content: null,
        },
        {
          id: 252,
          name: "优良肉牛品种及繁育技术",
          technologyArea: {
            id: 18,
            name: "江西",
            gmtModified: null,
            gmtCreate: null,
            deleted: null,
          },
          source: "江西省畜牧技术推广站",
          otherInfo: "",
          gmtModified: null,
          gmtCreate: 1640352367000,
          deleted: 0,
          content: null,
        },
        {
          id: 253,
          name: "N2N区域沼气生态循环农业技术模式",
          technologyArea: {
            id: 18,
            name: "江西",
            gmtModified: null,
            gmtCreate: null,
            deleted: null,
          },
          source: "江西省农业生态与资源保护站",
          otherInfo: "",
          gmtModified: null,
          gmtCreate: 1640353066000,
          deleted: 0,
          content: null,
        },
        {
          id: 359,
          name: "江西省稻油轮作高效栽培技术",
          technologyArea: {
            id: 18,
            name: "江西",
            gmtModified: null,
            gmtCreate: null,
            deleted: null,
          },
          source: "江西省农业技术推广总站",
          otherInfo: "",
          gmtModified: null,
          gmtCreate: 1640679512000,
          deleted: 0,
          content: null,
        },
        {
          id: 360,
          name: "水稻“三控”抗倒绿色节本增效技术",
          technologyArea: {
            id: 18,
            name: "江西",
            gmtModified: null,
            gmtCreate: null,
            deleted: null,
          },
          source: "江西省农业技术推广总站",
          otherInfo: "",
          gmtModified: null,
          gmtCreate: 1640679543000,
          deleted: 0,
          content: null,
        },
        {
          id: 361,
          name: "籼粳杂交稻优质高产高效栽培技术",
          technologyArea: {
            id: 18,
            name: "江西",
            gmtModified: null,
            gmtCreate: null,
            deleted: null,
          },
          source: "江西省农业技术推广总站",
          otherInfo: "",
          gmtModified: null,
          gmtCreate: 1640679569000,
          deleted: 0,
          content: null,
        },
        {
          id: 362,
          name: "再生稻机械化生产技术",
          technologyArea: {
            id: 18,
            name: "江西",
            gmtModified: null,
            gmtCreate: null,
            deleted: null,
          },
          source: "江西省农业科学院土壤肥料与资源环境研究所",
          otherInfo: "",
          gmtModified: null,
          gmtCreate: 1640679845000,
          deleted: 0,
          content: null,
        },
        {
          id: 363,
          name: "马铃薯－中稻轮作栽培技术",
          technologyArea: {
            id: 18,
            name: "江西",
            gmtModified: null,
            gmtCreate: null,
            deleted: null,
          },
          source: "江西省农业科学院作物研究所",
          otherInfo: "",
          gmtModified: null,
          gmtCreate: 1640680174000,
          deleted: 0,
          content: null,
        },
        {
          id: 393,
          name: "赣南柑橘黄龙病综合防控关键技术",
          technologyArea: {
            id: 18,
            name: "江西",
            gmtModified: null,
            gmtCreate: null,
            deleted: null,
          },
          source: "江西省植保植检局",
          otherInfo: "",
          gmtModified: null,
          gmtCreate: 1640681149000,
          deleted: 0,
          content: null,
        },
        {
          id: 395,
          name: "紫云英（绿肥）种植利用技术",
          technologyArea: {
            id: 18,
            name: "江西",
            gmtModified: null,
            gmtCreate: null,
            deleted: null,
          },
          source: "江西省土壤肥料技术推广站",
          otherInfo: "",
          gmtModified: 1640681402000,
          gmtCreate: 1640681350000,
          deleted: 0,
          content: null,
        },
        {
          id: 396,
          name: "江西茶园有机肥与茶叶专用肥配施减肥增效技术",
          technologyArea: {
            id: 18,
            name: "江西",
            gmtModified: null,
            gmtCreate: null,
            deleted: null,
          },
          source: "江西省蚕桑茶叶研究所",
          otherInfo: "",
          gmtModified: 1640681561000,
          gmtCreate: 1640681430000,
          deleted: 0,
          content: null,
        },
        {
          id: 397,
          name: "车前子标准化栽培技术",
          technologyArea: {
            id: 18,
            name: "江西",
            gmtModified: null,
            gmtCreate: null,
            deleted: null,
          },
          source: "江西中医药大学",
          otherInfo: "",
          gmtModified: 1640682182000,
          gmtCreate: 1640682105000,
          deleted: 0,
          content: null,
        },
        {
          id: 398,
          name: "春提早辣椒栽培技术",
          technologyArea: {
            id: 18,
            name: "江西",
            gmtModified: null,
            gmtCreate: null,
            deleted: null,
          },
          source: "高安市农业农村局",
          otherInfo: "",
          gmtModified: null,
          gmtCreate: 1640682202000,
          deleted: 0,
          content: null,
        },
        {
          id: 399,
          name: "早熟温州蜜柑大棚完熟栽培技术",
          technologyArea: {
            id: 18,
            name: "江西",
            gmtModified: null,
            gmtCreate: null,
            deleted: null,
          },
          source: "江西农业大学",
          otherInfo: "",
          gmtModified: null,
          gmtCreate: 1640683002000,
          deleted: 0,
          content: null,
        },
        {
          id: 400,
          name: "柑橘轻简化栽培技术",
          technologyArea: {
            id: 18,
            name: "江西",
            gmtModified: null,
            gmtCreate: null,
            deleted: null,
          },
          source: "新干县农业农村局（果业局）",
          otherInfo: "",
          gmtModified: null,
          gmtCreate: 1640683783000,
          deleted: 0,
          content: null,
        },
        {
          id: 402,
          name: "南方地区草田轮作精准生产技术",
          technologyArea: {
            id: 18,
            name: "江西",
            gmtModified: null,
            gmtCreate: null,
            deleted: null,
          },
          source: "江西省畜牧技术推广站",
          otherInfo: "",
          gmtModified: null,
          gmtCreate: 1640684163000,
          deleted: 0,
          content: null,
        },
        {
          id: 403,
          name: "南方肉羊高床建设规范及规模化养殖技术",
          technologyArea: {
            id: 18,
            name: "江西",
            gmtModified: null,
            gmtCreate: null,
            deleted: null,
          },
          source: "江西省畜牧技术推广站",
          otherInfo: "",
          gmtModified: 1640840438000,
          gmtCreate: 1640697649000,
          deleted: 0,
          content: null,
        },
        {
          id: 406,
          name: "牛结节性皮肤病防控技术",
          technologyArea: {
            id: 18,
            name: "江西",
            gmtModified: null,
            gmtCreate: null,
            deleted: null,
          },
          source: "江西农业大学",
          otherInfo: "",
          gmtModified: 1640840409000,
          gmtCreate: 1640747275000,
          deleted: 0,
          content: null,
        },
      ],
    };
  },
  components: {
    Mapbar,
  },
  mournted() {
    // this.initData();
  },
  methods: {
    tranMsg(data) {
      this.gridData=[];
      this.$agri({
        url: "mainTechnology/listTechnologyArticleNotDeletedByAreaId/"+data,
        method: "get",
      }).then((response) => {
        for (var i in response.data.object) {
          this.gridData.push({
          name: response.data.object[i].name,
          technologyArea: {
            name: response.data.object[i].technologyArea.name
          },
          source: response.data.object[i].source,
          });
        }})
      // console.log(data + " MapBarTools");
    },
  },
};
</script>

<style lang="scss">
#maptool {
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
</style>
