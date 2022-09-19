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
      <view class="page-header-card">
        <text class="page-header-card__title">
          您负责的种植者共有100户，88 户已签订合同， 总体签订情况如下：
        </text>
        <e-data :list="dataList"></e-data>
      </view>
    </view>
    <view class="page-list">
      <e-cell icon="photo" title="合同查询" label="查询种植合同详细信息">
        <u-button type="primary" slot="value" plain @click="handleSearch"
          >查询</u-button
        >
      </e-cell>
      <e-cell
        color="012"
        icon="photo"
        title="合同查询"
        label="查询种植合同详细信息"
        space="24"
      >
        <u-button type="primary" slot="value" plain @click="handleContact"
          >查询</u-button
        >
      </e-cell>
      <e-cell icon="photo" title="合同签订签名" color="002" space="24">
        <text slot="label"
          >有<text class="active">8份</text>合同签订需要签名</text
        >
        <u-button type="primary" slot="value">去签名</u-button>
      </e-cell>
      <e-cell icon="photo" title="种植合同与烟田绑定" color="002" space="24">
        <text slot="label"
          >有<text class="active">31份</text>合同未绑定烟田</text
        >
        <u-button type="primary" slot="value">去绑定</u-button>
        <view class="page-process">
          <text class="page-process-text">已绑定合同8 /39份</text>
          <u-line-progress
            :percentage="30"
            activeColor="#0070d2"
          ></u-line-progress>
        </view>
      </e-cell>
      <e-cell icon="photo" title="移栽期合同调整签名" color="008" space="24">
        <text slot="label"
          >有<text class="active">31份</text>合同签订需要签名</text
        >
        <u-button type="error" slot="value" @click="handleBack"
          >返回上一页</u-button
        >
      </e-cell>
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
    // 查询合同
    handleSearch() {
      uni.$ec.route('/pages/technician/contract/index');
    },
    // 合同列表
    handleContact() {
      uni.$ec.route('/pages/technician/contract-list/index');
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
    padding-bottom: 32rpx;
    background: linear-gradient(
      180deg,
      $uni-color-primary 39%,
      $uni-bg-color 74%
    );
    &-card {
      margin: 0 32rpx;
      padding-bottom: 34rpx;
      border-radius: 12rpx;
      background: linear-gradient(174.08deg, #d1ebff 0%, $uni-bg-color 70%);
      box-shadow: 0 3px 6px rgba(0, 112, 210, 0.1);
      &__title {
        padding: 24rpx 32rpx 16rpx;
        @include text($uni-text-color, 28rpx);
      }
    }
  }
  &-list {
    padding: 0 32rpx;
    background: $uni-bg-color;
    .page-process {
      padding: 0 32rpx 24rpx 144rpx;
      margin-top: -6rpx;
      &-text {
        @include text($uni-text-color-placeholder, 24rpx);
        margin-bottom: 6rpx;
      }
    }
  }
}
</style>
