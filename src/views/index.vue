<template>
  <div id="index">
    <dv-full-screen-container class="bg">
      <dv-loading v-if="loading">Loading...</dv-loading>
      <div v-else class="host-body">
        <!-- 头顶标题栏等展示 -->
        <div class="d-flex jc-center">
          <dv-decoration-10 style="width: 33.3%; height: 5px" />
          <div class="d-flex jc-center">
            <dv-decoration-8
              :color="['#568aea', '#000000']"
              style="width: 200px; height: 50px"
            />
            <div class="title">
              <span class="title-text">智慧农业全景视窗</span>
              <dv-decoration-6
                class="title-bototm"
                :reverse="true"
                :color="['#50e3c2', '#67a1e5']"
                style="width: 250px; height: 8px"
              />
            </div>
            <dv-decoration-8
              :reverse="true"
              :color="['#568aea', '#000000']"
              style="width: 200px; height: 50px"
            />
          </div>
          <dv-decoration-10 style="width: 33.3%; height: 5px" />
        </div>

        <!-- 时间等标注信息 -->
        <!-- 第二行 -->
        <div class="d-flex jc-between px-2">
          <div class="d-flex" style="width: 40%">
            <div
              class="react-right ml-4"
              style="width: 500px; text-align: left; background-color: #0f1325"
            >
              <span class="react-before"></span>
              <span class="text fw-b">知识图谱结构</span>
            </div>
            <div class="react-right bg-color-blue ml-3">
              <span class="text fw-b">知识图谱展示</span>
            </div>
          </div>
          <div style="width: 40%" class="d-flex">
            <div class="react-left bg-color-blue mr-3">
              <span class="text fw-b">农业数据展示</span>
            </div>
            <div
              class="react-left mr-4"
              style="width: 500px; background-color: #0f1325; text-align: right"
            >
              <span class="react-after"></span>
              <span class="text"
                >{{ dateYear }} {{ dateWeek }} {{ dateDay }}</span
              >
            </div>
          </div>
        </div>

        <!-- 数据展示组件区域 -->
        <div class="body-box">
          <div class="charts-box">
            <!-- 主推技术地图图表区域 -->
            <div class="chart-mapbar-row">
              <div>
                <dv-border-box-12>
                  <mapbartool />
                </dv-border-box-12>
              </div>
              <div>
                <dv-border-box-12>
                  <bartool />
                </dv-border-box-12>
              </div>
            </div>
            <!-- 图谱图表区域 -->
            <div>
              <dv-border-box-12>
                <graphtool />
              </dv-border-box-12>
            </div>
            <!-- 剩余三个数据分布情况图表区域 -->
            <div class="chart-box-row">
              <div>
                <dv-border-box-12>
                  <pietool />
                </dv-border-box-12>
              </div>

              <div>
                <dv-border-box-12>
                  <textitemtools />
                </dv-border-box-12>
              </div>

              <div>
                <dv-border-box-12>
                  <zhexiantool />
                </dv-border-box-12>
              </div>
            </div>
          </div>
        </div>
      </div>
    </dv-full-screen-container>
  </div>
</template>

<script>
import { formatTime } from "../utils/setTime.js";
import Graphtool from "./echarts/graphtool.vue";
import Mapbartool from "./echarts/mapbartool.vue";
import Pietool from "./echarts/pietool.vue";
import Bartool from "./echarts/bartools.vue";
import Zhexiantool from "./echarts/zhexiantool.vue";
import Textitemtools from "./odds/textitemtools.vue";

export default {
  data() {
    return {
      loading: true,
      timing: null,
      dateDay: null,
      dateYear: null,
      dateWeek: null,
      weekday: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
    };
  },
  components: {
    Mapbartool,
    Graphtool,
    Zhexiantool,
    Pietool,
    Textitemtools,
    Bartool,
  },
  mounted() {
    this.timeFn();
    this.cancelLoading();
  },
  beforeDestroy() {
    clearInterval(this.timing);
  },
  methods: {
    timeFn() {
      this.timing = setInterval(() => {
        this.dateDay = formatTime(new Date(), "HH: mm: ss");
        this.dateYear = formatTime(new Date(), "yyyy-MM-dd");
        this.dateWeek = this.weekday[new Date().getDay()];
      }, 1000);
    },
    cancelLoading() {
      setTimeout(() => {
        this.loading = false;
      }, 500);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/index.scss";
</style>
