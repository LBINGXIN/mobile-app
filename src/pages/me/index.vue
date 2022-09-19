<template>
  <e-container class="page">
    <view class="page-header">
      <u-avatar
        src="https://cdn.uviewui.com/uview/album/1.jpg"
        size="100"
      ></u-avatar>
      <text class="page-header-title">欧拉</text>
    </view>

    <view class="page-list">
      <u-cell-group>
        <u-cell title="表单" isLink @click="handleToForm"></u-cell>
      </u-cell-group>
    </view>

    <u-button text="退出登录" @click="handlelogout"></u-button>
  </e-container>
</template>
<script>
export default {
  name: 'Me',
  data() {
    return {};
  },
  methods: {
    // 跳转表单
    handleToForm() {
      uni.$ec.route('/pages/form/index/index');
    },
    // 退出登录
    handlelogout() {
      this.$permission.logout();
    },
  },
};
</script>
<style lang="scss" scoped>
.page {
  .page-header {
    width: 100%;
    height: 500rpx;
    display: flex;
    align-items: center;
    background: #0070d2;
    padding: 0 50rpx;
    .page-header-title {
      font-size: 60rpx;
      color: #fff;
      margin-left: 32rpx;
    }
  }
  .page-list {
    margin-top: 60rpx;
  }
}
</style>
