<template>
  <div id="zhexiantool">
    <div class="bg-color-black ">
      <div class="d-flex pt-2 pl-2">
        <span style="color:#5cd9e8">
          <icon name="chart-bar"></icon>
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">用户活跃度</span>
          <dv-decoration-3
            style="position: relative; width: 100px; height: 20px; top: -3px"
          />
        </div>
      </div>
      <div>
          <Zhexian/>
      </div>
    </div>
  </div>
</template>


<script>
import Zhexian from "../../components/echart/zhexian.vue";
export default {
  data() {
    return {};
  },
  components: {
    Zhexian
},
  mounted() {
  },
  methods: {}
};
</script>

<style lang="scss">
#zhexiantool{
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