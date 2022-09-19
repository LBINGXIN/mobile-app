<template>
  <e-container class="page">
    <e-status-bar></e-status-bar>
    <view class="page-header">
      <e-cell
        icon="https://cdn.uviewui.com/uview/album/1.jpg"
        title="李伟国"
        label="上杭县城关镇桂花村88号"
        theme="white"
      ></e-cell>
      <view class="page-header-card">
        <text class="page-header-card__title">
          您好，您今年的合同签订情况如下：
        </text>
        <e-data :list="dataList"></e-data>
      </view>
    </view>
    <view class="page-list">
      <e-cell
        icon="ms-icon-file-search_fill"
        title="合同查询"
        label="查询种植合同详细信息"
        space="24"
      >
        <u-button type="primary" slot="value" plain @click="handleRoute"
          >查询</u-button
        >
      </e-cell>
      <e-cell
        icon="ms-icon-file-edit_fill"
        title="合同签订签名"
        color="002"
        space="24"
      >
        <text slot="label"
          >您有<text class="active">1份</text>合同需要签名确认</text
        >
        <u-button type="primary" slot="value" @click="handleRoute"
          >去签名</u-button
        >
      </e-cell>
      <e-cell
        color="003"
        icon="ms-icon-file-adjustment_fill"
        title="合同调整签名"
        label="暂无合同调整需要签名"
        space="24"
      >
        <u-button type="primary" slot="value" plain @click="handleRoute"
          >查看</u-button
        >
      </e-cell>
      <e-cell
        color="007"
        icon="ms-icon-file-delete_fill"
        title="合同作废签名"
        label="暂无合同作废需要签名"
        space="24"
      >
        <u-button type="primary" slot="value" plain @click="handleRoute"
          >查看</u-button
        >
      </e-cell>
      <e-cell
        icon="ms-icon-tongzhi2_fill"
        title="返回"
        color="008"
        label="返回上一页示例"
        space="24"
      >
        <u-button type="error" slot="value" @click="handleBack"
          >返回上一页</u-button
        >
      </e-cell>
    </view>
    <view class="page-manage">
      <text class="page-manage-title u-line-1">我的片区管理员 </text>
      <view class="page-manage-list">
        <view class="page-manage-list-item">
          <e-cell
            icon="https://cdn.uviewui.com/uview/album/1.jpg"
            title="李卫国"
            label="15834121234"
            rightIconType="circle"
            rightIcon="ms-icon-dianhua"
          >
          </e-cell>
        </view>
      </view>
    </view>
  </e-container>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      dataList: [
        {
          title: '6270.0',
          label: '约定收购量(担)',
        },
        {
          title: '328.6',
          label: '种植面积(亩)',
        },
      ],
    };
  },
  methods: {
    // 页面跳转
    handleRoute() {
      uni.$ec.route('/pages/applet/contract/index');
    },
    // 返回
    handleBack() {
      console.log(12312);
      uni.$ec.route({
        url: '/',
        type: 'back',
      });
    },
  },
};
</script>
<
<style lang="scss" scoped>
.page {
  &-header {
    width: 100%;
    background: linear-gradient(
      180deg,
      $uni-color-primary 39%,
      rgba($uni-color-primary, 0) 74%
    );
    &-card {
      margin: 0 32rpx;
      padding-bottom: 28rpx;
      border-radius: 12rpx;
      background: linear-gradient(174.08deg, #d1ebff 0%, #fff 70%);
      box-shadow: 0 3px 6px rgba(0, 112, 210, 0.1);
      &__title {
        padding: 24rpx 32rpx;
        @include text($uni-text-color, 28rpx);
      }
    }
  }
  &-list {
    padding: 0 32rpx;
  }
  &-manage {
    margin: 24rpx 32rpx 0;
    background: #fff;
    &-title {
      padding: 32rpx 32rpx 0;
      @include text($uni-text-color-grey, 24rpx, 40rpx);
    }
  }
}
</style>
