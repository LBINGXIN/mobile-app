<template>
  <e-container class="page">
    <e-navbar title="种植合同与烟田绑定"></e-navbar>
    <e-cell
      icon="https://cdn.uviewui.com/uview/album/1.jpg"
      title="李达强"
      label="已绑定8块田块，合计6.8亩"
      isLink
    ></e-cell>
    <e-popup :show="show" :overlay="false" title="我是标题">
      <div style="height： 400rpx; line-height: 400rpx;text-align: center">
        我是内容
      </div>
    </e-popup>
  </e-container>
</template>

<script>
export default {
  name: 'bind-field',
  data() {
    return {
      show: true,
    };
  },
};
</script>

<style lang="scss" scoped>
.page {
  height: 100%;
  background: rgba($uni-color-success, 0.2);
}
</style>
