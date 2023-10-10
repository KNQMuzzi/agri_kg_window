<template>
  <!-- 图片列表显示区域 -->
  <div>
    <el-row :gutter="20" class="el-row" type="flex">
      <el-col
        :span="8"
        v-for="(item, index) in apps"
        :key="item.id"
        class="el-col"
      >
        <el-card class="el-card" :key="index" onclick="">
          <div slot="header" class="clearfix">
            <span>{{ item.appname }}</span>
          </div>
          <div>
            <div class="text item">
              <div class="item_tag">
                <span>商务合作：</span>
              </div>
              <div class="item_desr">
                {{ item.buscoo }}
              </div>
            </div>
            <el-image
              style="width: 100%; height: 150px"
              :src="url"
              :fit="fit"
            ></el-image>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>


<script>
export default {
  data() {
    return {
      apps: [
        {
          id: "1111",
        },
        {
          id: "1111",
        },
        {
          id: "1111",
        },
        {
          id: "1111",
        },
        {
          id: "1111",
        },
      ],
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss">
.image {
  width: 100%;
  display: block;
}
.all {
  margin-top: -30px;
  word-break: break-all;
  height: 100%;
}
.mid {
  margin-top: 25%;
  height: 50%;
}
.mid_item {
  justify-content: center;
  align-items: center;
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
}
.el-col {
  border-radius: 4px;
  align-items: stretch;
  margin-bottom: 40px;
}
</style>