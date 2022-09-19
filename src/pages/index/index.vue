<template>
  <e-container class="page">
    <e-status-bar></e-status-bar>
    <view class="page-header">
      <e-cell
        icon="https://cdn.uviewui.com/uview/album/1.jpg"
        title="李伟国"
        label="永德烟站片区管理员"
        isLink
        theme="white"
      ></e-cell>
      <view class="page-header-banner">
        <u-swiper
          :list="list"
          indicator
          indicatorMode="dot"
          circular
          height="238rpx"
        ></u-swiper>
      </view>
    </view>
    <view class="page-menu">
      <e-grid :list="menuList" col="4" @click="handleRoute"></e-grid>
    </view>
    <u-button type="primary" @click="handleClick">点击</u-button>
  </e-container>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      list: [
        'https://cdn.uviewui.com/uview/swiper/1.jpg',
        'https://cdn.uviewui.com/uview/swiper/2.jpg',
        'https://cdn.uviewui.com/uview/swiper/3.jpg',
      ],
      menuList: [
        {
          icon: 'ms-icon-price',
          title: '烟技员App',
          color: '001',
          path: '/pages/technician/index/index',
        },
        {
          icon: 'photo',
          title: '扫码作业',
          color: '002',
          path: '/pages/scan/index/index',
        },
        {
          icon: 'photo',
          title: '烟农小程序',
          color: '003',
          path: '/pages/applet/index/index',
        },
      ],
    };
  },
  methods: {
    handleRoute(item, index) {
      uni.$ec.route(item.path);
    },
    handleClick() {
      console.log(112123123);
      uni.showToast({
        title: 'xxxxxxxxxxxxxxxxxxx',
        icon: 'none',
      });
      debugger;
      // this.$permission.checkToken();
    },
  },
};
</script>
<
<style lang="scss" scoped>
.page {
  &-header {
    background: linear-gradient(
      180deg,
      $uni-color-primary 39%,
      $uni-bg-color 74%
    );
    &-banner {
      padding: 24rpx;
      height: 238rpx;
    }
  }
  &-menu {
    padding: 0 24rpx 32rpx;
    background: $uni-bg-color;
  }
}
</style>
