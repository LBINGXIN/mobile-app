<template>
  <e-container class="page">
    <view class="page-tile">
      <view class="page-tile-item">
        <text class="page-tile-item__title u-line-1">签订种植面积</text>
        <view class="page-tile-item__sum">
          <text class="page-tile-item__sum-value">68.0</text>
          <text class="page-tile-item__sum-unit">亩</text>
        </view>
        <view class="page-tile-item__data">
          <text class="page-tile-item__data-label">同比去年：</text>
          <text class="page-tile-item__data-value">-2.6亩</text>
          <!-- 减少 -->
          <view class="page-tile-item__data-icon decrease">
            <e-icon
              type="ms-icon-arrow-down"
              size="28"
              color="#cf2613"
            ></e-icon>
          </view>
          <!-- 增长 -->
          <!-- <view class="page-tile-item__data-icon increase">
            <e-icon type="ms-icon-arrow-up" size="28" color="#0D9E31"></e-icon>
          </view> -->
        </view>
      </view>
      <view class="page-tile-item">
        <text class="page-tile-item__title u-line-1">约定收购量</text>
        <view class="page-tile-item__sum">
          <text class="page-tile-item__sum-value">2625.0</text>
          <text class="page-tile-item__sum-unit">公斤</text>
        </view>
        <view class="page-tile-item__data">
          <text class="page-tile-item__data-label">其中出口备货：</text>
          <text class="page-tile-item__data-value">882.0公斤</text>
        </view>
      </view>
    </view>
    <view class="page-info">
      <e-card-detail
        label-width="100"
        :showLabelColon="false"
        theme="list"
        :model="list"
        size="large"
        space="0"
        bodyBorderBottom
      ></e-card-detail>
    </view>
    <view class="page-list">
      <view class="page-list-item">
        <e-cell
          icon="ms-icon-money-bill_fill"
          color="007"
          title="费用标准"
          label="补贴标准及烟叶收购价格费用标准"
          isLink
        ></e-cell>
      </view>
    </view>
  </e-container>
</template>
<script>
export default {
  name: 'ContractBase',
  data() {
    return {
      list: [
        { label: '甲方', value: '福建省烟草公司龙岩市公司' },
        { label: '乙方', value: '张晓冬' },
        { label: '证件号码', value: '350500199901012232' },
        { label: '手机号码', value: '18700119933' },
        { label: '家庭住址', value: '上杭县城关镇桂花村88号' },
        { label: '签订日期', value: '2022年3月28日' },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.page {
  &-tile {
    display: flex;
    padding: 24rpx;
    &-item {
      padding: 24rpx;
      background: #fff;
      border-radius: 16rpx;
      flex: 1;

      & + .page-tile-item {
        margin-left: 16rpx;
      }
      &__title {
        display: block;
        font-size: 28rpx;
        line-height: 1.5;
        color: $uni-text-color-grey;
        margin-bottom: 44rpx;
      }
      &__sum {
        display: flex;
        align-items: center;
        height: 64rpx;
        &-value {
          font-weight: bold;
          font-size: 48rpx;
          line-height: 64rpx;
          color: $uni-text-color;
          margin-right: 10rpx;
        }
        &-unit {
          font-size: 24rpx;
          line-height: 1.5;
          color: $uni-text-color-disable;
        }
      }
      &__data {
        display: flex;
        align-items: center;
        height: 40rpx;
        &-label {
          font-size: 24rpx;
          line-height: 1.5;
          color: $uni-text-color-disable;
        }
        &-value {
          font-size: 24rpx;
          line-height: 1.5;
        }
        &-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40rpx;
          height: 40rpx;
          border-radius: 50%;
          margin-left: 14rpx;
          &.decrease {
            background: $uni-color-error-light;
          }
          &.increase {
            background: $uni-color-success-light;
          }
        }
      }
    }
  }
  &-list {
    &-item {
      margin-top: 24rpx;
    }
  }
}
</style>
