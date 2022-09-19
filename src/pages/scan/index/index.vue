<template>
  <e-container class="page">
    <e-status-bar></e-status-bar>
    <view class="page-header">
      <e-cell
        icon="https://cdn.uviewui.com/uview/album/1.jpg"
        title="李伟国"
        label="永德烟站片区管理员"
        theme="white"
      ></e-cell>
      <view class="page-header-banner">
        <u-swiper
          :list="bannerList"
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
    <view class="page-list">
      <view class="page-list-item" v-for="(item, index) in list" :key="index">
        <e-card-detail
          icon="file-text"
          color="007"
          :title="item.title"
          :model="item.items"
          footTitle="去扫码入库"
          @click="handleScanBind(item)"
        >
          <view class="page-list-item-data" slot="body-top">
            <e-data :list="item.data"></e-data>
          </view>
        </e-card-detail>
      </view>
    </view>
  </e-container>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      bannerList: [
        'https://cdn.uviewui.com/uview/swiper/1.jpg',
        'https://cdn.uviewui.com/uview/swiper/2.jpg',
        'https://cdn.uviewui.com/uview/swiper/3.jpg',
      ],
      menuList: [
        {
          icon: 'ms-icon-price',
          title: '烟包追溯',
          color: '001',
          path: '/pages/scan/tracing/index',
        },
        {
          icon: 'ms-icon-back',
          title: '返回上一页',
          color: '006',
          type: 'back',
          path: '/pages/index/index',
        },
        {
          icon: 'ms-icon-storehouse-search',
          title: '交接质检',
          color: '003',
        },
        {
          icon: 'ms-icon-storehouse-in',
          title: '扫码入库',
          color: '004',
        },
        {
          icon: 'ms-icon-storehouse-out',
          title: '调拔出库',
          color: '005',
        },
        {
          icon: 'ms-icon-arrange-report',
          title: '补重出库',
          color: '006',
        },
        {
          icon: 'ms-icon-organization',
          title: '扫码移垛',
          color: '007',
        },
        {
          icon: 'ms-icon-application2',
          title: '移库出库',
          color: '008',
        },
        {
          icon: 'ms-icon-shop-into',
          title: '移库入库',
          color: '009',
        },
        {
          icon: 'ms-icon-dynamic',
          title: '烟包调级',
          color: '010',
        },
        {
          icon: 'ms-icon-tosend',
          title: '到货点件',
          color: '011',
        },
        {
          icon: 'ms-icon-setting',
          title: '点件管理',
          color: '012',
        },
      ],
      list: [
        {
          title: '发货单号A3204228000001',
          data: [
            { title: '闽D8908X', label: '车牌号' },
            { title: '400', label: '发货件数' },
          ],
          items: [
            { label: '发货单位', value: '发货单位1' },
            { label: '到货仓库', value: '到货仓库1' },
            { label: '业务类型', value: '业务类型1' },
            { label: '发货日期', value: '2022年7月15日' },
          ],
        },
        {
          title: '发货单号A3204228000001',
          data: [
            { title: '闽D8908X', label: '车牌号' },
            { title: '400', label: '发货件数' },
          ],
          items: [
            { label: '发货单位', value: '发货单位1' },
            { label: '到货仓库', value: '到货仓库1' },
            { label: '业务类型', value: '业务类型1' },
            { label: '发货日期', value: '2022年7月15日' },
          ],
        },
        {
          title: '发货单号A3204228000001',
          data: [
            { title: '闽D8908X', label: '车牌号' },
            { title: '400', label: '发货件数' },
          ],
          items: [
            { label: '发货单位', value: '发货单位1' },
            { label: '到货仓库', value: '到货仓库1' },
            { label: '业务类型', value: '业务类型1' },
            { label: '发货日期', value: '2022年7月15日' },
          ],
        },
      ],
    };
  },
  methods: {
    // 去扫码绑定
    handleScanBind(item) {
      // TODO
    },
    // 页面跳转
    handleRoute(item, index) {
      // 没地方写返回，所以写在这里，开发时可以删除
      if (item.type === 'back') {
        uni.$ec.route({
          type: item.type,
          url: item.path,
        });
      }
      uni.$ec.route(item.path);
    },
  },
};
</script>
<
<style lang="scss" scoped>
.page {
  &-header {
    background: linear-gradient(180deg, #0070d2 39%, #fff 74%);
    &-banner {
      padding: 24rpx;
      height: 238rpx;
    }
  }
  &-menu {
    padding: 0 24rpx 32rpx;
    background: #fff;
  }
  &-list {
    &-item {
      &-data {
        margin: 16rpx 0;
      }
    }
  }
}
</style>
