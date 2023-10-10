<template>
  <div id="bartool">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span style="color: #5cd9e8">
          <icon name="chart-bar"></icon>
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">农业主推技术数据分布</span>
          <dv-decoration-3
            style="position: relative; width: 100px; height: 20px; top: -3px"
          />
        </div>
      </div>
      <div>
        <bar/>
      </div>
    </div>
  </div>
</template>


<script>
import Bar from '../../components/echart/bar.vue';

export default {
  data() {
    return {};
  },
  components: {
    Bar,
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss">
#bartool {
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